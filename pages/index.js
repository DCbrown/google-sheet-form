import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = { name, email, phone };

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();

    console.log(content.data);
  };

  return (
    <div>
      <Head>
        <title>Bracket Challenge</title>
        <meta name="description" content="Bracket Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bracket Challenge</h1>
        <p>Welcome to the Bracket Challenge! Submit your bracket below.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
            />
          </label>
          <label>
            Email:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
            />
          </label>
          <label>
            Phone:
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              name="phone"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}
