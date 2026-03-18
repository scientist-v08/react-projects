// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';

import { Friend } from "./friend";

export function App() {
  return (
    <>
      <Friend name="Manoj.C" hobbies={['Cricket', 'Movies']} />
      <Friend name="Rahul" hobbies={['Masturbating', 'Breaking up']} />
    </>
  );
}

export default App;
