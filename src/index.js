function getSideValues(length, arr) {
  const numbers = arr;
  let init = 0,
    end = length;
  while (init < numbers.length) {
    const group = numbers.slice(init, end);
    init += length - 1;
    end += length - 1;
    if (subs < result) {
      result = subs;
    }
  }
  return result;
}

const getRandomIndexUpTo = (maxLength, discards) => {
  let index = null;
  do {
    index = Math.floor(Math.random() * maxLength);
  } while (RegExp(`${index}`, "g").test(discards));
  return index;
};

const shuffleArray = (arr) => {
  const shuffledArr = [];
  let discards = "";
  for (let index = 0; index < arr.length; index++) {
    let rIndex = getRandomIndexUpTo(arr.length, discards);
    shuffledArr.push(arr[rIndex]);
    discards += ` ${rIndex} `;
  }
  return shuffledArr;
};

const strangeCounter = (time) => {
  let counter = 3;
  while (time > counter) {
    time -= counter;
    counter *= 2;
  }
  return counter - time + 1;
};

Object.prototype[Symbol.iterator] = function* () {
  const keys = Object.keys(this);
  for (const key of keys) {
    yield this[key];
  }
};

const isLexicographicallySorted = (letters) => {
  const lettersCode = letters.split("").map((letter) => letter.codePointAt());
  return lettersCode.every(
    (code, i) => code <= lettersCode[i === lettersCode.length - 1 ? i : ++i]
  );
};

function biggerIsGreater(word) {
  if (isLexicographicallySorted(word)) {
    return shuffleArray(word.split("")).join("");
  } else {
    return "no answer";
  }
}
function factorial(n) {
  let total = 1;
  for (i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

const getDiff = (arr) => {
  let accum = 0;
  for (let index = 1; index < arr.length; index++) {
    accum += Math.abs(arr[index] - arr[index - 1]);
  }
  return accum;
};

const getSwapsCount = (arr, sortedArray) => {
  let swaps = 0;
  const arrayToSwap = [...arr];
  for (let index = 0; index < arr.length; index++) {
    const sortedVal = sortedArray[index];
    const swapIndex = arrayToSwap.indexOf(sortedVal);
    if (swapIndex !== index) {
      [arrayToSwap[index], arrayToSwap[swapIndex]] = [
        arrayToSwap[swapIndex],
        arrayToSwap[index],
      ];
      swaps += 1;
    }
  }
  return swaps;
};
function lilysHomework(arr = []) {
  const sortedArrayDes = [...arr].sort((a, b) => a - b);
  const sortedArrayAsc = [...arr].sort((a, b) => a - b).reverse();
  const ascendingSwaps = getSwapsCount(arr, sortedArrayAsc);
  const descendingSwaps = getSwapsCount(arr, sortedArrayDes);
  return Math.min(ascendingSwaps, descendingSwaps);
}

function fizzBuzz(n) {
  for (let count = 1; count <= n; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      console.log("FizzBuzz");
    }

    if (count % 3 === 0 && count % 5 !== 0) {
      console.log("Fizz");
    }

    if (count % 5 === 0 && count % 3 !== 0) {
      console.log("Buzz");
    }

    if (count % 3 !== 0 || count % 5 !== 0) {
      console.log(count);
    }
  }
}

async function getCountryName(code) {
  let countryData = null;

  let currentPage = 1;

  const totalPages = 25;

  while (!countryData || currentPage < totalPages) {
    const response = await axios.get(
      `https://jsonmock.hackerrank.com/api/countries?page=${currentPage}`
    );

    const {
      data: { data: countries },
    } = response;

    const selectedCountry = countries.find(
      (country) => country.alpha2Code === code
    );

    if (selectedCountry) {
      countryData = selectedCountry;
    }

    currentPage += 1;
  }

  return countryData.name;
}

class StaffList {
  constructor() {
    this._collection = [];
  }
  add(name, age) {
    const newMember = {
      name,
      age,
    };

    const thereIsNotMemberWithTheSameName = !this._collection.some(
      (member) => member.name === newMember.name
    );

    if (newMember.age > 20) {
      if (thereIsNotMemberWithTheSameName) {
        this._collection = [...this._collection, newMember];
      }
    } else {
      throw new Error("Staff member age must be greater than 20");
    }
  }
  remove(name) {
    const memberToRemove = this._collection.find(
      (member) => member.name === name
    );

    if (memberToRemove) {
      this._collection = this._collection.filter(
        (member) => member.name !== name
      );

      return true;
    }

    return false;
  }

  getSize() {
    return this._collection.length;
  }
}

const myStaffList = new StaffList();

myStaffList.add("John", 25);
myStaffList.add("Robin", 23);

const props = {
  name: "Angel",
  lastname: "Figuera",
  age: 22,
  classes: "user-info",
};

const createTemplate = (strings, ...propNames) => {
  return (props) => {
    const slices = Array.of(...strings);

    propNames.forEach((key, index) => {
      slices[index] += props[key];
    });

    return slices.join("");
  };
};

const userInfo = createTemplate`
<ul class="${"classes"}">
  <li>${"name"}</li>
  <li>${"lastname"}</li>
  <li>${"age"}</li>
</ul>
`(props);

// You can save data without worrying about it repeating

const userOne = {
  name: "John Doe",
  id: "12345",
};
const mySet = new Set();

mySet.add(userOne);
mySet.add(userOne); // does not add it within the set!
mySet.add({ ...userOne });

const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5];

const filteredNumbers = [...new Set(numbers)];

// console.log(Array.from(new Set(numbers))); // [1, 2, 3, 4, 5]

let myNumber = 1;

const addAfter = (number) => {
  return number++;
};

const addBefore = (number) => {
  return ++number;
};

console.log(addAfter(myNumber)); // prints 1 -> add's but returns the value before the addition
// then when you use it the value will be the updated value wich is 2

console.log(addBefore(myNumber)); // 2 -> add's and returns the updated value

const formValues = {
  name: "John",
  lastname: "Doe",
  email: "",
  phoneNumber: "",
  password: "00000000",
  repeatPassword: "",
};

const formEntries = Object.entries(formValues);

const handleInvalidInput = (inputName) => {
  console.log(`${inputName} is empty`);

  // you can add more logic here to handle the invalid input state
};

// Dispatchs this on the form submit
formEntries.forEach((entrie) => {
  const [inputName, inputValue] = entrie;

  const currentValue = inputValue.trim();

  if (currentValue.length === 0) {
    handleInvalidInput(inputName);
  }

  // ...more data handling
});

const myObj = {
  name: "John",
  lastname: "Doe",
  age: 22,
  email: "",
  address: "",
  postalCode: 8001,
};

const filteredObject = Object.entries(myObj).reduce(
  (map, current) => {
    const [propName, propValue] = current;
    // e.g -> "name", "John"

    if (!!propValue) {
      // you can add more validations...
      map[propName] = propValue;
    }

    return map;
  },
  {} //<-- initializer, tells the function to reduce everything to one object
);

console.log(filteredObject);

/* 
  Now we have the object with the only non-empty props values

  { name: "John", 
    lastname: "Doe", 
    age: 22, 
    postalCode: 8001 
  }

*/
