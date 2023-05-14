// import { renderSquare } from "../utils/helpers";
import BoardSquare from "./BoardSquare";
import Knight from "./Knight";
import { prop } from "../utils/helpers";

interface BoardProps {
  knightPosition: number[];
  setKnightPosition: React.Dispatch<React.SetStateAction<number[]>>;
}
const Board: React.FC<BoardProps> = ({ knightPosition, setKnightPosition }) => {
  const squares: JSX.Element[] = [];

  const renderPiece = (x: number, y: number, [knightX, knightY]: number[]) => {
    console.log(`renderPiece rendered`);
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  };

  const renderSquare = (
    i: number,
    [knightX, knightY]: number[],
    setKnightPosition: prop
  ) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    // const black = (x + y) % 2 === 1;
    // const isKnightHere = knightX === x && knightY === y;
    // const piece = isKnightHere ? <Knight /> : null;

    return (
      <div
        key={i}
        style={{
          width: `12.5%`,
          height: `12.5%`,
        }}
      >
        <BoardSquare
          x={x}
          y={y}
          setKnightPosition={setKnightPosition}
          knightPosition={[knightX, knightY]}
        >
          {renderPiece(x, y, [knightX, knightY])}
        </BoardSquare>
      </div>
    );
  };

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
