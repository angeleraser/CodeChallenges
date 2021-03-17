function findElement(arr, func) {
  let num = arr.filter((num) => num % 2 === 0);
  return num;
}
// console.log(findElement([1, 3, 5, 8, 9, 10], function (num) {
//   return num % 2 === 0;
// }))

function titleCase(str) {
  const words = str
    .split(" ")
    .map((word) => {
      let wordLowerCase = word.toLowerCase();
      let firstUpperCaseLetter = wordLowerCase[0].toUpperCase();
      let restOfWord = wordLowerCase.split("").slice(1, word.length).join("");
      return firstUpperCaseLetter + restOfWord;
    })
    .join(" ");
  return words;
}

// console.log(titleCase("SOY EL MEJOR"));
function doubleChar(str) {
  const word = str.split(" ");
  const doubleCharWord = word.map((w) => {
    let wordStr = w.split("");
    let repeatedLetter = wordStr.map((l) => l + l).join("");
    return repeatedLetter;
  });
  return doubleCharWord.join("  ");
}
// console.log(doubleChar('Hello Word'))

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2;
  newArr.splice(n, 0, ...arr1);
  return newArr;
}
// console.log(frankenSplice([1, 2, 3, 4], [9, 0], 1));
function getIndexToIns(arr, num) {
  const sortedArray = Array.from(arr);
  sortedArray.push(num);
  sortedArray.sort((a, b) => a - b);
  return sortedArray.indexOf(num);
}
// console.log(getIndexToIns([2, 5, 10], 15))
function mutation(arr) {
  const word = arr[0].toLowerCase();
  const letters = arr[1].toLowerCase().split("");
  return letters.every((l) => word.includes(l));
}

mutation(["Hello", "hol"]); // false
// console.log(mutation(['Hello','eo']))
function chunkArrayInGroups(arr, size) {
  const myArr = [...arr];
  const newArr = [];
  let indx = 0;
  let len = arr.length / size;
  while (indx <= len) {
    let arrItem = myArr.slice(0, size);
    myArr.splice(0, size);
    if (arrItem.length) newArr.push(arrItem);
    indx += 1;
  }
  return newArr;
}

function oddishOrEvenish(num) {
  const number = (num + "")
    .split("")
    .map((n) => n * 1)
    .reduce((a, b) => a + b);
  return number % 2 == 0 ? "Evenish" : "Oddish";
}
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.getTitle = () => `Title:${this.title}`;
    this.getAuthor = () => `Author:${this.author}`;
  }
}

const PP = new Book("Pride and Prejudice", "Jane Austen");
const H = new Book("Hamlet", "William Shakespeare");
const WP = new Book("War and Peace", "Leo Tolstoy");

function sevenBoom(arr) {
  const verifySeven = (num) => num.toString().includes("7");
  return arr.some(verifySeven) ? "Boom!" : "there is not 7 in the array";
}

function migratoryBirds(arr) {
  class TypeOfBird {
    constructor(ID) {
      this._ID = ID;
      this._birds = [];
    }
    addbirds(bird) {
      this._birds.push(bird);
    }
    get frecuency() {
      return this._birds.length;
    }
    get ID() {
      return this._ID;
    }
  }
  const BIRDS_TYPE = [...new Set(arr)].sort((a, b) => a - b);
  const BIRDS = [];
  for (let bird of BIRDS_TYPE) {
    let typeOfBird = new TypeOfBird(bird);
    let birdCount = arr.filter((n) => n === bird);
    birdCount.forEach((b) => {
      typeOfBird.addbirds(b);
    });
    BIRDS.push(typeOfBird);
  }
  const highFrecuencyBird = BIRDS.reduce((birdA, birdB) => {
    if (birdA.frecuency > birdB.frecuency) {
      return birdA;
    } else {
      return birdB;
    }
  });
  const theOneBird = BIRDS.find(
    (bird) =>
      bird.frecuency == highFrecuencyBird.frecuency &&
      bird.ID <= highFrecuencyBird.ID
  );
  return theOneBird.ID;
}
// console.log(migratoryBirds([1, 2, 2, 3, 3, 3, 4, 5]));

