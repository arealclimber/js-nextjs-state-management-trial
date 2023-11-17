import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import {
  decreaseTeamA,
  decreaseTeamB,
  increaseTeamA,
  increaseTeamB,
} from "@/store/redux_toolkit";
import Link from "next/link";

// Winner Component that shows the final results.
const Winner = () => {
  const scoreA = useSelector((state) => state.scores.teamA);
  const scoreB = useSelector((state) => state.scores.teamB);
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

// Reusable player component that renders Players details and actions.
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
  const dispatch = useDispatch();
  const score = useSelector((state) => state.scores.teamA);
  console.log("PlayerA");

  return (
    <Player
      label={"Team A"}
      score={score}
      onIncrease={() => dispatch(increaseTeamA())}
      onDecrease={() => dispatch(decreaseTeamA())}
    />
  );
};

// Player B Components that subscribed the Context.
const PlayerB = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.scores.teamB);
  console.log("PlayerB");

  return (
    <Player
      label={"Team B"}
      score={score}
      onIncrease={() => dispatch(increaseTeamB())}
      onDecrease={() => dispatch(decreaseTeamB())}
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

export default function ReduxToolkitPage() {
  return (
    <>
      <Head>
        <title>Redux Toolkit</title>
        <meta name="description" content="Redux Toolkit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full flex justify-center">
        <Link href="/">Home</Link>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className="text-3xl font-bold text-black">Redux Toolkit</h1>

            <Winner />
            <Players />
          </main>
        </div>
      </div>
    </>
  );
}
