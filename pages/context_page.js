// import StoreContextProvider, {
//   useStoreContext,
// } from "../context/store-context";
import StoreContextProvider, { useStoreContext } from "@/context/store_context";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

// Winner Component that shows the final results.
const Winner = () => {
  const { teamA, teamB } = useStoreContext();
  console.log("Winner");

  return (
    <div className={styles.winner}>
      <h1 className={styles.text}>Winner</h1>
      <h4 className={`text-blue-800 w-full flex justify-center text-xl`}>
        {teamA === teamB ? "DRAW" : teamA > teamB ? "TEAM A" : "TEAM B"}
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
  const store = useStoreContext();
  console.log("PlayerA");

  return (
    <Player
      label={"Team A"}
      score={store.teamA}
      onIncrease={store.increaseTeamAScore}
      onDecrease={store.decreaseTeamAScore}
    />
  );
};

// Player B Components that subscribed the Context.
const PlayerB = () => {
  const store = useStoreContext();
  console.log("PlayerB");

  return (
    <Player
      label={"Team B"}
      score={store.teamB}
      onIncrease={store.increaseTeamBScore}
      onDecrease={store.decreaseTeamBScore}
    />
  );
};

// Players component will contains all active player components
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

export default function ContextPage() {
  return (
    <>
      <Head>
        <title>Context</title>
        <meta name="description" content="Zustand" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full flex justify-center">
        <Link href="/">Home</Link>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className="text-3xl font-bold text-black">Context</h1>
            <Winner />
            <Players />
          </main>
        </div>
      </div>
    </>
  );
}
