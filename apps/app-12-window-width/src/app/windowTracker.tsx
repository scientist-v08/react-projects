import { useEffect, useState } from 'react';

export default function WindowTracker() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function watchWindowWidth(): void {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', watchWindowWidth);

    return () => {
      window.removeEventListener('resize', watchWindowWidth);
    };
  }, []);

  return <h1>Window width: {width}</h1>;
}
