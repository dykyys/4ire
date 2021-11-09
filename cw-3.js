const array = ["hello", "world", 23, "23", null];

function filterBy(array, type) {
  const allTypes = [
    "string",
    "boolean",
    "number",
    "undefined",
    "object",
    "null",
    "bigint",
  ];
  if (!allTypes.includes(type)) {
    return `${type} такого типа данных не существует!`;
  }
  if (!Array.isArray(array)) {
    return `${array} не массив, мы не можем работать дальше!`;
  }
  return array.filter((element) => typeof element !== type);
}

console.log(filterBy(array, "string"));
console.log(filterBy(array, "str"));
console.log(filterBy("str", "string"));
