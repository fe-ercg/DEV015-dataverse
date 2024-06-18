import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";



// Trae la info de la funcion render items
const render = document.querySelector("#root");
render.appendChild(renderItems(data));

//FILTRO
const filter = document.querySelector("#filter");
let newFilterData;

filter.addEventListener("change", (event) => {
  const filterValue = event.target.value;

  if (filterValue === "Masculino" || filterValue === "Femenino") {
    newFilterData = filterData(data, "gender", filterValue);
  } else {
    newFilterData = filterData(data, "age", filterValue);
  }

  render.innerHTML = "";
  render.appendChild(renderItems(newFilterData));
});

// //ORDER 
// // FUNCIONA SIN FILTRO PERO una vez filtrado ya no mantiene
// const sort = document.querySelector("#sort");

// sort.addEventListener("change", (event) => {
//   const sortValue = event.target.value;
//   let orderData;

//   if (sortValue === "asc") {
//     orderData = sortData(data, "name", sortValue);
//   }
//   if (sortValue === "desc") {
//     orderData = sortData(data, "name", sortValue);
//   }

//   render.innerHTML = "";
//   render.appendChild(renderItems(orderData));
// });

//ORDER
// funciona solo con filtro

const sort = document.querySelector("#sort");

sort.addEventListener("change", (event) => {
  const sortValue = event.target.value;
  let orderData;


  if (newFilterData) {
    if (sortValue === "asc") {
      orderData = sortData(newFilterData, "name", sortValue);
    }
    if (sortValue === "desc") {
      orderData = sortData(newFilterData, "name", sortValue);
    }
  } else {
    if (sortValue === "asc") {
      orderData = sortData(data, "name", sortValue);
    }
    if (sortValue === "desc") {
      orderData = sortData(data, "name", sortValue);
    }
  }

  render.innerHTML = "";
  render.appendChild(renderItems(orderData));
});

// BOTON RESET
const button = document.querySelector("button[data-testid='button-clear']");

button.addEventListener("click", function () {
  render.innerHTML = "";
  filter.value = "";
  sort.value = "";

  render.appendChild(renderItems(data));
});
