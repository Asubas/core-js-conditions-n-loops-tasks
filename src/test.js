function canQueenCaptureKing(queen, king) {
  console.log(queen.x, queen.y, king.x, king.y);
  for (let i = 1; i <= 8; i += 1) {
    if (
      queen.x === king.x ||
      queen.y === king.y ||
      (queen.x + i === king.x && queen.y + i === king.y) ||
      (queen.x - i === king.x && queen.y - i === king.y) ||
      (queen.x - i === king.x && queen.y + i === king.y) ||
      (queen.x + i === king.x && queen.y - i === king.y)
    ) {
      console.log(queen.x, queen.y, king.x, king.y);
      return true;
    }
  }
  return false;
}

console.log(canQueenCaptureKing({ x: 6, y: 4 }, { x: 3, y: 7 }));
