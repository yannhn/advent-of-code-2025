// Forklifts streamlinen
/*

Die Gabelstapler können nur auf eine Papierrolle zugreifen, wenn sich in den acht angrenzenden Positionen weniger als vier Papierrollen befinden. Wenn du herausfindest, auf welche Papierrollen die Gabelstapler zugreifen können, verbringen sie weniger Zeit mit Suchen und mehr Zeit damit, die Wand zur Cafeteria einzureißen.

*/

// NOTE: hier also nicht Zeilen lesen, sondern das Umfeld
/*

@@@
@@@
@@@

*/

const file = Bun.file("./input.txt");
const content = await file.text();

const grid: any = content.trim().split("\n");

console.log(content);

// let resultCount = 0;

// for (let y = 0; y < grid.length - 1; y++) {
//   for (let x = 0; x < grid[y].length; x++) {
//     if (grid[y][x] !== "@") {
//       continue;
//     }

//     let innerCount = 0;

//     // CHECK RECHTS
//     if (x + 1 < grid[y].length) {
//       if (grid[y][x + 1] === "@") {
//         innerCount++;
//       }
//     }

//     console.log(innerCount);

//     if (innerCount >= 4) {
//       resultCount++;
//     }
//   }
// }

// X ist die Spalte
// Y ist die Zeile

// console.log(resultCount);

// const grid: any = [
//   "..........", // Zeile 0
//   "@@@.@.@.@@", // Zeile 1 (Dein Test)
//   "..........", // Zeile 2
// ];

let sum = 0;

for (let y = 0; y < grid.length; y++) {
  for (let x = 0; x < grid[y].length; x++) {
    if (grid[y][x] !== "@") {
      continue;
    }

    let next = 0;

    // prüfe ob am rand rechts
    // Die Prüfung: Ist Ziel (2) kleiner als Länge (3)? -> JA.
    if (x + 1 < grid[y].length) {
      if (grid[y][x + 1] === "@") {
        next++;
      }
    }

    // unten
    if (y + 1 < grid.length) {
      if (grid[y + 1][x] === "@") {
        next++;
      }
    }

    // rand links
    if (x - 1 >= 0) {
      if (grid[y][x - 1] === "@") {
        next++;
      }
    }

    // oben
    if (y - 1 >= 0) {
      if (grid[y - 1][x] === "@") {
        next++;
      }
    }

    // oben rechts
    if (y - 1 >= 0 && x + 1 < grid[y].length) {
      if (grid[y - 1][x + 1] === "@") {
        next++;
      }
    }

    // oben links
    if (y - 1 >= 0 && x - 1 >= 0) {
      if (grid[y - 1][x - 1] === "@") {
        next++;
      }
    }

    // unten links
    if (y + 1 < grid.length && x - 1 >= 0) {
      if (grid[y + 1][x - 1] === "@") {
        next++;
      }
    }

    // unten rechts
    if (y + 1 < grid.length && x + 1 < grid[y].length) {
      if (grid[y + 1][x + 1] === "@") {
        next++;
      }
    }

    if (next < 4) {
      sum++;
    }
  }
}

console.log("SUM:", sum);
