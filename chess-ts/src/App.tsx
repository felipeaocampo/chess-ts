import { useState } from "react";
import Board from "./components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [knightPosition, setKnightPosition] = useState([1, 7]);
  console.log(knightPosition);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Board
          knightPosition={knightPosition}
          setKnightPosition={setKnightPosition}
        />
      </DndProvider>
    </>
  );
}

export default App;
