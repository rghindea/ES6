const persoana = {
  nume: "Costel",
  varsta: 30,
  oras: "Ploiesti",
};

console.log(persoana.nume, persoana.varsta, persoana.oras);

const { nume, varsta, oras } = persoana;

console.log(nume, varsta, oras);

// const nume = persoana.nume;
// const varsta = persoana.varsta;
// const oras = persoana.oras;

const produse = [
  {
    nume: "lapte",
    pret: 10,
    imageUrl:
      "https://laptariacucaimac.ro/wp-content/uploads/2021/06/lapte-de-la-vaca-1024x1024.jpg",
  },
  { nume: "cafea", pret: 50 },
  { nume: "paine", pret: 5 },
  {
    nume: "oua",
    pret: 12,
    imageUrl: "https://www.wowbiz.ro/uploads/modules/articles/content/o-u.jpg",
  },
  {
    nume: "unt",
    pret: 25,
    imageUrl:
      "https://delatte.ro/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/u/n/unt.jpg",
  },
  {
    nume: "sare",
    pret: 3,
    imageUrl:
      "https://i1.wp.com/www.exquis.ro/wp-content/uploads/2019/09/sare.jpg",
  },
  {
    nume: "piper",
    pret: 6,
    imageUrl:
      "https://produse-bune.ro/wp-content/uploads/2020/09/piper-negru-boabe.jpg",
  },
  {
    nume: "morcovi",
    pret: 4,
    imageUrl:
      "https://ro.openfoodfacts.org/images/products/594/133/901/7398/front_ro.4.full.jpg",
  },
  {
    nume: "cartofi",
    pret: 3,
    imageUrl:
      "https://www.realfoods.ro/wp-content/uploads/2018/05/cartofi-rosii.jpg",
  },
  {
    nume: "mere",
    pret: 7,
    imageUrl:
      "https://ro.openfoodfacts.org/images/products/594/151/560/6457/front_ro.7.full.jpg",
  },
  {
    nume: "banane",
    pret: 8,
    imageUrl: "https://www.agrari.ro/files/products/s/banane_5bba4190.jpg",
  },
  {
    nume: "rosii",
    pret: 6,
    imageUrl:
      "https://ro.openfoodfacts.org/images/products/594/148/200/1877/front_ro.5.full.jpg",
  },
  {
    nume: "castraveti",
    pret: 5,
    imageUrl:
      "https://m.bucatariaioanei.ro/wp-content/uploads/2019/04/castraveti1.jpg",
  },
  {
    nume: "ulei",
    pret: 15,
    imageUrl:
      "https://www.triodeluxe.ro/wp-content/uploads/2021/06/ulei-de-masline-extravirgin-500ml-ulei-de-masline-500ml-ulei-de-masline-extravirgin-ulei-virgin-ulei-bun.jpg",
  },
  {
    nume: "zahar",
    pret: 5,
    imageUrl:
      "https://www.kaufland.ro/imagini-de-produse/entw/2/5/4/4/17349252/PI_RO_254430_T1.jpg",
  },
  {
    nume: "faina",
    pret: 4,
    imageUrl:
      "https://www.zahia.ro/media/catalog/product/cache/1/image/0f396e8a55728e79b48334e699243c07/f/a/faina_grau_bio_eco_organica_integrala_4.jpg",
  },
  {
    nume: "miere",
    pret: 30,
    imageUrl:
      "https://www.miereagroapismar.ro/wp-content/uploads/2020/06/miere-polyfloral_1.jpg",
  },
  {
    nume: "ceai",
    pret: 20,
    imageUrl: "https://static.realfoods.ro/products/Ceai-de-Menta.jpg",
  },
  {
    nume: "ciocolata",
    pret: 10,
    imageUrl: "https://static.realfoods.ro/products/Ciocolata.jpg",
  },
  {
    nume: "iaurt",
    pret: 5,
    imageUrl:
      "https://ro.openfoodfacts.org/images/products/594/905/870/6787/front_ro.5.full.jpg",
  },
  {
    nume: "branza",
    pret: 35,
    imageUrl:
      "https://ro.openfoodfacts.org/images/products/594/195/720/3675/front_ro.5.full.jpg",
  },
];

const container = document.querySelector(".container");

const createProductCard = (product) => {
  const { nume, pret, imageUrl } = product;
  return `<div class="card">
   <h1>${nume}</h1>
   <img src=${imageUrl} />
   <p>${pret}</p>
   </div>`;
};

const createAllProductCards = (products) => {
  let output = "";
  for (let i = 0; i <= products.length - 1; i++) {
    output = output + createProductCard(products[i]);
  }
  return output;
};

container.innerHTML = createAllProductCards(produse);
