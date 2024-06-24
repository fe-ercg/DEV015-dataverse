import { filterData, sortData, computeStats } from "./dataFunctions.js";
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
  console.log(newFilterData);
});

//SORT
const sort = document.querySelector("#sort-order");

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
const buttonReset = document.querySelector("button[data-testid='button-clear']");

buttonReset.addEventListener("click", function () {
  render.innerHTML = "";
  filter.value = "";
  sort.value = "";

  render.appendChild(renderItems(data));
});

//STATS
const buttonStats = document.querySelector("#buttonStats");

buttonStats.addEventListener("click", function () {

  console.log(computeStats(data, "gender")); 
  console.log(computeStats(data, "age")); 
  console.log(computeStats(data, "city")); 
})