function sumAll(arr) {
  const numbers = [];
  let indx = arr.sort((a, b) => a - b)[0];
  let extreme = arr.sort((a, b) => a - b)[1];
  while (indx < extreme - 1) {
    indx += 1;
    numbers.push(indx);
  }
  let result = arr.concat(numbers).reduce((a, b) => a + b);
  return result;
}

function diffArray(arr1, arr2) {
  const newArray = [];
  for (let item of arr1) {
    if (!arr2.some((el) => el === item)) {
      newArray.push(item);
    }
  }
  for (let item of arr2) {
    if (!arr1.some((el) => el == item)) {
      newArray.push(item);
    }
  }
  return newArray;
}

function destroyer(arr) {
  let [elements, ...items] = [...arguments];
  const newArray = elements.filter((el) => {
    if (items.some((it) => it == el)) {
      return;
    } else {
      return el;
    }
  });
  console.log(newArray);
  return newArray;
}

// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")

function pickingNumbers(a) {
  const myArr = a.sort((a, b) => a - b);
  const result = [];
  myArr.forEach((num, i, arr) => {
    let numbers = arr.filter((n) => n == num + 1 || n == num);
    if (numbers.length > 1) {
      result.push(numbers.length);
    }
  });
  return Math.max(...result);
}

// console.log(pickingNumbers(arrayOne));
function climbingLeaderboard(scores, alice) {
  const Scoreboard = {
    scores: [...new Set(scores)].sort((a, b) => a - b),
    getPosition: function (el) {
      let scoreToFind = this.scores.find((score) => score >= el);
      let pos = this.scores.indexOf(scoreToFind, this.currentPosition);
      if (!~pos) {
        let newScoreboard = [...this.scores];
        newScoreboard.push(el);
        pos = newScoreboard.indexOf(el);
        pos = pos - newScoreboard.length;
      } else {
        let areHere = this.scores.indexOf(el, this.currentPosition);
        if (~areHere) {
          pos = pos - this.scores.length;
        } else {
          pos = pos - (this.scores.length + 1);
        }
        this.currentPosition = this.scores.indexOf(
          scoreToFind,
          this.currentPosition
        );
      }
      return Math.abs(pos);
    },
    currentPosition: 0,
  };
  const AlicePositions = alice.map((s) => {
    return Scoreboard.getPosition(s);
  });
  return AlicePositions;
}
// console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));
function utopianTree(n) {
  const TREE = {
    height: 0,
    isSummer: true,
    springCycle() {
      this.height *= 2;
    },
    summerCycle() {
      this.height += 1;
    },
    grow() {
      if (!this.isSummer) {
        this.springCycle();
      } else {
        this.summerCycle();
      }
      this.isSummer = !this.isSummer;
    },
  };
  const CYCLES = n;
  let cyclesCount = 0;
  while (cyclesCount <= CYCLES) {
    TREE.grow();
    cyclesCount += 1;
  }
  console.log(TREE.height);
  return TREE.height;
}

function designerPdfViewer(h, word) {
  const LetterElement = {
    getSize() {
      return this.size;
    },
  };

  function createLetter(letter, size) {
    const newLetter = Object.create(LetterElement);
    newLetter.letter = letter;
    newLetter.size = size;
    return newLetter;
  }
  const lettersSizes = [...h];
  const abecedary = "abcdefghijkmlnopqrstuvwxyz".split("").map((l, i) => {
    const letter = createLetter(l, lettersSizes[i]);
    return letter;
  });
  const wordLetters = abecedary.filter((l) => word.includes(l.letter));
  const tallestLetter = wordLetters.reduce((l1, l2) => {
    if (l1.size > l2.size) {
      return l1;
    } else {
      return l2;
    }
  });
  const result = tallestLetter.size * word.length;
  console.log(result);
  return result;
}

function bonAppetit(bill, k, b) {
  const Person = {
    getAmountToPaid() {
      return this.items.reduce((a, b) => a + b);
    },
  };

  function createPerson(name, items) {
    const newPerson = Object.create(Person);
    newPerson.name = name;
    newPerson.items = items;
    return newPerson;
  }
  const Anna = createPerson("Anna", bill);
  const amountToPaid = (Anna.getAmountToPaid() - bill[k]) / 2;
  if (b == amountToPaid) {
    console.log("Bon Appetit");
  } else {
    console.log(b - amountToPaid);
  }
}
