import { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import styles from "./Nav.module.css";

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
    <section className="h-16 flex flex-row justify-between items-center px-8">
      <Link href="/">
        <h1 className="text-4xl cursor-pointer">
          <span className={`${styles.titleWord} ${styles.titleWord1}`}>MY</span>
          <span className={`${styles.titleWord} ${styles.titleWord2}`}>
            NFT
          </span>
        </h1>
      </Link>
      {isLoggedIn && (
        <ul className={styles.navItems}>
          <li>
            <ConnectButton showBalance={false} />
          </li>
        </ul>
      )}
    </section>
  );
}
