export const renderItems = (data) => {
  const render = document.querySelector('#box');
  
  const ul = document.createElement('ul');
  render.appendChild(ul);

  function crearElemento(data){
    const li = document.createElement('li');
    li.classList.add('item-lista')
    ul.appendChild(li);

    const dl = document.createElement('dl');
    dl.setAttribute('itemscope', '');
    dl.setAttribute('itemtype', 'Spiderverse');
    li.appendChild(dl);

    //IMAGEN
    const personajeImagen = document.createElement('img');
    personajeImagen.setAttribute('src', data.imageUrl);
    personajeImagen.setAttribute('alt', data.name);
    dl.appendChild(personajeImagen);

    //NAME
    const dtNombre = document.createElement('dt');
    dl.appendChild(dtNombre);
    dtNombre.innerHTML = 'Nombre: ';
    
    const ddNombre = document.createElement('dd');
    ddNombre.setAttribute('itemprop', 'name');
    dl.appendChild(ddNombre);
    ddNombre.innerHTML = data.name;
    
    //DESCRIPCION - CORTA
    const dtDescripcion = document.createElement('dt');
    dl.appendChild(dtDescripcion);
    dtDescripcion.innerHTML = 'Descripcion: ';
    
    const ddDescripcion = document.createElement('dd');
    ddDescripcion.setAttribute('itemprop', 'shortDescription');
    dl.appendChild(ddDescripcion);
    ddDescripcion.innerHTML = data.shortDescription;
    
    //FACTS - GENERO
    const dtGender = document.createElement('dt');
    dl.appendChild(dtGender);
    dtGender.innerHTML = 'Genero: ';
    
    const ddGender = document.createElement('dd');
    ddGender.setAttribute('itemprop', 'gender');
    dl.appendChild(ddGender);
    ddGender.innerHTML = data.facts.gender;
    
    //FACTS - ESPECIE
    const dtSpecies = document.createElement('dt');
    dl.appendChild(dtSpecies);
    dtSpecies.innerHTML = 'Especie: ';
    
    const ddSpecies = document.createElement('dd');
    ddSpecies.setAttribute('itemprop', 'species');
    dl.appendChild(ddSpecies);
    ddSpecies.innerHTML = data.facts.species;
    
    //FACTS - EDAD
    const dtAge = document.createElement('dt');
    dl.appendChild(dtAge);
    dtAge.innerHTML = 'Edad: ';
    
    const ddAge = document.createElement('dd');
    ddAge.setAttribute('itemprop', 'age');
    dl.appendChild(ddAge);
    ddAge.innerHTML = data.facts.age;
    
    //FACTS - CIUDAD
    const dtCity = document.createElement('dt');
    dl.appendChild(dtCity);
    dtCity.innerHTML = 'Ciudad: ';
    
    const ddCity = document.createElement('dd');
    ddCity.setAttribute('itemprop', 'city');
    dl.appendChild(ddCity);
    ddCity.innerHTML = data.facts.city;




  }

  data.forEach(crearElemento);
};

