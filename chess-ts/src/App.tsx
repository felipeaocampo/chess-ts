import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [knightPosition, setKnightPosition] = useState([1, 7]);

  return (
    <>
      <Board
        knightPosition={knightPosition}
        setKnightPosition={setKnightPosition}
      />
    </>
  );
}

export default App;
