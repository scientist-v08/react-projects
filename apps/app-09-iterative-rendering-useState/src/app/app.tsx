import { useState } from 'react';
import { pads } from './pads';
import { ColorType } from './colors.type';

export default function App() {
  const [allPads, setAllPads] = useState<ColorType[]>(pads);

  function selectClassName(param: boolean): string {
    return param ? 'on' : '';
  }

  function switchPadOpacity(i: number): void {
    setAllPads((prevAllPads) => {
      const newUpdatedPads = prevAllPads.map((pad) => ({ ...pad }));
      newUpdatedPads[i].on = !newUpdatedPads[i].on;
      return newUpdatedPads;
    });
  }

  return (
    <main>
      <div className="pad-container">
        {allPads.map((item, index) => (
          <button
            key={item.id}
            style={{ backgroundColor: item.color }}
            className={selectClassName(item.on)}
            onMouseDown={() => switchPadOpacity(index)}
          ></button>
        ))}
      </div>
    </main>
  );
}
