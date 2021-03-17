function reverseString(s) {
  let arrReverse;
  if (typeof s === "string") {
    arrReverse = s.split("").reverse().join("");
  }
  let errorMessage = `s.split is not a function
  ${s}`;
  console.log(arrReverse ? arrReverse : errorMessage);
}

function isPositive(a) {
  let msg = null;
  switch (true) {
    case a > 0:
      msg = "YES";
      break;
    case a == 0:
      msg = "Zero Error";
      break;
    case a < 0:
      msg = "Negative Error";
      break;
  }
  return msg;
}

let arrSquare = [
  [6, 6, 7, -10, 9, -3, 8, 9, -1],
  [9, 7, -10, 6, 4, 1, 6, 1, 1],
  [-1, -2, 4, -6, 1, -4, -6, 3, 9],
  [-8, 7, 6, -1, -6, -6, 6, -7, 2],
  [-10, -4, 9, 1, -7, 8, -5, 3, -5],
  [-8, -3, -4, 2, -3, 7, -5, 1, -5],
  [-2, -7, -4, 8, 3, -1, 8, 2, 3],
  [-3, 4, 6, -7, -7, -8, -3, 9, -6],
  [-2, 0, 5, 4, 4, 4, -3, 3, 0],
];

function getDiagonalSum(arr) {
  let squareLength = arr[0].length - 1;
  let idx1 = 0;
  let idx2 = squareLength;
  let rightDiagonalSum = null;
  let leftDiagonalSum = null;
  while (idx1 <= squareLength) {
    rightDiagonalSum += arr[idx1][idx1];
    leftDiagonalSum += arr[idx1][idx2];
    idx1 += 1;
    idx2 -= 1;
  }
  let sum = rightDiagonalSum - leftDiagonalSum;
  return sum < 0 ? sum * -1 : sum;
}
// console.log(getDiagonalSum(arrSquare))

function vowelsAndConsonants(s) {
  let vowels = new RegExp("[aeiou]", "g");
  let nonVowelsRegEx = new RegExp("[^aeiou]", "g");
  let onlyVowels = s.match(vowels);
  let nonVowels = s.match(nonVowelsRegEx);
  for (let vowel of onlyVowels) {
    console.log(vowel);
  }
  for (let nonVowel of nonVowels) {
    console.log(nonVowel);
  }
}

const wordVerify = (word) => {
  // format word toLowerCase for flexibility in comparison
  let formatedWord = word.toLowerCase();
  // Regular expresions to match first and last letter
  const regExpFirstLetter = /\b\w/;
  const regExpLastLetter = /\w\b/;
  // Destructuring RegExp Obj first key
  const { 0: word__FirstLetter } = formatedWord.match(regExpFirstLetter);
  const { 0: word__LastLetter } = formatedWord.match(regExpLastLetter);

  return word__FirstLetter === word__LastLetter;
};

function plusMinus(arr) {
  let positive = 0,
    negative = 0,
    zero = 0;
  for (let num of arr) {
    switch (true) {
      case num > 0:
        positive += 1;
        break;
      case num == 0:
        zero += 1;
        break;
      case num < 0:
        negative += 1;
      default:
        break;
    }
  }
  const result = [positive, negative, zero].map((num) =>
    (num / arr.length).toPrecision(6)
  );
  result.forEach((num) => {
    console.log(num);
  });
  return result;
}

function staircase(n) {
  let hashStr = " ,#".split(",");
  let idx = 0;
  let hashArr = [];
  while (n > 0) {
    let str = `${hashStr[0].repeat(idx)}${hashStr[1].repeat(n)}`;
    hashArr.unshift(str);
    idx += 1;
    n -= 1;
  }
  hashArr.forEach((str) => console.log(str));
}

function miniMaxSum(arr) {
  let arrSum = arr.reduce((a, b) => a + b);
  let result = [];
  for (let num of arr) {
    let number = arrSum - num;
    result.push(number);
  }
  let max = Math.max(...result);
  let min = Math.min(...result);
}
const compareTriplets = (a, b) => {
  const person = {
    points: 0,
    triplets: [],
    incrementPoints() {
      this.points += 1;
    },
  };
  const Alice = Object.assign({}, person);
  const Bob = Object.assign({}, person);
  Alice.triplets = a;
  Bob.triplets = b;
  for (let pt of Alice.triplets) {
    if (pt > Bob.triplets[Alice.triplets.indexOf(pt)]) {
      Alice.incrementPoints();
    } else if (pt < Bob.triplets[Alice.triplets.indexOf(pt)]) {
      Bob.incrementPoints();
    }
  }
  return [Alice.points, Bob.points];
};

function birthdayCakeCandles(ar) {
  const max = Math.max(...ar);
  const tallestCandles = ar.filter((h) => h == max).length;
  return tallestCandles;
}

function timeConversion(s) {
  const timeRegex = /(am|pm)/gi;
  let splitedTime = s.split(":");
  let hours = splitedTime[0] * 1;
  const AM_PM = s.match(timeRegex).toString();
  switch (AM_PM) {
    case "PM":
      hours += 12;
      if (hours == 24) {
        hours = "12";
      }
      break;
    case "AM":
      hours = `0${hours}`;
      if (hours == 12) {
        hours = `00`;
      }
      break;
    default:
      break;
  }
  splitedTime[0] = hours;
  let newTime = splitedTime.join(":").replace(timeRegex, "");
  return newTime;
}

