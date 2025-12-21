const file = Bun.file("./input.txt");
const content = await file.text();

const grid: any = content.trim().split("\n");

const DIRECTIONS: [number, number][] = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

function isValid(grid: string[], y: number, x: number): boolean {
  if (!grid[y]) return false;

  return y >= 0 && y < grid.length && x >= 0 && x < grid[y].length;
}

function solveDay4(grid: any) {
  let resultSum: number = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] !== "@") continue;

      let next = 0;

      for (const [dy, dx] of DIRECTIONS) {
        const newY = y + dy;
        const newX = x + dx;

        if (isValid(grid, newY, newX)) {
          if (grid[newY][newX] === "@") {
            next++;
          }
        }
      }

      if (next < 4) {
        resultSum++;
      }
    }
  }

  return resultSum;
}

console.log("Lösung:", solveDay4(grid));
