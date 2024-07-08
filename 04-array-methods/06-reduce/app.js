const numbers = [1, 3, 4, 6];
const sum = numbers.reduce((sum, number) => sum + number, 0);

let suma = 0;
for (let i = 0; i <= numbers.length - 1; i++) {
  suma = suma + numbers[i];
}

const produse = [
  {
    nume: "lapte",
    pret: 10,
    categorie: "Lactate",
  },
  {
    nume: "cafea",
    pret: 50,
    categorie: "Băuturi",
  },
  {
    nume: "paine",
    pret: 5,
    categorie: "Panificație",
  },
  {
    nume: "oua",
    pret: 12,
    categorie: "Ouă și produse din ouă",
  },
  {
    nume: "unt",
    pret: 25,
    categorie: "Lactate",
  },
  {
    nume: "sare",
    pret: 3,
    categorie: "Condimente",
  },
  {
    nume: "piper",
    pret: 6,
    categorie: "Condimente",
  },
  {
    nume: "morcovi",
    pret: 4,
    categorie: "Legume",
  },
  {
    nume: "cartofi",
    pret: 3,
    categorie: "Legume",
  },
  {
    nume: "mere",
    pret: 7,
    categorie: "Fructe",
  },
  {
    nume: "banane",
    pret: 8,
    categorie: "Fructe",
  },
  {
    nume: "rosii",
    pret: 6,
    categorie: "Legume",
  },
  {
    nume: "castraveti",
    pret: 5,
    categorie: "Legume",
  },
  {
    nume: "ulei",
    pret: 15,
    categorie: "Uleiuri și grăsimi",
  },
  {
    nume: "zahar",
    pret: 5,
    categorie: "Dulciuri și îndulcitori",
  },
  {
    nume: "faina",
    pret: 4,
    categorie: "Panificație",
  },
  {
    nume: "miere",
    pret: 30,
    categorie: "Dulciuri și îndulcitori",
  },
  {
    nume: "ceai",
    pret: 20,
    categorie: "Băuturi",
  },
  {
    nume: "ciocolata",
    pret: 10,
    categorie: "Dulciuri și îndulcitori",
  },
  {
    nume: "iaurt",
    pret: 5,
    categorie: "Lactate",
  },
  {
    nume: "branza",
    pret: 35,
    categorie: "Lactate",
  },
];

const pretTotal = produse.reduce((total, produs) => total + produs.pret, 0);
console.log(pretTotal);

const produseInCos = [
  {
    nume: "lapte",
    pret: 10,
    categorie: "Lactate",
    cantitate: 2, // număr de bucăți
  },
  {
    nume: "paine",
    pret: 5,
    categorie: "Panificație",
    cantitate: 3, // număr de bucăți
  },
  {
    nume: "mere",
    pret: 7,
    categorie: "Fructe",
    cantitate: 5, // număr de bucăți
  },
  {
    nume: "ulei",
    pret: 15,
    categorie: "Uleiuri și grăsimi",
    cantitate: 1, // număr de bucăți
  },
  {
    nume: "branza",
    pret: 35,
    categorie: "Lactate",
    cantitate: 2, // număr de bucăți
  },
];

const pretFinal = produseInCos.reduce(
  (total, produsDinCos) => total + produsDinCos.cantitate * produsDinCos.pret,
  0
);

console.log(pretFinal);
