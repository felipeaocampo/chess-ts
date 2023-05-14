export const observe = (receive: (knightPosition: number[]) => void) => {
  const randPos = () => Math.floor(Math.random() * 8);
  setInterval(() => receive([randPos(), randPos()]), 500);
};
