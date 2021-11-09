const currency = {
  usd: {
    rub: 71.85,
    chf: 0.91,
    eur: 0.86,
    pln: 3.98,
  },
  rub: {
    usd: 0.014,
    chf: 0.013,
    eur: 0.012,
    pln: 0.056,
  },
  chf: {
    usd: 1.09,
    rub: 78.28,
    eur: 0.94,
    pln: 4.35,
  },
  eur: {
    usd: 1.16,
    rub: 82.99,
    chf: 1.06,
    pln: 4.61,
  },
  pln: {
    usd: 0.25,
    rub: 18,
    chf: 0.23,
    eur: 0.22,
  },
};
alert("На нашем сайте вы можете конвертировать валюты USD, RUB, CHF, EUR, PLN");
let curToConvertInput = "";
let curWhichConvertInput = "";
let curToConvertInfo = {};
let curWhichConvertPrise = 0;

chechedTСonversion();

function chechedTСonversion() {
  let curToConvertInput = prompt(
    "Введите название валюты которую вы хотите конвертировать"
  );
  if (!curToConvertInput) {
     return dontWant()
  };

  const curToConvetModified = curToConvertInput.toLowerCase();
  if (currency[curToConvetModified]) {
    curToConvertInfo = currency[curToConvetModified];
    checheWhichСonversion(curToConvetModified);
  } else {
    notCorrect();
    if (tryAgain()) {
      return chechedTСonversion();
    }
  }
}

function checheWhichСonversion(curToConvert) {
  const curToConvertModified = curToConvert.toUpperCase();

  const message = `Введите название валюты в которую вы хотите конвертировать ${curToConvertModified}`;
  curWhichConvertInput = prompt(message);

  if (!curWhichConvertInput) {
   return dontWant()
  };
  const curWhichConvertModified = curWhichConvertInput.toLowerCase();

  if (curToConvertInfo[curWhichConvertModified]) {
    curWhichConvertPrise = curToConvertInfo[curWhichConvertModified];
    conversion(
      curToConvertModified,
      curWhichConvertModified,
      curWhichConvertPrise
    );
  } else {
    notCorrect();
    if (tryAgain()) {
      return chechedTСonversion();
    }
  }
}

function conversion(curToConvert, curWhichConvert, price) {
  const curWhichConvertModified = curWhichConvert.toUpperCase();

  const messagePrompt = `Введите сумму ${curToConvert} которую вы хотите конвертировать в ${curWhichConvertModified}`;

  const moneyInput = prompt(messagePrompt);
  if (moneyInput === null) {
    return dontWant()
  }
  const moneyToNumber = Number(moneyInput);
const resultMiney = (moneyToNumber * price).toFixed(2)
  if (!moneyToNumber) {
    notCorrect();
    if (tryAgain()) {
      return chechedTСonversion();
    }
  }
  const messageAlert = `${moneyToNumber}${curWhichConvertModified} равно ${
    resultMiney
  }${curToConvert} по курсу ${price}`;
  alert(messageAlert);
  if (tryAgain()) {
    return chechedTСonversion();
  }
}
function tryAgain() {
  return confirm("Вы хотите повторить операцию?");
}

function notCorrect() {
  return alert("Вы ввели не коректные данные");
}
function dontWant (arguments) {
 return alert('Операция отменена')
}

// const EUR_RATE = 30.51;
// const USD_RATE = 26.35;
// const UAH_RATE = 1;
// const GBP_RATE = 35.87;
// const RUR_RATE = 0.37;
// let weAreWorking = true;

// do {
//   const currencyToChange = prompt('Яку валюту Ви хочете обміняти? Ви можете скористатися сервісом для обміну: EUR, USD, UAH, GBP, RUR').toUpperCase();
//   let rateToChange;
//   let amountToChange;
//   let currencyToReceive;
//   let rateToReceive;
//   let resultOfChanging;

//   switch (currencyToChange) {
//     case 'EUR':
//       rateToChange = EUR_RATE;
//       break;
//     case 'USD':
//       rateToChange = USD_RATE;
//       break;
//     case 'UAH':
//       rateToChange = UAH_RATE;
//       break;
//     case 'GBP':
//       rateToChange = GBP_RATE;
//       break;
//     case 'RUR':
//       rateToChange = RUR_RATE;
//       break;
//     default:
//       alert('Ви не правильно ввели валюту для обміну, введіть будь-ласка EUR, USD, UAH, GBP або RUR');
//       continue;
//   }

//   do {
//     amountToChange = +prompt(`Скільки ${currencyToChange} Ви хочете обміняти?`);
//     if (isNaN(amountToChange)) {
//       alert('Введіть числове значення!');
//     }
//   } while (isNaN(amountToChange));

//   do {
//     currencyToReceive = prompt(`На яку валюту Ви хочете поміняти ${amountToChange} ${currencyToChange}? Введіть будь-ласка EUR, USD, UAH, GBP або RUR`).toUpperCase();

//     switch (currencyToReceive) {
//       case 'EUR':
//         rateToReceive = EUR_RATE;
//         break;
//       case 'USD':
//         rateToReceive = USD_RATE;
//         break;
//       case 'UAH':
//         rateToReceive = UAH_RATE;
//         break;
//       case 'GBP':
//         rateToReceive = GBP_RATE;
//         break;
//       case 'RUR':
//         rateToReceive = RUR_RATE;
//         break;
//       default:
//         alert('Ви не правильно ввели валюту, введіть будь-ласка EUR, USD, UAH, GBP або RUR');
//         continue;
//     }
//   } while (!rateToReceive);

//   resultOfChanging = rateToChange*UAH_RATE/rateToReceive*amountToChange;
//   alert(`Ви отримаєте ${resultOfChanging.toFixed(2)} ${currencyToReceive}`);
//   weAreWorking = confirm('Проведемо операцію ще раз?');
// } while (weAreWorking);
