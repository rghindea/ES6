const numbers = [1, 2, 4, 5];

for (let i = 0; (i = numbers.length - 1); i++) {
  console.log(numbers[i]);
}

numbers.forEach((number) => console.log(number));
