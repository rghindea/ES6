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

//////////////////////////////////////////////////////////////////////////////////////////////

//functie cu un singur parametru

function Add100(a) {
  return a + 100;
}

(a) => {
  return a + 100;
};

(a) => a + 100;

//atribui functia pe care ai creat-o intr-o variabila si vei putea cu aceasta variabila sa apelezi functia respectiva.
let add100Arrow = (a) => a + 100;

console.log(add100Arrow(50));
// functie cu 2 parametrii

function Sum(a, b) {
  return a + b;
}

(a, b) => {
  return a + b;
};

(a, b) => a + b;

/////functie fara parametrii

let a = 100;
let b = 50;
function logSum() {
  console.log(a + b);
}

() => console.log(a + b);

////////////////////

function SumAndTax(a, b) {
  let tax = 20;
  return a + b + tax;
}

(a, b) => {
  let tax = 20;
  return a + b + tax;
};
