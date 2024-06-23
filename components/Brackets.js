"use client";
import * as React from "react";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TeamSelector } from "./TeamSelector";
import { useState, useEffect } from "react";
import DateDisplay from "./DateDisplay";
import styles from "../styles/playoff.module.css";
import classNames from "classnames";
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
import Box from "@mui/material/Box";
import { InputLabel } from "@mui/material";

const Brackets = () => {
  const [roundTwoBracketOneSelection, setRoundTwoBracketOneSelection] =
    useState(null);

  const [roundTwoBracketTwoSelection, setRoundTwoBracketTwoSelection] =
    useState(null);

  const [roundTwoBracketThreeSelection, setRoundTwoBracketThreeSelection] =
    useState(null);

  const [roundTwoBracketFourSelection, setRoundTwoBracketFourSelection] =
    useState(null);

  const [roundThreeBracketOneSelection, setRoundThreeBracketOneSelection] =
    useState(null);

  const [roundThreeBracketTwoSelection, setRoundThreeBracketTwoSelection] =
    useState(null);

  const [roundFiveBracketOneSelection, setRoundFiveBracketOneSelection] =
    useState(null);

  const [roundFiveBracketTwoSelection, setRoundFiveBracketTwoSelection] =
    useState(null);

  const [roundFiveBracketThreeSelection, setRoundFiveBracketThreeSelection] =
    useState(null);

  const [roundFiveBracketFourSelection, setRoundFiveBracketFourSelection] =
    useState(null);

  const [roundSixBracketOneSelection, setRoundSixBracketOneSelection] =
    useState(null);

  const [roundSixBracketTwoSelection, setRoundSixBracketTwoSelection] =
    useState(null);

  const [roundChampBracketOneSelection, setRoundChampBracketOneSelection] =
    useState(null);

  const [roundChampBracketTwoSelection, setRoundChampBracketTwoSelection] =
    useState(null);

  const [bracket1Data1, setBracket1Data1] = useState(null);
  const [bracket1Data2, setBracket1Data2] = useState(null);
  const [bracket2Data1, setBracket2Data1] = useState(null);
  const [bracket2Data2, setBracket2Data2] = useState(null);
  const [bracket3Data1, setBracket3Data1] = useState(null);
  const [bracket3Data2, setBracket3Data2] = useState(null);
  const [bracket4Data1, setBracket4Data1] = useState(null);
  const [bracket4Data2, setBracket4Data2] = useState(null);

  const [fourthBracket1Data1, setFourthBracket1Data1] = useState(null);
  const [fourthBracket1Data2, setFourthBracket1Data2] = useState(null);
  const [fourthBracket2Data1, setFourthBracket2Data1] = useState(null);
  const [fourthBracket2Data2, setFourthBracket2Data2] = useState(null);
  const [fourthBracket3Data1, setFourthBracket3Data1] = useState(null);
  const [fourthBracket3Data2, setFourthBracket3Data2] = useState(null);
  const [fourthBracket4Data1, setFourthBracket4Data1] = useState(null);
  const [fourthBracket4Data2, setFourthBracket4Data2] = useState(null);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  const [documentDataNFC, setDocumentDataNFC] = useState(null);
  const [documentDataAFC, setDocumentDataAFC] = useState(null);

  const [isLocked, setIsLocked] = useState(false);

  const fetchAllDocumentBracketData2 = async () => {
    // fetch all the data from the database
    try {
      const docRef1_1 = doc(db, `roundFourTeamEntry`, "yQdMXdhs4mC8acNRR9WX");
      const docRef2_1 = doc(db, `roundFourTeamEntry`, "fCNNrMyn3G7WMSjSATl2");
      const docRef3_1 = doc(db, `roundFourTeamEntry`, "5wcA2duztAvVLIJLZhYn");
      const docRef4_1 = doc(db, `roundFourTeamEntry`, "BjEjs63EhFzZPbtV37oO");

      const docRef1_2 = doc(db, `roundFourTeamEntry`, "pSu3vMM4afTzOGHE7pHl");
      const docRef2_2 = doc(db, `roundFourTeamEntry`, "Db6pD8XshKwXT36f8IWH");
      const docRef3_2 = doc(db, `roundFourTeamEntry`, "vBaThQsqGRD9x8ERR9tm");
      const docRef4_2 = doc(db, `roundFourTeamEntry`, "yoUaJsHqFkVezm0vvSU8");

      // get each document and set the state
      const docSnap1_1 = await getDoc(docRef1_1);
      const docSnap2_1 = await getDoc(docRef2_1);
      const docSnap3_1 = await getDoc(docRef3_1);
      const docSnap4_1 = await getDoc(docRef4_1);

      const docSnap1_2 = await getDoc(docRef1_2);
      const docSnap2_2 = await getDoc(docRef2_2);
      const docSnap3_2 = await getDoc(docRef3_2);
      const docSnap4_2 = await getDoc(docRef4_2);

      if (docSnap1_1.exists()) {
        const data = docSnap1_1.data();
        setFourthBracket1Data1(data);
        console.log("1-1", data);
      }
      if (docSnap2_1.exists()) {
        const data = docSnap2_1.data();
        setFourthBracket2Data1(data);
        console.log("2-1", data);
      }
      if (docSnap3_1.exists()) {
        const data = docSnap3_1.data();
        setFourthBracket3Data1(data);
        console.log("3-1", data);
      }
      if (docSnap4_1.exists()) {
        const data = docSnap4_1.data();
        setFourthBracket4Data1(data);
      }

      if (docSnap1_2.exists()) {
        const data = docSnap1_2.data();
        setFourthBracket1Data2(data);
      }
      if (docSnap2_2.exists()) {
        const data = docSnap2_2.data();
        setFourthBracket2Data2(data);
      }
      if (docSnap3_2.exists()) {
        const data = docSnap3_2.data();
        setFourthBracket3Data2(data);
      }
      if (docSnap4_2.exists()) {
        const data = docSnap4_2.data();
        setFourthBracket4Data2(data);
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  // read from database
  const fetchAllDocumentBracketData = async () => {
    // fetch all the data from the database
    try {
      const docRef1_1 = doc(db, `roundOneTeamEntry`, "KtRGKJ1rCveYOara6G1K");
      const docRef2_1 = doc(db, `roundOneTeamEntry`, "SuRdF29rV1jUdV2nRLqu");
      const docRef3_1 = doc(db, `roundOneTeamEntry`, "9E7gCsnkAu6D1wSKZfub");
      const docRef4_1 = doc(db, `roundOneTeamEntry`, "CAHAu8xKa3WqQosULsNB");

      const docRef1_2 = doc(db, `roundOneTeamEntry`, "3k4RCCne3mRv54UrO4Lu");
      const docRef2_2 = doc(db, `roundOneTeamEntry`, "yO7EyKt7CxMzY8mfdizW");
      const docRef3_2 = doc(db, `roundOneTeamEntry`, "rHSyTroJ359xLB5D32tp");
      const docRef4_2 = doc(db, `roundOneTeamEntry`, "i03TVoErWY8WSSWMitk4");

      // get each document and set the state
      const docSnap1_1 = await getDoc(docRef1_1);
      const docSnap2_1 = await getDoc(docRef2_1);
      const docSnap3_1 = await getDoc(docRef3_1);
      const docSnap4_1 = await getDoc(docRef4_1);

      const docSnap1_2 = await getDoc(docRef1_2);
      const docSnap2_2 = await getDoc(docRef2_2);
      const docSnap3_2 = await getDoc(docRef3_2);
      const docSnap4_2 = await getDoc(docRef4_2);

      if (docSnap1_1.exists()) {
        const data = docSnap1_1.data();
        setBracket1Data1(data);
      }
      if (docSnap2_1.exists()) {
        const data = docSnap2_1.data();
        setBracket2Data1(data);
      }
      if (docSnap3_1.exists()) {
        const data = docSnap3_1.data();
        setBracket3Data1(data);
      }
      if (docSnap4_1.exists()) {
        const data = docSnap4_1.data();
        setBracket4Data1(data);
      }

      if (docSnap1_2.exists()) {
        const data = docSnap1_2.data();
        setBracket1Data2(data);
      }
      if (docSnap2_2.exists()) {
        const data = docSnap2_2.data();
        setBracket2Data2(data);
      }
      if (docSnap3_2.exists()) {
        const data = docSnap3_2.data();
        setBracket3Data2(data);
      }
      if (docSnap4_2.exists()) {
        const data = docSnap4_2.data();
        setBracket4Data2(data);
      }

      if (docSnapIsLocked.exists()) {
        const data = docSnapIsLocked.data();
        setIsLocked(data.isLocked);
        console.log("lcoked", data);
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  const handleBracketData = async () => {
    const q1 = query(collection(db, `roundTwoBracketOneSelection`));
    const q2 = query(collection(db, `roundTwoBracketTwoSelection`));
    const q3 = query(collection(db, `roundTwoBracketThreeSelection`));
    const q4 = query(collection(db, `roundTwoBracketFourSelection`));

    const q5 = query(collection(db, `roundThreeBracketOneSelection`));
    const q6 = query(collection(db, `roundThreeBracketTwoSelection`));

    const q7 = query(collection(db, `roundFiveBracketOneSelection`));
    const q8 = query(collection(db, `roundFiveBracketTwoSelection`));
    const q9 = query(collection(db, `roundFiveBracketThreeSelection`));
    const q10 = query(collection(db, `roundFiveBracketFourSelection`));

    const q11 = query(collection(db, `roundSixBracketOneSelection`));
    const q12 = query(collection(db, `roundSixBracketTwoSelection`));

    const q13 = query(collection(db, `roundChampBracketOneSelection`));
    const q14 = query(collection(db, `roundChampBracketTwoSelection`));

    // const q4 = query(collection(db, `roundThreeBracketThreeSelection`));

    // ROUND 2
    const unsubscribe1 = onSnapshot(q1, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundTwoBracketOneSelection(itemsArr);
    });

    const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundTwoBracketTwoSelection(itemsArr);
    });

    const unsubscribe3 = onSnapshot(q3, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundTwoBracketThreeSelection(itemsArr);
    });

    const unsubscribe4 = onSnapshot(q4, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundTwoBracketFourSelection(itemsArr);
    });

    // ROUND 3
    const unsubscribe5 = onSnapshot(q5, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundThreeBracketOneSelection(itemsArr);
    });

    const unsubscribe6 = onSnapshot(q6, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundThreeBracketTwoSelection(itemsArr);
    });

    // ROUND 5
    const unsubscribe7 = onSnapshot(q7, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundFiveBracketOneSelection(itemsArr);
    });

    const unsubscribe8 = onSnapshot(q8, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundFiveBracketTwoSelection(itemsArr);
    });

    const unsubscribe9 = onSnapshot(q9, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundFiveBracketThreeSelection(itemsArr);
    });

    const unsubscribe10 = onSnapshot(q10, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundFiveBracketFourSelection(itemsArr);
    });

    // ROUND 6

    const unsubscribe11 = onSnapshot(q11, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundSixBracketOneSelection(itemsArr);
    });

    const unsubscribe12 = onSnapshot(q12, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundSixBracketTwoSelection(itemsArr);
    });

    // CHAMPIONSHIP

    const unsubscribe13 = onSnapshot(q13, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundChampBracketOneSelection(itemsArr);
    });

    const unsubscribe14 = onSnapshot(q14, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setRoundChampBracketTwoSelection(itemsArr);
    });
  };

  const fetchDocumentNFC = async () => {
    try {
      const docRef = doc(db, `bracketNFCscore`, "vuunnZk8whNO8z25JYUD"); // Replace with your collection and document ID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setDocumentDataNFC(data);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  const fetchDocumentAFC = async () => {
    try {
      const docRef = doc(db, `bracketAFCscore`, "NTd9HuYVYrwUvugbOrMi"); // Replace with your collection and document ID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setDocumentDataAFC(data);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  console.log(roundTwoBracketOneSelection);

  useEffect(() => {
    fetchAllDocumentBracketData();
    fetchAllDocumentBracketData2();
    fetchDocumentNFC();
    fetchDocumentAFC();
    handleBracketData();
    const q = query(collection(db, "rounds"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setIsLocked(itemsArr);
    });
    console.log("Component loaded");
  }, []);

  const [selectedTeam, setSelectedTeam] = useState("");

  const [roundTwoBracketOneInput, setRoundTwoBracketOneInput] = useState("");

  const [roundTwoBracketTwoInput, setRoundTwoBracketTwoInput] = useState("");

  const [roundTwoBracketThreeInput, setRoundTwoBracketThreeInput] =
    useState(null);

  const [roundTwoBracketFourInput, setRoundTwoBracketFourInput] =
    useState(null);

  const [roundThreeBracketOneInput, setRoundThreeBracketOneInput] =
    useState(null);

  const [roundThreeBracketTwoInput, setRoundThreeBracketTwoInput] =
    useState(null);

  const [roundFiveBracketOneInput, setRoundFiveBracketOneInput] =
    useState(null);

  const [roundFiveBracketTwoInput, setRoundFiveBracketTwoInput] =
    useState(null);

  const [roundFiveBracketThreeInput, setRoundFiveBracketThreeInput] =
    useState(null);

  const [roundFiveBracketFourInput, setRoundFiveBracketFourInput] =
    useState(null);

  const [roundSixBracketOneInput, setRoundSixBracketOneInput] = useState(null);

  const [roundSixBracketTwoInput, setRoundSixBracketTwoInput] = useState(null);

  const [roundChampBracketOneInput, setRoundChampBracketOneInput] =
    useState(null);

  const [roundChampBracketTwoInput, setRoundChampBracketTwoInput] =
    useState(null);

  const handleChange1 = (event) => {
    setRoundTwoBracketOneInput(event.target.value);
  };

  const handleChange2 = (event) => {
    setRoundTwoBracketTwoInput(event.target.value);
  };

  const handleChange3 = (event) => {
    setRoundTwoBracketThreeInput(event.target.value);
  };

  const handleChange4 = (event) => {
    setRoundTwoBracketFourInput(event.target.value);
  };

  const handleChange5 = (event) => {
    setRoundThreeBracketOneInput(event.target.value);
  };

  const handleChange6 = (event) => {
    setRoundThreeBracketTwoInput(event.target.value);
  };

  const handleChange7 = (event) => {
    setRoundFiveBracketOneInput(event.target.value);
  };

  const handleChange8 = (event) => {
    setRoundFiveBracketTwoInput(event.target.value);
  };

  const handleChange9 = (event) => {
    setRoundFiveBracketThreeInput(event.target.value);
  };

  const handleChange10 = (event) => {
    setRoundFiveBracketFourInput(event.target.value);
  };

  const handleChange11 = (event) => {
    setRoundSixBracketOneInput(event.target.value);
  };

  const handleChange12 = (event) => {
    setRoundSixBracketTwoInput(event.target.value);
  };

  const handleChange13 = (event) => {
    setRoundChampBracketOneInput(event.target.value);
  };

  const handleChange14 = (event) => {
    setRoundChampBracketTwoInput(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // get the value of the inputs and console.log them
    console.log("Round 2 Bracket 1: ", roundTwoBracketOneInput);
    console.log("Round 2 Bracket 2: ", roundTwoBracketTwoInput);
    console.log("Round 2 Bracket 3: ", roundTwoBracketThreeInput);
    console.log("Round 2 Bracket 4: ", roundTwoBracketFourInput);
    console.log("Round 3 Bracket 1: ", roundThreeBracketOneInput);
    console.log("Round 3 Bracket 2: ", roundThreeBracketTwoInput);
    console.log("Round 5 Bracket 1: ", roundFiveBracketOneInput);
    console.log("Round 5 Bracket 2: ", roundFiveBracketTwoInput);
    console.log("Round 5 Bracket 3: ", roundFiveBracketThreeInput);
    console.log("Round 5 Bracket 4: ", roundFiveBracketFourInput);
    console.log("Round 6 Bracket 1: ", roundSixBracketOneInput);
    console.log("Round 6 Bracket 2: ", roundSixBracketTwoInput);
    console.log("Round Champ Bracket 1: ", roundChampBracketOneInput);
    console.log("Round Champ Bracket 2: ", roundChampBracketTwoInput);
    // get the value of the text inputs and console.log them
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);

    const values = [
      name,
      email,
      phone,
      roundTwoBracketOneInput,
      roundTwoBracketTwoInput,
      roundTwoBracketThreeInput,
      roundTwoBracketFourInput,
      roundThreeBracketOneInput,
      roundThreeBracketTwoInput,
      roundFiveBracketOneInput,
      roundFiveBracketTwoInput,
      roundFiveBracketThreeInput,
      roundFiveBracketFourInput,
      roundSixBracketOneInput,
      roundSixBracketTwoInput,
      roundChampBracketOneInput,
      roundChampBracketTwoInput,
    ];

    const form = {
      name,
      email,
      phone,
      roundTwoBracketOneInput,
      roundTwoBracketTwoInput,
      roundTwoBracketThreeInput,
      roundTwoBracketFourInput,
      roundThreeBracketOneInput,
      roundThreeBracketTwoInput,
      roundFiveBracketOneInput,
      roundFiveBracketTwoInput,
      roundFiveBracketThreeInput,
      roundFiveBracketFourInput,
      roundSixBracketOneInput,
      roundSixBracketTwoInput,
      roundChampBracketOneInput,
      roundChampBracketTwoInput,
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();

    console.log(content);
    alert(content.data);
  };

  return (
    <section class="bracketWrapper">
      <FormControl style={{ width: "100%" }} size="small" onSubmit={onSubmit}>
        <div className={styles.container}>
          <div className={classNames(styles.split, styles.splitOne)}>
            <div
              className={classNames(
                styles.round,
                styles.roundOne,
                styles.current
              )}
            >
              <div className={styles.roundDetails}>
                <DateDisplay date="date1" id="XQerF0rR7BFnBlIzyQzD" />
              </div>
              <ul className={styles.matchup}>
                <li className={classNames(styles.team, styles.teamTop)}>
                  {bracket1Data1 && (
                    <div>
                      <span>{bracket1Data1.team}</span>
                      <br />
                      <span className={styles.score}>25 Points</span>
                    </div>
                  )}
                  <span className={styles.score}>25 Points</span>
                </li>
                <li className={classNames(styles.team, styles.teamBottom)}>
                  {bracket1Data2 && (
                    <div>
                      <span>{bracket1Data2.team}</span>
                      <br />
                      <span className={styles.score}>25 Points</span>
                    </div>
                  )}
                  <span className={styles.score}>25 Points</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={classNames(styles.team, styles.teamTop)}>
                  {bracket2Data1 && (
                    <div>
                      <span>{bracket2Data1.team}</span>
                      <br />
                      <span className={styles.score}>25 Points</span>
                    </div>
                  )}
                  <span className={styles.score}>25 Points</span>
                </li>
                <li className={classNames(styles.team, styles.teamBottom)}>
                  {bracket2Data2 && (
                    <div>
                      <span>{bracket2Data2.team}</span>
                      <br />
                      <span className={styles.score}>25 Points</span>
                    </div>
                  )}
                  <span className={styles.score}>25 Points</span>
                </li>
              </ul>
              <span className={styles.bottomBrackets}>
                <ul className={styles.matchup}>
                  <li className={classNames(styles.team, styles.teamTop)}>
                    {bracket3Data1 && (
                      <div>
                        <span>{bracket3Data1.team}</span>
                        <br />
                        <span className={styles.score}>25 Points</span>
                      </div>
                    )}
                    <span className={styles.score}>25 Points</span>
                  </li>
                  <li className={classNames(styles.team, styles.teamBottom)}>
                    {bracket3Data2 && (
                      <div>
                        <span>{bracket3Data2.team}</span>
                        <br />
                        <span className={styles.score}>25 Points</span>
                      </div>
                    )}
                    <span className={styles.score}>25 Points</span>
                  </li>
                </ul>
                <ul className={styles.matchup}>
                  <li className={classNames(styles.team, styles.teamTop)}>
                    {bracket4Data1 && (
                      <div>
                        <span>{bracket4Data1.team}</span>
                        <br />
                        <span className={styles.score}>25 Points</span>
                      </div>
                    )}
                    <span className={styles.score}>25 Points</span>
                  </li>
                  <li className={classNames(styles.team, styles.teamBottom)}>
                    {bracket4Data2 && (
                      <div>
                        <span>{bracket4Data2.team}</span>
                        <br />
                        <span className={styles.score}>25 Points</span>
                      </div>
                    )}
                    <span className={styles.score}>25 Points</span>
                  </li>
                </ul>
              </span>
            </div>

            <div className={classNames(styles.round, styles.roundTwo)}>
              <div className={styles.roundDetails}>
                <DateDisplay date="date2" id="g9YY8O87yl8chkQmujap" />
              </div>
              <h1 className={styles.FCHeader}>AFC</h1>
              <div className={styles.BYE}>
                {documentDataAFC && (
                  <>
                    <h2>
                      {documentDataAFC.bye} {documentDataAFC.team}
                    </h2>
                    <h3>BYE</h3>
                  </>
                )}
                <p>Will play lowest remaining seed</p>
              </div>
              <ul className={styles.matchup}>
                <li className={classNames(styles.team, styles.teamTop)}>
                  <div>
                    <TeamSelector
                      isLocked={isLocked[0]?.oneIsLocked}
                      selection={roundTwoBracketOneSelection}
                      selectedTeam={roundTwoBracketOneInput}
                      handleChange={handleChange1}
                    />
                    <span className={styles.score}>25 Points</span>
                  </div>
                </li>
                <li className={classNames(styles.team, styles.teamBottom)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundTwoBracketTwoSelection}
                    selectedTeam={roundTwoBracketTwoInput}
                    handleChange={handleChange2}
                  />
                  <span className={styles.score}>25 Points</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={classNames(styles.team, styles.teamTop)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundTwoBracketThreeSelection}
                    handleChange={handleChange3}
                  />
                  <span className={styles.score}>25 Points</span>
                </li>
                <li className={classNames(styles.team, styles.teamBottom)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundTwoBracketFourSelection}
                    handleChange={handleChange4}
                  />
                  <span className={styles.score}>25 Points</span>
                </li>
              </ul>
            </div>

            <div className={classNames(styles.round, styles.roundThree)}>
              <div className={styles.roundDetails}>
                <DateDisplay date="date3" id="UO6ryiQuxnQNWhfuYSre" />
              </div>
              <ul className={styles.matchup}>
                <li className={classNames(styles.team, styles.teamTop)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundThreeBracketOneSelection}
                    handleChange={handleChange5}
                  />
                  <span className={styles.score}>25 Points</span>
                </li>
                <li className={classNames(styles.team, styles.teamBottom)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundThreeBracketTwoSelection}
                    handleChange={handleChange6}
                  />
                  <span className={styles.score}>25 Points</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.champion}>
            <div className={styles.final}>
              <i className="fa fa-trophy"></i>
              <div className={styles.roundDetails}>
                <DateDisplay date="date7" id="2T3oKK2svNuX5zn0uK7w" />
              </div>
              <ul className={classNames(styles.matchup, styles.championship)}>
                <li className={classNames(styles.team, styles.teamTop)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundChampBracketOneSelection}
                    handleChange={handleChange7}
                  />
                </li>
                <li className={classNames(styles.team, styles.teamBottom)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundChampBracketTwoSelection}
                    handleChange={handleChange8}
                  />
                </li>
              </ul>
            </div>
            <input
              style={{
                marginBottom: "10px",
                border: "1px solid black",
                fontSize: "18px",
              }}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              style={{
                marginBottom: "10px",
                border: "1px solid black",
                fontSize: "18px",
              }}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              style={{
                marginBottom: "10px",
                border: "1px solid black",
                fontSize: "18px",
              }}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Phone"
              required
            />
            <Button
              type="submit"
              variant="outlined"
              className={styles.submitBtn}
              onClick={onSubmit}
            >
              Submit Picks
            </Button>
          </div>

          <div className={classNames(styles.split, styles.splitTwo)}>
            <div className={classNames(styles.round, styles.roundThree)}>
              <div className={styles.roundDetails}>
                <DateDisplay date="date6" id="Famv46kvAyNTM451zOmP" />
              </div>
              <ul className={styles.matchup}>
                <li className={classNames(styles.team, styles.teamTop)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundSixBracketOneSelection}
                    handleChange={handleChange9}
                  />
                  <span className={styles.score}>25 Points</span>
                </li>
                <li className={classNames(styles.team, styles.teamBottom)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundSixBracketTwoSelection}
                    handleChange={handleChange10}
                  />
                  <span className={styles.score}>25 Points</span>
                </li>
              </ul>
            </div>

            <div className={classNames(styles.round, styles.roundTwo)}>
              <div className={styles.roundDetails}>
                <DateDisplay date="date5" id="6QWntPL7l8RVyPo6RQMP" />
              </div>
              <h1 className={styles.FCHeader}>NFC</h1>
              <div className={styles.BYE}>
                {documentDataNFC && (
                  <>
                    <h2>
                      {documentDataNFC.bye} {documentDataNFC.team}
                    </h2>
                    <h3>BYE</h3>
                  </>
                )}
                <p>Will play lowest remaining seed</p>
              </div>
              <ul className={styles.matchup}>
                <li className={classNames(styles.team, styles.teamTop)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundFiveBracketOneSelection}
                    handleChange={handleChange11}
                  />
                  <span className={styles.score}>25 Points</span>
                </li>
                <li className={classNames(styles.team, styles.teamBottom)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundFiveBracketTwoSelection}
                    handleChange={handleChange12}
                  />
                  <span className={styles.score}>25 Points</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={classNames(styles.team, styles.teamTop)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundFiveBracketThreeSelection}
                    handleChange={handleChange13}
                  />
                  <span className={styles.score}>25 Points</span>
                </li>
                <li className={classNames(styles.team, styles.teamBottom)}>
                  <TeamSelector
                    isLocked={isLocked[0]?.oneIsLocked}
                    selection={roundFiveBracketFourSelection}
                    handleChange={handleChange14}
                  />
                  <span className={styles.score}>25 Points</span>
                </li>
              </ul>
            </div>
            <div
              className={classNames(
                styles.round,
                styles.roundOne,
                styles.current
              )}
            >
              <div className={styles.roundDetails}>
                <DateDisplay date="date4" id="U3HeAhdavcTpMJOq2wzx" />
              </div>
              <ul className={styles.matchup}>
                <li className={classNames(styles.team, styles.teamTop)}>
                  {fourthBracket1Data1 && (
                    <div>
                      <span>{fourthBracket1Data1.team}</span>
                      <br />
                      <span className={styles.score}>25 Points</span>
                    </div>
                  )}
                  <span className={styles.score}>25 Points</span>
                </li>
                <li className={classNames(styles.team, styles.teamBottom)}>
                  {fourthBracket1Data2 && (
                    <div>
                      <span>{fourthBracket1Data2.team}</span>
                      <br />
                      <span className={styles.score}>25 Points</span>
                    </div>
                  )}
                  <span className={styles.score}>25 Points</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={classNames(styles.team, styles.teamTop)}>
                  {fourthBracket2Data1 && (
                    <div>
                      <span>{fourthBracket2Data1.team}</span>
                      <br />
                      <span className={styles.score}>25 Points</span>
                    </div>
                  )}
                </li>
                <li className={classNames(styles.team, styles.teamBottom)}>
                  {fourthBracket2Data2 && (
                    <div>
                      <span>{fourthBracket2Data2.team}</span>
                      <br />
                      <span className={styles.score}>25 Points</span>
                    </div>
                  )}
                  <span className={styles.score}>25 Points</span>
                </li>
              </ul>

              <span className={styles.bottomBrackets}>
                <ul className={styles.matchup}>
                  <li className={classNames(styles.team, styles.teamTop)}>
                    {fourthBracket3Data1 && (
                      <div>
                        <span>{fourthBracket3Data1.team}</span>
                        <br />
                        <span className={styles.score}>25 Points</span>
                      </div>
                    )}
                    <span className={styles.score}>25 Points</span>
                  </li>
                  <li className={classNames(styles.team, styles.teamBottom)}>
                    {fourthBracket3Data2 && (
                      <div>
                        <span>{fourthBracket3Data2.team}</span>
                        <br />
                        <span className={styles.score}>25 Points</span>
                      </div>
                    )}
                    <span className={styles.score}>25 Points</span>
                  </li>
                </ul>
                <ul className={styles.matchup}>
                  <li className={classNames(styles.team, styles.teamTop)}>
                    {fourthBracket4Data1 && (
                      <div>
                        <span>{fourthBracket4Data1.team}</span>
                        <br />
                        <span className={styles.score}>25 Points</span>
                      </div>
                    )}
                    <span className={styles.score}>25 Points</span>
                  </li>
                  <li className={classNames(styles.team, styles.teamBottom)}>
                    {fourthBracket4Data2 && (
                      <div>
                        <span>{fourthBracket4Data2.team}</span>
                        <br />
                        <span className={styles.score}>25 Points</span>
                      </div>
                    )}
                    <span className={styles.score}>25 Points</span>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </FormControl>
    </section>
  );
};

export default Brackets;
