import { renderSquare } from "../utils/helpers";

interface BoardProps {
  knightPosition: number[];
  setKnightPosition: React.Dispatch<React.SetStateAction<number[]>>;
}
const Board: React.FC<BoardProps> = ({ knightPosition, setKnightPosition }) => {
  const squares: JSX.Element[] = [];

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, setKnightPosition));
  }

  return (
    <div
      style={{
        width: `100%`,
        height: `100%`,
        display: `flex`,
        flexWrap: `wrap`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      {squares}
    </div>
  );
};

export default Board;
