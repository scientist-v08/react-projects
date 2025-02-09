export interface BuuttonTileInterface {
  inputNumber: number;
  index: number;
  disabled: boolean;
  indexToDisable: (index: number, state: boolean) => void;
}

export default function ButtonTile(props: BuuttonTileInterface) {
  return props.disabled ? (
    <button
      className="card"
      style={{ backgroundColor: '#d9f99d' }}
      onMouseDown={() => props.indexToDisable(props.index, !props.disabled)}
    >
      <h1>{props.inputNumber}</h1>
    </button>
  ) : (
    <button
      className="card"
      onMouseDown={() => props.indexToDisable(props.index, !props.disabled)}
    >
      <h1>{props.inputNumber}</h1>
    </button>
  );
}
