const file = Bun.file("./example.txt");
const content = await file.text();

const splitted = content.split("\n").filter((n) => n !== "");

const ingredientID = splitted.filter((char) => char.includes("-"));
const checkID = splitted.filter((char) => !char.includes("-"));

type Range = {
  start: number;
  end: number;
};

function parseLines(input: string[]): Range[] {
  return input.map((line) => {
    const parts = line.split("-").map(Number);
    const [start, end] = parts;

    if (
      parts.length !== 2 ||
      start === undefined ||
      end === undefined ||
      isNaN(start) ||
      isNaN(end)
    ) {
      throw new Error(`Ungültiges Format in Zeile: "${line}"`);
    }
    return { start, end };
  });
}

function countFreshIngredients(input: string[], testNumbers: string[]): number {
  const ranges = parseLines(input);
  const numbersToTest = testNumbers.map(Number);

  let counter = 0;

  numbersToTest.forEach((number) => {
    for (const range of ranges) {
      if (number >= range["start"] && number <= range["end"]) {
        counter++;
        break;
      }
    }
  });

  return counter;
}

console.log("ingredientID", ingredientID);
console.log("checkID", checkID);
console.log("SOLUTION", countFreshIngredients(ingredientID, checkID));
