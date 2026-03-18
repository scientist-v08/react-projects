// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';

import { HelloComponent } from "./hello";

export function App() {
  return (
    <>
      <HelloComponent to="Manoj.C" from="Manoj.V" />
      <HelloComponent to="Mahantesh" from="Manoj.V" />
    </>
  );
}

export default App;
