function addUpTo(str) {
  const lowerCase = RegExp("[a-z]", "g");
  const upperCase = RegExp("[A-Z]", "g");
  let isMixed = lowerCase.test(str) && upperCase.test(str);
  let islowerCase = lowerCase.test(str) ? "lowerCase" : "upperCase";
  return isMixed ? "mixed" : islowerCase;
}

const addOddToN = (n) => {
  let number = n;
  let oddNumbers = [n];
  while (number > 1) {
    number -= 1;
    if (number % 2 != 0) oddNumbers.push(number);
  }
  return oddNumbers.reduce((a, b) => a + b);
};

const add = (n) => {
  let max = n;
  let numbers = [n];
  while (max > 1) {
    max -= 1;
    numbers.push(max);
  }
  return numbers.reduce((a, b) => a + b);
};

const countSyllabes = (str) => {
  let syllabes = RegExp("[aeiou]", "gi");
  const count = str.mathc(syllabes);
  return count.length;
};

function operation(num1, num2) {
  let add = num1 + num2 == 24 ? "added" : null;
  let sub = num1 - num2 == 24 ? "subtracted" : null;
  let mult = num1 * num2 == 24 ? "multiplied" : null;
  let div = num1 / num2 == 24 ? "divided" : null;
  let operation = add || sub || mult || div;
  return operation;
}

function countClaps(str) {
  let c = RegExp("[C]", "g");
  let clapCount = str.match(c);
  return clapCount.length;
}

function programmers(...args) {
  let max = Math.max(...args);
  let min = Math.min(...args);
  console.log(max, min);
}

function pHName(pH) {
  let neutralOrAlkaline = pH >= 7 && pH < 8 ? "neutral" : "alkaline";
  let acidic = pH < 7 ? "acidic" : neutralOrAlkaline;
  return acidic;
}
const squareSum = (n) => {
  let number = n;
  let numbers = [n];
  while (number > 1) {
    number -= 1;
    numbers.push(number);
  }
  let squaredNumbers = numbers.map((a) => Math.pow(a, 2));
  return squaredNumbers.reduce((a, b) => a + b);
};

const wumboStr = "WUMBOM MOMBO";
let zeorArr = [1, 2, 3, 4, 5];

const wumbo = (words) => {
  let splitedWords = words.split(" ");
  let replaceLetter = (word, a, b) =>
    word
      .split("")
      .map((l) => l.replace(a, b))
      .join("");
  let replacedWordLetters = splitedWords.map((word) =>
    replaceLetter(word, "M", "W")
  );
  return replacedWordLetters.join(" ");
};
const addTheIndex = (arr) => {
  let idx = 0;
  let idxs = [];
  arr.forEach((n) => {
    idxs.push(idx);
    idx += 1;
  });
  let sum = idxs.map((idx) => idx + arr[idx]);
  return sum;
};

function skipTooMuchSugarDrinks(drinks) {
  let drinksWithoutSugar = [];
  for (let drink of drinks) {
    if (drink !== "fanta" && drink !== "cola") drinksWithoutSugar.push(drink);
  }
  return drinksWithoutSugar;
}

function breakingRecords(scores) {
  const timesRecordWasBroken = [];
  const timesRecordWasBad = [];
  let highRecord = scores[0];
  let lowRecord = scores[0];
  for (let score of scores) {
    if (score > highRecord) {
      highRecord = score;
      timesRecordWasBroken.push(highRecord);
    }
    if (score < lowRecord) {
      lowRecord = score;
      timesRecordWasBad.push(lowRecord);
    }
  }
  // console.log(`${timesRecordWasBroken.length} ${timesRecordWasBad.length}`)
  return {
    timesRecordWasBroken: timesRecordWasBroken.length,
    timesRecordWasBad: timesRecordWasBad.length,
  };
}
const records = "10 5 20 20 4 5 2 25 1".split(" ").map((n) => n * 1);
// console.log(breakingRecords(records));

