let input;
const numbers = [];
let total = 0;

do {
  input = prompt('введіть число');
  if (input === null && numbers.length === 0) {
    alert('масив пустий');
  } else {
    Number.isNaN(Number(input))
      ? alert('це не число')
      : numbers.push(Number(input));
  }
}

while (input !== null);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  alert(`сума чисел ${total}`);
}