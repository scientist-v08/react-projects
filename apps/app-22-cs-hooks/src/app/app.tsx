// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';

import { SimpleFormHook } from './simpleForm';
import { useToggle } from './useToggle';

export function App() {
  const [isHappyAndInLove, toggleIsHappyAndInLove] = useToggle(false);
  return (
    <div className="min-h-screen gap-8 flex flex-col items-center justify-center">
      <h1 className="text-5xl">
        {isHappyAndInLove ? 'In love and is happy' : 'Broke up and sad'}
      </h1>
      <h1 className="text-5xl" onClick={() => toggleIsHappyAndInLove()}>
        {isHappyAndInLove ? '☺️' : '😭'}
      </h1>
      <h1 className="text-5xl" onClick={() => toggleIsHappyAndInLove()}>
        {isHappyAndInLove ? '❤️' : '💔'}
      </h1>
      <SimpleFormHook />
    </div>
  );
}

export default App;
