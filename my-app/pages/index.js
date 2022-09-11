import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

import LoggedIn from "../components/loggedIn";

export default function Home() {
  const { isConnected } = useAccount();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isConnected]);
  return (
    <section className={styles.container}>
      <Nav />
      {isLoggedIn ? (
        <main className={styles.main}>
          <h1 className={styles.title} style={{ marginBottom: "4rem" }}>
            Connect your Metamask and see your <span>Polygon</span> owned <span>NFT&apos;s</span>
          </h1>
          <ConnectButton />
        </main>
      ) : (
        <LoggedIn />
      )}
    </section>
  );
}