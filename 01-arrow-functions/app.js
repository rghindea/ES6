function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => {
  return a + b;
};

const addArrowimproved = (a, b) => a + b;

const square = (a) => a * a;

console.log(addArrow(2, 3));
console.log(addArrowimproved(2, 4));
console.log(square(3));

const btn = document.getElementById("btn");
btn.addEventListener = ("click ", (e) => (e.target.disabled = "true"));

// an arrow function that receives an array and calculates the min element

const minArr = (arr) => {
  let min = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
};

console.log(minArr([1, 4, -5, 6, 2]));
