export function generateMap(row, col) {
  let outerArr = [];
  for (let i = 0; i < row; i++) {
    let innerArr = [];
    for (let j = 0; j < col; j++) {
      innerArr.push("");
    }
    outerArr.push(innerArr);
  }

  return outerArr;
}

export function placeBugs(map, bugCount) {
  const rows = map.length;
  const cols = map[0].length;

  while (bugCount) {
    let bugRow = Math.floor(Math.random() * rows);
    let bugCol = Math.floor(Math.random() * cols);

    if (!map[bugRow][bugCol]) {
      map[bugRow][bugCol] = "bug";
      bugs--;
    }
  }

  return map;
}

export function populateMap(map, bugCount) {
  const rows = map.length;
  const col = map[0].length;

  while (bugCount) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (map[i][j] === "bug") {
          addOneToNeighbors(map, i, j);
          bugCount--;
        }
      }
    }
  }

  return map;
}

function addOneToNeighbors(map, i, j) {
  const rows = [i - 1, i + 1];
  const cols = [j - 1, j + 1];

  for (let row of rows) {
    for (let col of cols) {
      if (map[row][col] !== "bug") {
        map[row][col] = map[row][col] ? map[row][col]++ : 1;
      }
    }
  }

  return map;
}
