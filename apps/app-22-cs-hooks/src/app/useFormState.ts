import { useState } from 'react';

export default function useFormState(
  initialValue = ''
): [string, (e: any) => void, () => void] {
  const [state, setState] = useState<string>(initialValue);

  function handleChange(e: any): void {
    setState(e.target.value);
  }

  function reset(): void {
    setState('');
  }

  return [state, handleChange, reset];
}
