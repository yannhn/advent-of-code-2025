// NOTE: 01 - Part 1

const file = Bun.file("./input.txt");
const content = await file.text();

const lines: string[] = content.trim().split("\n");

console.log(lines);

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

console.log("START:", 50);

console.log("pwCounter", calcPassword(50, lines));

// NOTE: 01 - Part 2

function calcDialPassword(startValue: number, input: string[]) {
  let zeroCounter = 0;
  const limit = 100;

  for (const item of input) {
    const cleanItem = item.trim();
    const direction = item[0];
    let value = Number(cleanItem.slice(1));

    for (let i = 0; i < value; i++) {
      if (direction === "R") {
        startValue = (startValue + 1) % limit;
      } else if (direction === "L") {
        startValue = (((startValue - 1) % limit) + limit) % limit;
      }

      if (startValue === 0) {
        zeroCounter++;
      }
    }
  }

  return zeroCounter;
}

console.log("START:", 50);

console.log("pwCounter", calcDialPassword(50, lines));
