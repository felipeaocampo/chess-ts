import { ReactNode } from "react";

interface SquareProps {
  black: boolean;
  children: ReactNode;
  // piece: JSX.Element;
}

const Square: React.FC<SquareProps> = ({ black, children }) => {
  const fill = black ? `black` : `white`;
  const pieceColor = black ? `white` : `black`;

  return (
    <div
      style={{
        backgroundColor: fill,
        width: `100%`,
        height: `100%`,
        color: pieceColor,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      {children}
    </div>
  );
};

export default Square;
