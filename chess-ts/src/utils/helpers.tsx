import Knight from "../components/Knight";
import Square from "../components/Square";

type prop = React.Dispatch<React.SetStateAction<number[]>>;

const canMoveKnight = (toX: number, toY: number, knightPosition: number[]) => {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
};

export const renderSquare = (
  i: number,
  [knightX, knightY]: number[],
  setKnightPosition: prop
) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div
      key={i}
      style={{
        width: `12.5%`,
        height: `12.5%`,
      }}
      onClick={() => {
        if (canMoveKnight(x, y, [knightX, knightY])) {
          setKnightPosition([x, y]);
        }
      }}
    >
      <Square black={black}>{piece}</Square>
    </div>
  );
};
