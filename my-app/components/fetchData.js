import { useAccount } from "wagmi";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card";
import styles from "../styles/FetchData.module.css";

export default function FetchData() {
  const { address } = useAccount();
  const [data, setData] = useState([]);
  const key = process.env.NEXT_PUBLIC_Moralis_Key;

  const options = {
    method: "GET",
    url: `https://deep-index.moralis.io/api/v2/${address}/nft`,
    params: { chain: "polygon", format: "decimal" },
    headers: {
      accept: "application/json",
      "X-API-Key": key,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setData(response.data.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <section className={styles.dataContainer}>
      {data.map((nft) => {
        return <Card uri={nft} key={nft.block_number_minted} />;
      })}
    </section>
  );
}
