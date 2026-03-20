// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';

function getMood() {
  const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
  return moods[Math.floor(Math.random() * moods.length)];
}

export function App() {
  return (
    <div>
      <h1>My Current Mood is: {getMood()}</h1>
    </div>
  );
}

export default App;
