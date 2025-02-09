import Jokes from './jokes';

export default function App() {
  return (
    <>
      <Jokes
        setup="I got my daughter a fridge for her birthday."
        puncline="I can't wait to see her face light up when she opens it."
      />
      <hr />
      <Jokes
        setup="How did the hacker escape the police?"
        puncline="He just ransomware!"
      />
      <hr />
      <Jokes
        setup="Why don't pirates travel on mountain roads?"
        puncline="Scurvy."
      />
      <hr />
      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        puncline="Swarm."
      />
      <hr />
      <Jokes
        setup="What's the best thing about Switzerland?"
        puncline="I don't know, but the flag is a big plus!"
      />
      <hr />
      <Jokes puncline="It's hard to explain puns to kleptomaniacs because they always take things literally." />
    </>
  );
}
