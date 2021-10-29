import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Tweet } from "../components/tweet";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  const [tweets, setTweets] = useState<string[]>([]);
  const [newTweet, setNewTweet] = useState<string>("");

  useEffect(() => {
    const header = document.getElementById("header");
    header?.addEventListener("click", vanishTweets);

    return () => {
      header?.removeEventListener("click", vanishTweets);
    };
  }, []);

  const vanishTweets = () => {
    window.alert("Vanish!");
    setTweets([]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  };

  return (
    <>
      <header id="header">Vanish Twitter</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's in your mind?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <input type="submit" value="Tweet!" />
      </form>
      <main>
        {tweets.map((t, i) => (
          <Tweet key={i} tweet={t} />
        ))}
      </main>
    </>
  );
};

export default Home;
