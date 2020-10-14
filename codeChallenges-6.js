function howManyGames(price, discount, minPrice, balance) {
  let purchasedGames = 0;
  let currentPrice = price;
  while (balance >= minPrice) {
    if (balance >= currentPrice) purchasedGames += 1; // Buy a game
    balance -= currentPrice;
    currentPrice -= discount; // decrease the game price
    if (currentPrice <= minPrice) currentPrice = minPrice;
  }
  return purchasedGames;
}

function timeInWords(h, m) {
  const HOURS = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
  ];
  const getMinutes = (mins) => {
    const MINUTES = [
      {
        number: 10,
        min: [
          "ten",
          "eleven",
          "twelve",
          "thirteen",
          "fourteen",
          "fifteen",
          "sixteen",
          "seventeen",
          "eighteen",
          "nineteen",
        ],
      },
      {
        number: 20,
        min: [
          "twenty",
          "twenty one",
          "twenty two",
          "twenty three",
          "twenty four",
          "twenty five",
          "twenty six",
          "twenty seven",
          "twenty eight",
          "twenty nine",
        ],
      },
      {
        number: 30,
        min: [
          "thirty",
          "thirty one",
          "thirty two",
          "thirty three",
          "thirty four",
          "thirty five",
          "thirty six",
          "thirty seven",
          "thirty eight",
          "thirty nine",
        ],
      },
      {
        number: 40,
        min: [
          "forty",
          "forty one",
          "forty two",
          "forty three",
          "forty four",
          "forty five",
          "forty six",
          "forty seven",
          "forty eight",
          "forty nine",
        ],
      },
      {
        number: 50,
        min: [
          "fifty",
          "fifty one",
          "fifty two",
          "fifty three",
          "fifty four",
          "fifty five",
          "fifty six",
          "fifty seven",
          "fifty eight",
          "fifty nine",
        ],
      },
    ];
    let numberStr = "";
    switch (true) {
      case mins === 0:
        numberStr = "o' clock";
        break;
      case mins === 15 || mins === 45:
        numberStr = "quarter";
        break;
      case mins === 30:
        numberStr = "half";
        break;
      case mins < 10:
        numberStr = HOURS[mins - 1];
        break;
      case mins >= 10 && mins < 20:
        numberStr = MINUTES[0].min[mins - 10];
        break;
      case mins >= 20 && mins < 30:
        numberStr = MINUTES[1].min[mins - 20];
        break;
      case mins >= 30 && mins < 40:
        numberStr = MINUTES[2].min[mins - 30];
        break;
      case mins >= 40 && mins < 50:
        numberStr = MINUTES[3].min[mins - 40];
        break;
      case mins >= 50 && mins < 60:
        numberStr = MINUTES[4].min[mins - 50];
        break;
      default:
        break;
    }
    return numberStr;
  };
  let time = "";
  if (m <= 30) {
    switch (true) {
      case m === 0:
        time = `${HOURS[h - 1]} ${getMinutes(m)}`;
        break;
      case m === 30 || m === 15:
        time = `${getMinutes(m)} past ${HOURS[h - 1]}`;
        break;
      default:
        time = `${getMinutes(m)} ${m !== 1 ? "minutes" : "minute"} past ${
          HOURS[h - 1]
        }`;
        break;
    }
  } else {
    const remainingTime = 60 - m;
    switch (true) {
      case remainingTime === 15:
        time = `${getMinutes(m)} to ${HOURS[h]}`;
        break;
      default:
        time = `${getMinutes(remainingTime)} ${
          m !== 1 ? "minutes" : "minute"
        } to ${HOURS[h]}`;
        break;
    }
  }
  return time;
}

function serviceLane(width, cases) {
  const largestVehiclesType = cases.map((c) => {
    // Filter the values between the case indexes inclusive
    const widthSegments = [
      ...new Set(width.filter((_, index) => index >= c[0] && index <= c[1])),
    ];
    return Math.min(...widthSegments);
  });
  return largestVehiclesType;
}
