import { useState } from 'react';

export function useToggle(initialValue = false): [boolean, () => void] {
  const [state, setState] = useState<boolean>(initialValue);

  function toggle(): void {
    setState(!state);
  }

  return [state, toggle];
}
