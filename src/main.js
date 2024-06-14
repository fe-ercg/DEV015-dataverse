import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

// Trae la info de la funcion render items
const render = document.querySelector("#root");
render.appendChild(renderItems(data));

//FILTRO
const filter = document.querySelector("#filter");

// filter.addEventListener("change", (event) => {
//   const filterValue = event.target.value;
//   // console.log(`target.value => ${filterValue}`);
//   let newData;

//   if(filterValue === "masculino" || filterValue === "femenino"){
//     newData = filterData(data, "gender", filterValue);
//   }
//   else {
//     newData = filterData(data, "age", filterValue);
//   }

//   render.innerHTML ='';
//   render.appendChild(renderItems(data));
// });

filter.addEventListener("change", (event) => {
  const filterValue = event.target.value;
  let newData;
  if (newData) {
    newData = filterData(data, "gender", filterValue);
  } else {
    newData = filterData(data, "age", filterValue);
  }
  render.innerHTML ='';
  render.appendChild(renderItems(newData));
});