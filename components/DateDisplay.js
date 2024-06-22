"use client";
import { useEffect, useState } from "react";

import {
  collection,
  addDoc,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function DateDisplay({ date, id }) {
  const [documentData, setDocumentData] = useState(null);

  const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  const rand = (min = 0, max = 1000) =>
    Math.floor(Math.random() * (max - min) + min);
  const randChar = (length = 6) => {
    const randchars = [];
    for (let i = 0; i < length; i++) {
      randchars.push(chars[rand(0, chars.length)]);
    }

    return randchars.join("");
  };
  const keygen = (prefix = "c-", sufix = "") =>
    `${prefix}${randChar()}${sufix}`;

  // read from database

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const docRef = doc(db, date, id); // Replace with your collection and document ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setDocumentData(data);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchDocument();
  }, [date, id]);
  return (
    <>
      {documentData && <p style={{ marginTop: "0px" }}>{documentData.date}</p>}
    </>
  );
}
