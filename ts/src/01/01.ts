const file = Bun.file("./example.txt");
const content = await file.text();

const lines: string[] = content.trim().split("\n");

function calcPassword(startValue: number, input: string[]) {
  let zeroCounter = 0;
  const limit = 100;

  for (const item of input) {
    const cleanItem = item.trim();
    const direction = item[0];
    let value = Number(cleanItem.slice(1));

    if (direction === "R") {
      startValue = (startValue + value) % limit;
    } else if (direction === "L") {
      startValue = (((startValue - value) % limit) + limit) % limit;
    }

    if (startValue === 0) {
      zeroCounter++;
    }
  }

  return zeroCounter;
}

console.log(calcPassword(50, lines));
