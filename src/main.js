import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

// console.log(example, renderItems(data), data);

// Trae la info de la funcion render items
const render = document.querySelector("#root");
render.appendChild(renderItems(data));

//Filtro
const filter = document.querySelector("#filter");

filter.addEventListener("change", (event) => {
  const filterValue = event.target.value;
  let newData;

  if (filterValue==='masculino') {
    newData = filterData(data, "gender", filterValue);
  } 
  if (filterValue==='femenino') {
    newData = filterData(data, "gender", filterValue);
  } 

  render.innerHTML ='';
  render.appendChild(renderItems(newData));

});

// filter.addEventListener("change", (event) => {
//   const filterValue = event.target.value;
//   let newData;

//   if (filterValue) {
//     newData = filterData(data, "gender", filterValue);
//   } else {
//     newData = filterData(data, "age", filterValue);
//   }

//   render.innerHTML ='';
//   render.appendChild(renderItems(newData));

// });