function missingAngle(angle1, angle2) {
  let missing = 180 - (angle1 + angle2);
  const checkAngle = (angle) => {
    switch (true) {
      case angle == 90:
        return "right";
        break;
      case angle > 90 && angle < 180:
        return "obtuse";
        break;
      case angle < 90:
        return "acute";
        break;
    }
  };
  return checkAngle(missing);
}

function googlify(n = 2) {
  let o = "o";
  let google = n > 1 ? `G${o.repeat(n)}gle` : "invalid";
  return google;
}

function repeat(str, n = 1) {
  let arrStr = str.split("").map((l) => l.repeat(n));
  return arrStr.join("");
}

function diffMaxMin(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let difference = max - min;
  return difference;
}

function mdFormat(word, style) {
  let formatedWord = `${word}`;
  switch (style) {
    case "b":
      formatedWord = `**${word}**`;
      break;
    case "i":
      formatedWord = `_${word}_`;
      break;
    case "c":
      formatedWord = "`" + `${word}` + "`";
      break;
    case "s":
      formatedWord = `~~${word}~~`;
      break;
    default:
      break;
  }
  return formatedWord;
}

function isInOrder(str) {
  let order = Array.from(str).sort().join("");
  let regExp = new RegExp(`${order}*`, "gi");
  return regExp.test(str);
}

function Go(num) {
  let dashes = [];
  for (let idx = 0; idx < num; idx += 1) {
    dashes.push("-");
  }
  return dashes.join("");
}

function reverse(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

function sameCase(str) {
  let lowerCase = new RegExp(`${str.toLowerCase()}`, "g");
  let upperCase = new RegExp(`${str.toUpperCase()}`, "g");
  return upperCase.test(str) || lowerCase.test(str);
}

function replaceVowels(str, ch) {
  let regExp = new RegExp("[aeiou]", "g");
  return str.replace(regExp, ch);
}

function repeat(item, times) {
  let idx = 0;
  let arrItems = [];
  while (idx < times) {
    arrItems.push(item);
    idx += 1;
  }
  return arrItems;
}

function isRepdigit(num) {
  let numStrArr = num.toString().split("");
  const isEqual = (n, idx, arr) => {
    let n2 = arr[idx == arr.length - 1 ? --idx : ++idx];
    return n == n2 && n > 0;
  };
  return numStrArr.length > 1 ? numStrArr.every(isEqual) : num >= 0;
}

function validStrNumber(n) {
  return !isNaN(n);
}
// expresion regular para buscar numeros en un string
let x = /\d/;

function checkSquareAndCube(arr) {
  let [number1, number2] = arr;
  let squareRoot = Math.sqrt(number1);
  let cubeRoot = Math.cbrt(number2);
  return squareRoot == cubeRoot;
}

function getFactorial(n) {
  let numbers = [n];

  while (n > 0) {
    n -= 1;
    if (n > 0) numbers.unshift(n);
  }

  let factorial = numbers.reduce((n1, n2) => n1 * n2);

  if (factorial == 0) {
    return 1;
  } else {
    return factorial;
  }
}

function maxTotal(nums) {
  let orderedNumbersList = nums.sort((a, b) => a - b);
  console.log(orderedNumbersList);
  let greaterNumbers = orderedNumbersList.slice(5);
  console.log(greaterNumbers);
  let max = greaterNumbers.reduce((a, b) => a + b);
  return max;
}

function countTrue(arr) {
  let count = arr.filter((tr) => {
    if (tr) return tr;
  });
  return count.length;
}

function correctStream(user, correct) {
  let output = [];
  user.forEach((word, i) => {
    if (word == correct[i]) {
      output.push(1);
    } else {
      output.push(-1);
    }
  });
  return output;
}

function calcDeterminant(matrix) {
  let [a, b] = matrix[0];
  let [c, d] = matrix[1];
  let determinant = a * d - b * c;
  return determinant;
}

function arrayOfMultiples(num, length) {
  let array = [];
  let idx = 0;
  while (idx < length) {
    idx += 1;
    array.push(num * idx);
  }
  return array;
}
