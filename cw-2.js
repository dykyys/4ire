function fib(n) {
  let result = id;
  const bits = n.toString(2);
  for (const bit of bits) {
    result = mul(result, result);
    if (bit == "1") {
      result = mul(result, matrix);
    }
  }
  alert(`${n}-е число в последовательности Фибоначчи равно ${result[1][0]}`);
  return result[1][0];
}
const mul = ([[a1, a2], [a3, a4]], [[b1, b2], [b3, b4]]) => {
  if (userInput > 0) {
    return [
      [a1 * b1 + a2 * b3, a1 * b2 + a2 * b4],
      [a3 * b1 + a4 * b3, a3 * b2 + a4 * b4],
    ];
  } else {
    return [
      [a1 * b1 * -1 - a2 * b3, a1 * b2 * -1 - a2 * b4],
      [a3 * b1 * -1 - a4 * b3, a3 * b2 * -1 - a4 * b4],
    ];
  }
};

const matrix = [
  [0, 1],
  [1, 1],
];

const id = [
  [1, 0],
  [0, 1],
];

const message =
  "Введите порядковый номер n/-n числа Фибоначчи, которое надо найти";

function askUser() {
  userInput = prompt(message);
  if (userInput === null) {
    dontWant();
    if (tryAgain()) {
      askUser();
      return;
    }
    return;
  }
  const userInputToNumber = Number(userInput);
  if (!userInputToNumber) {
    alert("Вы ввели не число!");

    if (tryAgain()) {
      askUser();
      return;
    }
    return;
  }
  fib(userInputToNumber);
}

askUser();

function dontWant() {
  return alert("Операция отменена");
}
function tryAgain() {
  return confirm("Вы хотите повторить операцию?");
}
