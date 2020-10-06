function cutTheSticks(arr) {
  const history = [[...arr]];
  let cuts = [];
  let cutCount = Math.max(...arr);
  while (cutCount > 0) {
    const cutLenght = Math.min(...history[history.length - 1]);
    const valuesToCut = history[history.length - 1].map(
      (value) => value - cutLenght
    );
    cuts.push(valuesToCut.length);
    const cutedValues = valuesToCut.filter((value) => value > 0);
    history.push(cutedValues);
    cutCount -= 1;
    if (!cutedValues.length) break;
  }
  return cuts;
}

function taumBday(b, w, bc, wc, z) {
  const needConvertGifts = bc > wc + z || wc > bc + z;
  const giftsCount = b + w;
  let minimunAmount;
  if (needConvertGifts) {
    const lowerCost = bc > wc ? wc : bc;
    let conversionCost;
    // add conversion cost
    switch (lowerCost) {
      case wc:
        conversionCost = b * z;
        break;
      case bc:
        conversionCost = w * z;
        break;
      default:
        break;
    }
    minimunAmount = giftsCount * lowerCost + conversionCost;
  } else {
    minimunAmount = b * bc + w * wc;
  }
  return minimunAmount;
}

function jumpingOnClouds(c) {
  const Emma = {
    jump() {
      this.jumpsCount += 1;
    },
    jumpsCount: 0,
  };
  const CLOUDS = [...c];
  const isThunderheads = (cloud) => cloud === 1;
  const thereIsCloud = (i) => CLOUDS[i] !== undefined;
  let indx = 0;
  while (indx < CLOUDS.length) {
    if (!thereIsCloud(indx + 1)) break;
    if (
      CLOUDS[indx] === CLOUDS[indx + 1] &&
      !isThunderheads(CLOUDS[indx + 2])
    ) {
      indx += 2;
    } else {
      if (isThunderheads(CLOUDS[indx + 1])) {
        indx += 2;
      } else {
        indx += 1;
      }
    }
    Emma.jump();
  }
  return Emma.jumpsCount;
}

function repeatedString(s, n) {
  const getLetterCount = (word, letter) => {
    return word.split("").filter((l) => l === letter).length;
  };
  const aCount = getLetterCount(s, "a");
  if (s.length === 1) {
    return aCount ? n : 0;
  } else {
    const completeWordsCount = Math.floor(n / s.length);
    const restCount = Math.round(
      (n / s.length - completeWordsCount) * s.length
    );
    const restLetters = getLetterCount(s.slice(0, restCount), "a");
    return completeWordsCount * aCount + restLetters;
  }
}

function beautifulTriplets(range, arr) {
  const triplets = arr
    .map((val) => [
      val,
      ...arr.filter((n) => n === val + range || n === val + range * 2),
    ])
    .filter(
      (array) =>
        array.length === 3 &&
        array.every((val, i) => val !== array[i === array.length ? --i : ++i])
    );
  return triplets.length;
}

function permutationEquation(numbers = []) {
  const PERMUTATIONS = [];
  for (let count = 1; count <= numbers.length; count++) {
    const p = {
      p: count,
      val: numbers[count - 1],
    };
    PERMUTATIONS.push(p);
  }
  const EQUATIONS = [];
  for (let x = 1; x <= PERMUTATIONS.length; x++) {
    const { p: pVal } = PERMUTATIONS.find((p) => p.val === x);
    const eq = {
      x,
      y: PERMUTATIONS.find((p) => pVal === p.val).p,
    };
    EQUATIONS.push(eq);
  }
  return EQUATIONS.map(({ y }) => y);
}

function organizingContainers(matrix = []) {
  const COLUMNS = [];
  const ROWS = [];
  for (let index = 0; index < matrix.length; index++) {
    COLUMNS.push(matrix[index].reduce((a, b) => a + b));
    ROWS.push(matrix.map((arr) => arr[index]).reduce((a, b) => a + b));
  }
  COLUMNS.sort((a, b) => a - b);
  ROWS.sort((a, b) => a - b);
  return COLUMNS.every((val, i) => val === ROWS[i]) ? "Possible" : "Impossible";
}

function cavityMap(grid) {
  const GRID = grid.map((row) =>
    row.split("").map((val, i) => ({
      position: i,
      val: Number(val),
    }))
  );
  const MATRIX = [];
  for (let rowIndex = 0; rowIndex < GRID.length; rowIndex++) {
    const ROW = GRID[rowIndex].map((cell) => {
      const [prevRow = [], nextRow = []] = [
        GRID[rowIndex - 1],
        GRID[rowIndex + 1],
      ];
      return {
        ...cell,
        borders: [
          GRID[rowIndex][cell.position - 1],
          GRID[rowIndex][cell.position + 1],
          prevRow[cell.position],
          nextRow[cell.position],
        ].map((cell) => (cell ? cell.val : null)),
      };
    });
    MATRIX.push(ROW);
  }
  const VALID_CELLS = MATRIX.reduce((a, b) => a.concat(b)).filter((cell) =>
    cell.borders.every((val) => val && val < cell.val)
  );
  return MATRIX.map((ROW) =>
    ROW.map((cell) => {
      if (VALID_CELLS.some((c) => c === cell)) {
        cell.val = "X";
      }
      return cell.val + "";
    }).reduce((a, b) => a + b)
  );
}

function minimumDistances(arr = []) {
  if ([...new Set(arr)].length === arr.length) {
    return -1;
  } else {
    const ITEMS = arr.map((element, index) => ({
      index,
      val: element,
    }));
    const FILTERED_ITEMS = ITEMS.filter((element) =>
      ITEMS.some(
        ({ val, index }) =>
          val === element.val &&
          (element.index > index || element.index < index)
      )
    );
    const DISTANCES = FILTERED_ITEMS.map((element) => {
      const closetsElement = FILTERED_ITEMS.find(
        ({ val, index }) =>
          val === element.val &&
          (index < element.index || index > element.index)
      );
      return Math.abs(element.index - closetsElement.index);
    });
    return Math.min(...DISTANCES);
  }
}

function flatlandSpaceStations(citiesCount, spacestations = []) {
  if (citiesCount === spacestations.length) {
    return 0; // Each city has Spacestation, there's not distance for each city
  } else {
    const sortedSpacestations = spacestations.sort((a, b) => a - b);
    const distancesToNearestSpacestation = [];
    const before = sortedSpacestations[0];
    const after =
      Math.abs(
        citiesCount - sortedSpacestations[sortedSpacestations.length - 1]
      ) - 1;
    for (let index = 0; index < sortedSpacestations.length - 1; index++) {
      const dist = Math.floor(
        Math.abs(sortedSpacestations[index + 1] - sortedSpacestations[index]) /
          2
      );
      distancesToNearestSpacestation.push(dist);
    }
    return Math.max(before, after, ...distancesToNearestSpacestation);
  }
};
