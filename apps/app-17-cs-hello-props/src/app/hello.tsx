import type { Hello } from './interfaces/hello.interface';

export function HelloComponent(props: Hello) {
  return (
    <h1>
      Hello {props.to} from {props.from}
    </h1>
  );
}
