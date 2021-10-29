import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Tweet } from "src/components/tweet";
import Head from "next/head";
import Image from "next/image";
import styles from "src/styles/Home.module.css";

const Home: NextPage = () => {
  const [tweets, setTweets] = useState<string[]>([]);
  const [newTweet, setNewTweet] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTweets([...tweets, newTweet]);
    setNewTweet("");
  };

  return (
    <>
      <header>Vanish Twitter</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's in your mind?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <input type="submit" value="Tweet!" />
      </form>
      {tweets.map((t) => (
        <Tweet tweet={t} />
      ))}
    </>
  );
};

export default Home;
