import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<any[]>([]); // in real life we define it as an actually type or interface instead of using any, which defeats the purpose of typescript
  const [page, setPage] = useState<number>(0);

  async function getUserInfo(page: number) {
    const result = await fetch(`https://randomuser.me/api?page=${page}`)
      .then((res) => res.json())
      .catch((e) => console.error("Error: " + e));
    return result.results;
  }

  useEffect(() => {
    async function getData() {
      const userData = await getUserInfo(page);
      setData(userData);
    }
    getData();
  }, []);

  useEffect(() => {
    async function appendNewUser() {
      const userData = await getUserInfo(page);
      // const newArray = data.concat(userData); //concat creates a new array
      // setData(newArray);
      setData([...data, ...userData]); //destructuring  also works
    }
    appendNewUser();
  }, [page]);

  return (
    <>
      {count} <button onClick={() => setCount(count + 1)}>Increase</button>
      {data.map((user, idx) => (
        <div key={idx}>
          <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
          <img src={user.picture.large} />
        </div>
      ))}
      <button onClick={() => setPage(page + 1)}>Page: {page}</button>
    </>
  );
};

export default Counter;
