import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/helpers";
import { useEffect, useState } from "react";

const Knight = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <span
      style={{
        fontSize: `10rem`,
        opacity: isDragging ? 0.5 : 1,
        fontWeight: `bold`,
        cursor: "move",
      }}
      ref={drag}
    >
      ♞
    </span>
  );
};

export default Knight;
