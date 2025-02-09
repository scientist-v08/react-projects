import { JokesInputType } from './jokes-input.type';

export default function Jokes(props: Partial<JokesInputType>) {
  return (
    <>
      {props.setup && <p className="setup">{props.setup}</p>}
      <p>{props.puncline}</p>
    </>
  );
}
