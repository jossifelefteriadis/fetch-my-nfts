import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import axios from "axios";

import Card from "./Card";

export default function FetchData() {
  const { address, isConnected } = useAccount();
  const [data, setData] = useState([]);

  const moralisApiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY;

  useEffect(() => {
    if (!address) return;
    const fetchNFTs = async () => {
      try {
        const response = await axios.get(
          `https://deep-index.moralis.io/api/v2/${address}/nft`,
          {
            params: {
              chain: "0x1",
              format: "decimal",
              token_addresses: [],
              media_items: false,
            },
            headers: {
              "X-API-Key": moralisApiKey,
            },
          }
        );
        setData(response.data.result);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };
    fetchNFTs();
  }, [isConnected, address]);

  return (
    <section className="w-[65rem] flex flex-wrap">
      {data.map((nft) => {
        return (
          <Card
            uri={nft}
            key={
              nft.block_number_minted || Math.random().toString(36).substr(2, 9)
            }
          />
        );
      })}
    </section>
  );
}
