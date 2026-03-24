import { useEffect, useState } from "react";
import MagicCard from "../components/magic-card";

type Card = {
  name: "string";
  imageUrl: string;
};
const Magic = () => {
  const [data, setData] = useState<Card[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function getData() {
      await fetch(`https://api.magicthegathering.io/v1/cards`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch");
          }
          return res.json();
        })
        .then((data) => {
          //remove duplicates
          const seen = new Set();

          const uniqueCards = [];
          for (const card of data.cards) {
            if (!seen.has(card.name)) {
              seen.add(card.name);
              uniqueCards.push(card);
            }
          }
          setData(uniqueCards);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }
    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {data.map((card) => (
        <MagicCard name={card.name} imageUrl={card.imageUrl} />
      ))}
    </>
  );
};

export default Magic;
