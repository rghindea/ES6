const fruits = ['pineapple', 'peach', 'apple', 'cherry'];

const sortedFruitedByName = fruits.sort();
console.log(sortedFruitedByName);

const numbers = [4, 1, 10, 111, 12, 3];
// const sortedNumbers = numbers.sort((a, b) => {
// 	if (a < b) {
// 		return -1;
// 	} else if (a > b) {
// 		return 1;
// 	} else {
// 		return 0;
// 	}
// });
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

const produse = [
	{
		nume: 'lapte',
		pret: 10,
		categorie: 'Lactate',
	},
	{
		nume: 'cafea',
		pret: 50,
		categorie: 'Băuturi',
	},
	{
		nume: 'paine',
		pret: 5,
		categorie: 'Panificație',
	},
	{
		nume: 'oua',
		pret: 12,
		categorie: 'Ouă și produse din ouă',
	},
	{
		nume: 'unt',
		pret: 25,
		categorie: 'Lactate',
	},
	{
		nume: 'sare',
		pret: 3,
		categorie: 'Condimente',
	},
	{
		nume: 'piper',
		pret: 6,
		categorie: 'Condimente',
	},
	{
		nume: 'morcovi',
		pret: 4,
		categorie: 'Legume',
	},
	{
		nume: 'cartofi',
		pret: 3,
		categorie: 'Legume',
	},
	{
		nume: 'mere',
		pret: 7,
		categorie: 'Fructe',
	},
	{
		nume: 'banane',
		pret: 8,
		categorie: 'Fructe',
	},
	{
		nume: 'rosii',
		pret: 6,
		categorie: 'Legume',
	},
	{
		nume: 'castraveti',
		pret: 5,
		categorie: 'Legume',
	},
	{
		nume: 'ulei',
		pret: 15,
		categorie: 'Uleiuri și grăsimi',
	},
	{
		nume: 'zahar',
		pret: 5,
		categorie: 'Dulciuri și îndulcitori',
	},
	{
		nume: 'faina',
		pret: 4,
		categorie: 'Panificație',
	},
	{
		nume: 'miere',
		pret: 30,
		categorie: 'Dulciuri și îndulcitori',
	},
	{
		nume: 'ceai',
		pret: 20,
		categorie: 'Băuturi',
	},
	{
		nume: 'ciocolata',
		pret: 10,
		categorie: 'Dulciuri și îndulcitori',
	},
	{
		nume: 'iaurt',
		pret: 5,
		categorie: 'Lactate',
	},
	{
		nume: 'branza',
		pret: 35,
		categorie: 'Lactate',
	},
];

const produseSortateDupaPretCrescator = produse.sort(
	(produs1, produs2) => produs1.pret - produs2.pret
);

console.log(produseSortateDupaPretCrescator);

const produseSortateDupaPretDescrescator = produse.sort(
	(produs1, produs2) => produs2.pret - produs1.pret
);

console.log(produseSortateDupaPretDescrescator);
