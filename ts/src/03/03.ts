const file = Bun.file("./input.txt");
const content = await file.text();

const lines = content.trim().split("\n");

function transformToNumber(input: string[]) {
  const mappedInput = input.map((string) => {
    return string.split("").map(Number);
  });
  return mappedInput;
}

const mappedNumbers = transformToNumber(lines);

function getBiggestNumber(array: number[]) {
  return Math.max(...array);
}

function sliceArray(array: number[], startingIndex?: number) {
  if (startingIndex !== undefined) {
    return array.slice(startingIndex + 1);
  } else {
    return array.slice(0, -1);
  }
}

function firstSolution(array: number[]) {
  const slicedArray = sliceArray(array);
  const firstNumber = getBiggestNumber(slicedArray);

  const startIndex = array.indexOf(firstNumber);

  const searchArea = sliceArray(array, startIndex);
  const secondNumber = getBiggestNumber(searchArea);

  return [firstNumber, secondNumber];
}

function getResults(array: number[][]) {
  return array.map((innerArray) => {
    const result = firstSolution(innerArray);
    return Number(result.join(""));
  });
}

function calcSum(array: number[]) {
  return array.reduce((acc, c) => acc + c, 0);
}

const tempResults = getResults(mappedNumbers);
const finalResults = calcSum(tempResults);
console.log(finalResults);
