// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};
//filterBy gender
// value masculino



export const filterData = (data, filterBy, value ) => {
  // console.log(`value argumento => ${value}`);
  // console.log(`valor que se captura de la data(gender:AQUI) => ${data[0].facts.gender} -> el impostor`);
  // const newData = data
  // const newDataFilter = newData.filter(item => item.facts[filterBy] === value )
  // console.log('>',newDataFilter);

  //GENERO
  if( filterBy ==='gender'){
    const fGender = data.filter(item => item.facts[filterBy] === value);
    return fGender; 
  } 
  
  //EDAD
  if( filterBy === 'age'){

    if(value <= 20){
      const menores20 = data.filter(item => item.facts[filterBy] <= value);
      return menores20;
    }
    if(value > 20 && value <= 30){
      const menores30 = data.filter(item => item.facts[filterBy] <= value && item.facts[filterBy] > 20 );
      return menores30;
    }
    if(value > 30){
      const mayores30 = data.filter(item => item.facts[filterBy] > value);
      return mayores30;
    }
  }

}