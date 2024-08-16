import { useState } from "react";

export default function Card(props) {
  const [nft, setNft] = useState(JSON.parse(props.uri.metadata));
  const [nftImage, setNftImage] = useState(() => {
    if (nft?.image) {
      return nft.image.includes("ipfs")
        ? `https://ipfs.io/ipfs/${nft.image.split("ipfs://")[1]}`
        : nft.image.split("\\")[0];
    }
  });

  return (
    <section className="w-96 h-80 flex flex-col items-center m-8 py-8 border-1 border-[#9b9b9b] rounded-lg">
      {nft?.name ? (
        <h1 className="font-lg text-center color-[#e78db3]">{nft.name}</h1>
      ) : (
        <h1 className="font-lg text-center color-[#e78db3]">
          No NFT title can be shown.
        </h1>
      )}
      {nftImage ? (
        <img src={nftImage} className="w-72 h-44 object-cover" />
      ) : (
        <p>No NFT image can be shown.</p>
      )}
    </section>
  );
}
