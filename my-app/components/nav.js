import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

export default function Nav() {
  const { isConnected } = useAccount();
  const [isLoggedIn, logIn] = useState(false);

  useEffect(() => {
    if (isConnected) {
      logIn(true);
    } else {
      logIn(false);
    }
  }, [isConnected]);

  return (
    <div className={styles.navContainer}>
      <Link href="/">
        <h1 className={styles.title}>
          <span className={`${styles.titleWord} ${styles.titleWord1}`}>MY</span>
          <span className={`${styles.titleWord} ${styles.titleWord2}`}>
            NFT
          </span>
        </h1>
      </Link>
      {isLoggedIn && (
        <ul className={styles.navItems}>
          <li>
            <ConnectButton />
          </li>
        </ul>
      )}
    </div>
  );
}