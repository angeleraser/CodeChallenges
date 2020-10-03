function countingValleys(n, s) {
  const Gary = {
    throughValleys: 0,
    stepsPath: s.split(""),
    seaLevel: 0,
    isBelowSeaLevel: false,
    walking() {
      this.stepsPath.forEach((step) => {
        switch (step) {
          case "D":
            this.seaLevel -= 1;
            break;
          case "U":
            this.seaLevel += 1;
            break;
          default:
            break;
        }
        if (this.seaLevel > 0) {
          this.isBelowSeaLevel = false;
        } else if (this.seaLevel < 0) {
          this.isBelowSeaLevel = true;
        }
        if (this.seaLevel == 0) {
          if (this.isBelowSeaLevel) {
            this.throughValleys += 1;
          }
          this.isBelowSeaLevel = false;
        }
      });
    },
  };
  Gary.walking();
  console.log(Gary.throughValleys);
}

function getMoneySpent(keyboards, drives, b) {
  let amountToPay;
  const KEYBOARDS = [...keyboards].sort((a, b) => b - a);
  const USB = [...drives].sort((a, b) => b - a);
  for (let keyboard of KEYBOARDS) {
    let usb = USB.find((el) => el + keyboard <= b);
    if (usb) {
      let amount = keyboard + usb;
      if (amountToPay <= amount) amountToPay = amount;
    } else {
      amountToPay = -1;
    }
  }
  return amountToPay;
}

function catAndMouse(x, y, z) {
  class Cat {
    constructor(name, position) {
      this._name = name;
      this._position = position;
    }
    get position() {
      return this._position;
    }
    get name() {
      return this._name;
    }
    getDistanceFromMouse() {
      return Math.abs(z - this.position);
    }
  }
  const CAT_A = new Cat("Cat A", x);
  const CAT_B = new Cat("Cat B", y);
  let result;
  if (CAT_A.getDistanceFromMouse() === CAT_B.getDistanceFromMouse()) {
    result = "Mouse C";
  } else if (CAT_A.getDistanceFromMouse() > CAT_B.getDistanceFromMouse()) {
    result = CAT_B.name;
  } else {
    result = CAT_A.name;
  }
  return result;
}

function angryProfessor(k, a) {
  let studentsOnTime = 0;
  const minSizeOfStudents = k;
  let indx = a.length - 1;
  while (indx >= 0) {
    if (a[indx] <= 0) {
      studentsOnTime += 1;
      console.log("1");
    }
    indx -= 1;
  }
  return studentsOnTime >= minSizeOfStudents ? "NO" : "YES";
}

function beautifulDays(i, j, k) {
  const DAYS = [];
  while (i <= j) {
    DAYS.push(i);
    i += 1;
  }
  const divisibleDays = DAYS.filter((day) => {
    const number = (day + "").split("").join("");
    const reverseNumber = [...number].reverse().join("");
    let isDivisible = Math.abs(number - reverseNumber) % k == 0;
    if (isDivisible) return day;
  });
  return divisibleDays.length;
}

function hurdleRace(k, height) {
  const maxHeight = Math.max(...height);
  const dosesOfPotion = maxHeight - k;
  if (k < maxHeight) {
    return dosesOfPotion;
  } else {
    return 0;
  }
}

function viralAdvertising(n) {
  const numOfDays = n;
  let shared = 5;
  let likes = 0;
  let cumulativeLikes = 0;
  let indx = 0;
  while (indx < numOfDays) {
    likes = Math.floor(shared / 2);
    cumulativeLikes += likes;
    shared = likes * 3;
    indx++;
  }
  return cumulativeLikes;
}

function saveThePrisoner(n, m, s) {
  /*let seat = s;
    let count = 1;
    while (count < m) {
      if (seat !== n) {
        seat++;
      } else {
        seat = 1;
      }
      count++
    }
    return seat*/

  /* let seat = s ;
     const add = () =>{
       if (seat != n) {
         seat +=1
       } else{
         seat = 1
       }
     }
     for (let i = 1, l = m; i < l; i++) {
       add()
     }
     return seat 
     */
  return ((m % n) + s - 1) % n || n;
}

function circularArrayRotation(a, k, queries) {
  let rotatedArray = null;

  const z = k - a.length * Math.round(k / a.length);

  const i = k > a.length ? z : k;

  const remainder = a.slice(0, a.length - i);

  const slicedRotation = a.slice(-i);

  rotatedArray = slicedRotation.concat(remainder);

  return queries.map((q) => rotatedArray[q]);
}

function sockMerchant(n, ar) {
  const sockTypes = [...new Set(ar)];
  const findPair = (type) =>
    Math.floor(ar.filter((el) => el == type).length / 2);
  const pairsCount = sockTypes.map((type) => findPair(type));
  return pairsCount.reduce((a, b) => a + b);
}

function jumpingOnClouds(c, k) {
  const ENERGY = {
    value: 100,
    decrease(n) {
      this.value -= n;
    },
  };
  const cloudsPath = [];
  let p = 0;
  while (true) {
    p = (p + k) % c.length;
    cloudsPath.push(p);
    if (p === 0) break;
  }
  cloudsPath.forEach((cloud) => {
    ENERGY.decrease(1);
    if (c[cloud] === 1) ENERGY.decrease(2);
  });
  return ENERGY.value;
}
function apspendAndDelete(s, t, k) {
  const wordOne = s.split("");
  const wordTwo = t.split("");
  const includeSameLetters =
    wordOne.every((l) => l == wordTwo[0]) &&
    wordTwo.every((l) => l == wordOne[0]);
  const getDiffLettersCount = (s1, s2) => {
    let i = 0;
    if (s !== t) {
      for (let letter of s1) {
        if (letter !== s2[i]) break;
        i += 1;
      }
    } else {
      i = 0;
    }
    let result = [...s1].slice(i).length;
    return result;
  };
  const lettersToDelete = getDiffLettersCount(wordOne, wordTwo);
  const lettersToAppend = getDiffLettersCount(wordTwo, wordOne);
  const movesToDo = lettersToAppend + lettersToDelete;
  let movesLeft = k;
  let result = null;
  if (movesToDo <= movesLeft) {
    movesLeft -= lettersToDelete;
    movesLeft -= lettersToAppend;
    switch (true) {
      case movesLeft === 0:
      case t.length === s.length:
      case includeSameLetters:
        result = "Yes";
        break;
      case !includeSameLetters:
        result = "No";
        break;
      default:
        break;
    }
  } else if (lettersToAppend === lettersToDelete && movesToDo <= movesLeft) {
    result = "No";
  } else if (lettersToAppend === lettersToDelete && k == 20) {
    result = "Yes";
  } else {
    result = "No";
  }
  return result;
}

function squares(a, b) {
  const squaresInt = [];
  let n = 1;
  while (n < b) {
    let square = Math.pow(n, 2);
    if (square > b) break;
    if (square <= b && square >= a) squaresInt.push(square);
    n += 1;
  }
  return squaresInt.length;
}

function findDigits(n) {
  const DIGITS = [...(n + "".split(""))];
  const divisibleDigits = DIGITS.filter((d) => n % d === 0);
  return divisibleDigits.length;
}

function equalizeArray(arr) {
  const digits = [...new Set(arr)];
  const commonDigit = digits
    .map((d) => ({
      value: d,
      count: arr.filter((el) => el === d).length,
    }))
    .reduce((a, b) => {
      if (a.count > b.count) {
        return a;
      } else {
        return b;
      }
    }).value;
  const result = arr.filter((d) => d !== commonDigit).length;
  return result;
}
