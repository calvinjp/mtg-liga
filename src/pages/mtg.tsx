import { useEffect, useState } from "react";

type Card = {
  name: "string";
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
          setData(data.cards);
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
      {data.map((cards) => (
        <h2>{cards.name}</h2>
      ))}
    </>
  );
};

export default Magic;
