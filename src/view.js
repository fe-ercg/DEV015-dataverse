
export const renderItems = (data) => {


  const ul = document.createElement('ul');

  function crearElemento(data){
    
    const li = document.createElement('li');
    li.setAttribute('itemtype', 'Spiderverse')
    li.setAttribute('itemscope', '');
    li.setAttribute('data-id', data.id)
    li.classList.add('item-lista')
    ul.appendChild(li);

    //IMAGEN
    const personajeImagen = document.createElement('div');
    personajeImagen.style.backgroundImage = `url(${data.imageUrl})`;
    personajeImagen.classList.add('image')
    personajeImagen.setAttribute('alt', data.name);
    li.appendChild(personajeImagen);
    
    //TEXTO-------------
    const dl = document.createElement('dl');
    li.appendChild(dl);
    
    //NAME
    const dtNombre = document.createElement('dt');
    dl.appendChild(dtNombre);
    dtNombre.classList.add('name')
    dtNombre.innerHTML = data.name;
    
    //DESCRIPCION - CORTA 
    const dtDescripcion = document.createElement('dt');
    dl.appendChild(dtDescripcion);
    dtDescripcion.classList.add('descripcion')
    dtDescripcion.innerHTML = data.shortDescription;

    //DIV para FACTS
    const facts = document.createElement('div')
    facts.classList.add('facts')
    dl.appendChild(facts)

    //FACTS - GENERO
    const dtGender = document.createElement('dt');
    facts.appendChild(dtGender);
    dtGender.innerHTML = '<span class="label">Genero: </span><span class="value">' + data.facts.gender + '</span>';
    
    //FACTS - ESPECIE
    const dtSpecies = document.createElement('dt');
    facts.appendChild(dtSpecies);
    dtSpecies.innerHTML = '<span class="label">Especie: </span><span class="value">' + data.facts.species + '</span>';
        
    //FACTS - EDAD
    const dtAge = document.createElement('dt');
    facts.appendChild(dtAge);
    dtAge.innerHTML = '<span class="label">Edad: </span><span class="value">' + data.facts.age + '</span>';

    //FACTS - CIUDAD
    const dtCity = document.createElement('dt');
    facts.appendChild(dtCity);
    dtCity.innerHTML = '<span class="label"> Ciudad: </span><span class="value">' + data.facts.city + '</span>';
  }

  data.forEach(crearElemento);

  return ul

};

