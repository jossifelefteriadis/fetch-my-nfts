import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import Card from "./card";
import styles from "../styles/FetchData.module.css";

export default function FetchData() {
  const { address } = useAccount();
  const [data, setData] = useState([]);

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-API-Key": "test",
      },
    };

    useEffect(() => {
      fetch(
        `https://deep-index.moralis.io/api/v2/${address}/nft?chain=polygon&format=decimal`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setData(response.result);
        })
        .catch((err) => console.error(err));
    }, [])

  return (
    <section className={styles.dataContainer}>
      {data.map(nft => {
        return (
          <Card uri={nft} key={nft.block_number_minted} />
        )
      })}
    </section>
  );
}