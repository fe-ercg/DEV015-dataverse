import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const render = document.querySelector("#box");
render.innerHTML= renderItems.mostrarValores(data);
console.log(example, renderItems(data), data);
