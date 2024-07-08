const nume = "Maria";
const varsta = 25;

const mesaj = "Numele meu este " + nume + " si am " + varsta + " ani";
console.log(mesaj);

const mesaj2 = `Numele meu este ${nume} si am ${varsta} ani`;

const poezie =
  "Lacul codrilor albastru \n" +
  "Nuferi galbeni il incarca \n" +
  "Tresarind din cercuri albe \n" +
  "El cutremura o barca \n";

console.log(poezie);

const poezie2 = `Lacul codrilor albastru
Nuferi galbeni il incarca 
Tresarind din cercuri albe 
El cutremura o barca`;

console.log(poezie2);

const produse = [
  {
    nume: "lapte",
    pret: 10,
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqRpTpqvHaOxUwAS93Ci8qY7WJ4Mxj-B-Xf27iXnSPfXxCwYjXefJuraG3Zo46D5f2JUG2JQ48DPI2_0FJEoUkncuYJrnxAo5uSs2OvWYOriotzJ-7uK87WxbFuhqXy3P-gzfMtpw&usqp=CAc",
  },
  {
    nume: "cafea",
    pret: 50,
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR9vOkCZ-_Ps6ufPd7_w3E1TEPGoQUo6IsXJg-qMg7ddKUFfiKBFdWt205qa6dAv7qO9B7n5-6hh-BmXZYkLI5_dVm_0n8IzwTc0i9c77KX1jmU8nY30Nf8s4TVM_deKs6BaIK9shhvEQ&usqp=CAc",
  },
  {
    nume: "paine",
    pret: 5,
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRSkqMnAAvS9jEpqI4OQvYwobmXK_ZIoFk2whZbEC6jIhWFA0FnIZqHyYkqZN-fuO8O_4lVO5YDntaqlDOAKpWentKDdFug0Qlp98Jbi65m3zUojmQBdl6aum1bQZOC4l3XGcS0Iw&usqp=CAc",
  },
];

const container = document.querySelector(".container");
// container.innerHTML =
//   "<div " +
//   "class = 'card'" +
//   ">" +
//   "<h1>" +
//   produse[0].nume +
//   "</h1>" +
//   "<h2>" +
//   produse[0].pret +
//   "</h2>" +
//   "</div>";

container.innerHTML += `
<div class="card">
   <h1>${produse[0].nume}</h1>
   <img src=${produse[0].imageUrl} />
   <p>${produse[0].pret}</p>
</div>
`;

container.innerHTML += `
  <div class ="card">
      <h1>${produse[1].nume}</h1>
      <img src=${produse[1].imageUrl} />
      <p>${produse[1].pret}</p>
      
  </div>
    `;

container.innerHTML += `
     <div class="card">
     <h1>${produse[2].nume}</h1>
     <img src=${produse[2].imageUrl} />
     <p>${produse[2].pret}</p>
</div>    
    `;
