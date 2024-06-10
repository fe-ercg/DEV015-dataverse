import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

// Trae la info de la funcion render items
const render = document.querySelector('#root')
render.appendChild(renderItems(data))