function kangaroo(x1, v1, x2, v2) {
  let result;
  class Kangaroo {
    constructor(distance, jumpDistance) {
      this.x = distance;
      this.jumpDistance = jumpDistance;
      this.jumps = 0;
    }
    jump() {
      this.x += this.jumpDistance;
      this.jumps += 1;
    }
  }
  const KANGAROO_1 = new Kangaroo(x1, v1);
  const KANGAROO_2 = new Kangaroo(x2, v2);
  let times = 10000;
  while (times > 1) {
    KANGAROO_1.jump();
    KANGAROO_2.jump();
    times -= 1;
    if (KANGAROO_2.x == KANGAROO_1.x) break;
  }
  if (KANGAROO_2.x == KANGAROO_1.x) {
    result = "YES";
  } else {
    result = "NO";
  }
  return result;
}

function gradingStudents(grades) {
  let result = grades.map((g) => {
    if (g >= 38 && g != 100) {
      let number1 = (g + "")[0] * 1;
      let number2 = (g + "")[1];
      if (number2 > 2 && number2 <= 4) {
        number2 = 5;
      } else if (number2 > 7 && number2 <= 9) {
        number2 = 0;
        number1 += 1;
      }
      return `${number1}${number2}` * 1;
    } else {
      return g;
    }
  });
  result.forEach((r) => console.log(r));
  return result;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesRange = apples.map((ap) => a + ap);
  const orangeRange = oranges.map((or) => b + or);
  const applesInRange = applesRange.filter((pos) => pos >= s && pos <= t)
    .length;
  const orangesInRange = orangeRange.filter((pos) => pos >= s && pos <= t)
    .length;
  console.log(applesInRange);
  console.log(orangesInRange);
}

function getTotalX(a, b) {
  const factorsOfA = [];
  let idx = 0;
  while (idx <= Math.min(...b)) {
    if (b.every((num) => num % idx == 0) && idx >= Math.max(...a))
      factorsOfA.push(idx);
    idx += 1;
  }
  const factors = [];
  factorsOfA.forEach((fact) => {
    if (a.every((num) => fact % num == 0)) {
      factors.push(fact);
    }
  });
  // console.log(factors);
  return factors.length;
}
getTotalX([3, 4], [24, 48]);

function factorChain(arr) {
  const isFactor = (n, i, arr) => {
    return arr[i != arr.length - 1 ? ++i : i] % n == 0;
  };
  return arr.every(isFactor);
}
factorChain([2, 4, 8, 16, 32, 64]); // true
function charCount(myChar, str) {
  const regExp = new RegExp(myChar, "g");
  let count = str.match(regExp);
  console.log(count);
  return count ? count.length : 0;
}

function concat(...args) {
  const argsStr = args.map((nums) => nums.join(""));
  return Array.from(argsStr.reduce((a, b) => a + b));
}
concat([1, 2, 3], [4, 5, 6]);

function birthday(s, d, m) {
  const chocolateBar = s;
  const ways = [];
  let idx = 0;
  for (let square of chocolateBar) {
    let contiguouSquareSum = [];
    let contiguouSquareIndex = 0;
    while (contiguouSquareIndex < m) {
      contiguouSquareSum.push(chocolateBar[idx + contiguouSquareIndex]);
      contiguouSquareIndex += 1;
    }
    ways.push(contiguouSquareSum);
    idx += 1;
    // if (squareIdx == chocolateBar.length - 1) break;
  }
  const numbersOfWays = ways.filter(
    (square) => square.reduce((a, b) => a + b) == d
  ).length;
  return numbersOfWays;
}

function divisibleSumPairs(n, k, ar) {
  const pairs = [];
  let arrCopy = [...ar];
  ar.forEach((num, idx, arr) => {
    let pair = arrCopy.filter((n, i) => (num + n) % k == 0 && idx < i);
    pair.forEach((number) => {
      pairs.push([num, number]);
    });
    delete arrCopy[idx];
  });
  console.log(pairs);
  return pairs.length;
}
// let array = '99 40 53 31 92 68 17 70 100 16 26 82 72 89 19 14 56 7 26 69 8 44 51 88 24 34 40 70 90 68 95 95 28 39 71 75 31 17 96 60 98 98 33 35 68 84 17 11 76 17 45 61 72 76 18 67 55 81 57 43 45 96 58 49 4 61 38 66 82 16 44 100 50 19 82 15 72 5 81 97 94 70 7 92 75 55 1 87 4 9 92 35 83 20 53 8 90 2 92 82'
// let newArray = array.split(' ').map(n => n * 1);
// divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
// divisibleSumPairs(100, 32, newArray);

function findLongestWordLength(str) {
  const words = str.split(" ").map((w) => w.length);
  let longestWord = 0;
  words.forEach((length) => {
    if (longestWord <= length) longestWord = length;
  });
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function truncateString(str, num) {
  let word = str.split("").slice(0, num).join("");
  return `${word}...`;
}
