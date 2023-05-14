import BoardSquare from "../components/BoardSquare";
import Knight from "../components/Knight";

export type prop = React.Dispatch<React.SetStateAction<number[]>>;

export const ItemTypes = {
  KNIGHT: `knight`,
};

// eslint-disable-next-line
export const canMoveKnight = (
  toX: number,
  toY: number,
  knightPosition: number[]
) => {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
};

// // eslint-disable-next-line
// export const renderSquare = (
//   i: number,
//   [knightX, knightY]: number[],
//   setKnightPosition: prop
// ) => {
//   const x = i % 8;
//   const y = Math.floor(i / 8);
//   // const black = (x + y) % 2 === 1;
//   // const isKnightHere = knightX === x && knightY === y;
//   // const piece = isKnightHere ? <Knight /> : null;

//   const renderPiece = (x: number, y: number, [knightX, knightY]: number[]) => {
//     console.log(`renderPiece rendered`);
//     if (x === knightX && y === knightY) {
//       return <Knight />;
//     }
//   };

//   return (
//     <div
//       key={i}
//       style={{
//         width: `12.5%`,
//         height: `12.5%`,
//       }}
//     >
//       <BoardSquare
//         x={x}
//         y={y}
//         setKnightPosition={setKnightPosition}
//         knightPosition={[knightX, knightY]}
//       >
//         {renderPiece(x, y, [knightX, knightY])}
//       </BoardSquare>
//     </div>
//   );
// };
