const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map((number) => number * number);
console.log(numbers, squaredNumbers);

const produse = [
  {
    nume: "lapte",
    pret: 10,
  },
  { nume: "cafea", pret: 50 },
  { nume: "paine", pret: 5 },
];

const container = document.querySelector(".container");

container.innerHTML = produse.map(
  (produs) => `
         <div class="card">
           <h1>${produs.nume}</h1>
          <p>${produs.pret}</p>
        </div>
         `
);
