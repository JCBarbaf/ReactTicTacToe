function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="A" />
        <Square value="B" />
        <Square value="C" />
      </div>
      <div className="board-row">
        <Square value="D" />
        <Square value="E" />
        <Square value="F" />
      </div>
      <div className="board-row">
        <Square value="G" />
        <Square value="H" />
        <Square value="I" />
      </div>
    </>
  );
}
