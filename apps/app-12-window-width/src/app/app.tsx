import { useState } from 'react';
import WindowTracker from './windowTracker';

export default function App() {
  const [show, setShow] = useState<boolean>(true);

  return (
    <main className="container">
      <button onMouseDown={() => setShow((prevShow) => !prevShow)}>
        Toggle WindowTracker
      </button>
      {show ? <WindowTracker /> : null}
    </main>
  );
}
