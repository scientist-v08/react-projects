import { useEffect, useState } from 'react';

type meowFactsType = { data: string[] };

export default function App() {
  const [meowfactsData, setmeowfactsData] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch(`https://meowfacts.herokuapp.com/?count=${count}`)
      .then((res) => res.json())
      .then((data: meowFactsType) => {
        setmeowfactsData(data.data);
      });
  }, [count]);
  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
      {meowfactsData.map((fact, index) => (
        <h3 key={index}>{fact}</h3>
      ))}
    </div>
  );
}
