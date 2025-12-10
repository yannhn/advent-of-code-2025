const file = Bun.file("./input.txt");
const content = await file.text();

const lines = content
  .trim()
  .split(",")
  .map((e) => e.split("-"));

function transformToNumbers(inputArray: string[][]) {
  return inputArray.map((input) => {
    return input.map((number) => {
      return +number;
    });
  });
}

const transformedNumbers = transformToNumbers(lines);

function partOne(inputArray: number[][]): number[] {
  const tempArray: number[] = [];
  const testArray = [[11, 22]];
  inputArray.forEach((array) => {
    const start = array[0]!;
    const end = array.at(-1)!;

    for (let i = start; i <= end; i++) {
      tempArray.push(i);
    }
  });

  const invalidIds: number[] = [];

  tempArray.forEach((number) => {
    if (checkIfInvalid(number)) {
      invalidIds.push(number);
    }
  });

  return invalidIds;
}

function checkIfInvalid(n: number): boolean {
  const s = String(n);

  const halfLength = s.length / 2;

  const firstHalf = s.slice(0, halfLength);
  const secondHalf = s.slice(halfLength);

  if (firstHalf === secondHalf) {
    return true;
  } else {
    return false;
  }
}

const solvedPartOneArray = partOne(transformedNumbers);
const sum = solvedPartOneArray.reduce((acc, c) => acc + c, 0);
console.log(sum);
