const array = ["hello", "world", 23, "23", null, undefined];

function filterBy(array, type) {
  const allTypes = [
    "string",
    "boolean",
    "number",
    undefined,
    "object",
    "bigint",
    null,
  ];

  if (!allTypes.includes(type)) {
    return `${type} такого типа данных не существует!`;
  }
  if (!Array.isArray(array)) {
    return `${array} не массив, мы не можем работать дальше!`;
  }
  if (type === null || type === undefined) {
    return array.filter((element) => element !== type);
  }
  return array.filter((element) => typeof element !== type);
}
console.log(array);
console.log("filterBy string", filterBy(array, "string"));
console.log(filterBy(array, "str"));
console.log("filterBy null", filterBy(array, null));
console.log(filterBy("str", "string"));
console.log("filterBy undefined", filterBy(array, undefined));
