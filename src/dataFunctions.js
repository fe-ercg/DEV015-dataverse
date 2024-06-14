// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};
//filterBy gender
// value masculino



export const filterData = (data, filterBy, value) => {

 
  if (filterBy === 'gender') {
    const filterGender = data.filter(item => item.facts[filterBy] === value);
    return filterGender;
  }
    
  if (filterBy === 'age') {

    if (value <= 20) {
      const menores20 = data.filter(item => item.facts[filterBy] <= value);
      return menores20;
    }
    if (value > 20 && value <= 30) {
      const menores30 = data.filter(item => item.facts[filterBy] <= value && item.facts[filterBy] > 20);
      return menores30;
    }
    if (value > 30) {
      const mayores30 = data.filter(item => item.facts[filterBy] > value);
      return mayores30;
    }
  }
}
