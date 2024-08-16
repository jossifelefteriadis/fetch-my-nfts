"use client";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import Nav from "./components/Nav";
import LoggedIn from "./components/LoggedIn";

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
    <section className="flex flex-col">
      <Nav />
      {isLoggedIn ? (
        <main className="min-h-screen flex flex-col items-center py-40">
          <h1 className="text-3xl text-center" style={{ marginBottom: "4rem" }}>
            Connect your Metamask and see your{" "}
            <span className="text-[#e78db3]">Ethereum</span> owned{" "}
            <span className="text-[#e78db3]">NFT&apos;s</span>
          </h1>
          <ConnectButton />
        </main>
      ) : (
        <LoggedIn />
      )}
    </section>
  );
}
