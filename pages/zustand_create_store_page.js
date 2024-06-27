import { GlobalContext } from "@/context/zustand_context";
import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";
import { useStore } from "zustand";
import styles from "../styles/Home.module.css";

// Winner Component that shows the final results.
const Winner = () => {
  const store = useContext(GlobalContext);
  if (!store) console.log("Missing GlobalContext in the tree");
  const scoreA = useStore(store, (s) => s.teamA);
  const scoreB = useStore(store, (s) => s.teamB);
  console.log("Winner");
  return (
    <div className={styles.winner}>
      <h1 className={styles.text}>Winner</h1>
      <h4 className={`text-blue-800 w-full flex justify-center text-xl`}>
        {scoreA === scoreB ? "DRAW" : scoreA > scoreB ? "TEAM A" : "TEAM B"}
      </h4>
    </div>
  );
};

// Reusable player component that render Players details and actions.
const Player = ({ label, score, onIncrease, onDecrease }) => (
  <div className={styles.playerContainer}>
    <h3 className={styles.text}>{label}</h3>
    <h4 className={styles.score}> {score} </h4>

    <div className={styles.btnWrapper}>
      <button className={styles.btn} onClick={onDecrease}>
        -
      </button>
      <button className={styles.btn} onClick={onIncrease}>
        +
      </button>
    </div>
  </div>
);

// Player A Components that subscribed the Context.
const PlayerA = () => {
  const store = useContext(GlobalContext);
  if (!store) console.log("Missing GlobalContext in the tree");
  const score = useStore(store, (s) => s.teamA);
  const increaseTeamAScore = useStore(store, (s) => s.increaseTeamAScore);
  const decreaseTeamAScore = useStore(store, (s) => s.decreaseTeamAScore);

  console.log("PlayerA");

  return (
    <Player
      label={"Team A"}
      score={score}
      onIncrease={increaseTeamAScore}
      onDecrease={decreaseTeamAScore}
    />
  );
};

// Player B Components that subscribed the Context.
const PlayerB = () => {
  const store = useContext(GlobalContext);
  if (!store) console.log("Missing GlobalContext in the tree");
  const score = useStore(store, (s) => s.teamB);
  const increaseTeamBScore = useStore(store, (s) => s.increaseTeamBScore);
  const decreaseTeamBScore = useStore(store, (s) => s.decreaseTeamBScore);
  console.log("PlayerB");
  return (
    <Player
      label={"Team B"}
      score={score}
      onIncrease={increaseTeamBScore}
      onDecrease={decreaseTeamBScore}
    />
  );
};

const Players = () => {
  console.log("Players (parent)");
  return (
    <div className={styles.playersContainer}>
      <h3 className={styles.text}>Players</h3>
      <div className={styles.playersWrapper}>
        <PlayerA />
        <PlayerB />
      </div>
    </div>
  );
};

export default function ZustandCreateStorePage() {
  return (
    <>
      <Head>
        <title>Zustand CreateStore</title>
        <meta name="description" content="Zustand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full flex justify-center">
        <Link href="/">Home</Link>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className="text-3xl font-bold text-black">
              Zustand Create Store
            </h1>

            <Winner />
            <Players />
          </main>
        </div>
      </div>
    </>
  );
}
