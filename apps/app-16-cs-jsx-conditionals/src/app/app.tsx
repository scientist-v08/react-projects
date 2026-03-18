// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';

import { Win } from "./win";

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

export function App() {
  const num = getNum();
  return (
    <div>
      <h1>Your number is: {num}</h1>
      {num === 7 ? <Win /> : <p>Sorry You Lose!</p>}
    </div>
  );
}

export default App;
