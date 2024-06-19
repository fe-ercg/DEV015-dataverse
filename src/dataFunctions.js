export const sortData = (data, sortBy, sortOrder) => {
  
  const dataOrder = data.sort((a, b) => {

    if (a[sortBy] < b[sortBy] ) {
      return sortOrder === 'asc'? -1 : 1 ;
    }
    if (a[sortBy] > b[sortBy] ) {
      return sortOrder === 'asc'? 1 : -1 ;
    }
    return 0;
  });
  return dataOrder;
};

export const filterData = (data, filterBy, value) => {
  if (filterBy === "gender") {
    const filterGender = data.filter((item) => item.facts[filterBy] === value);
    return filterGender;
  }

  if (filterBy === "age") {
    if (value <= 20) {
      const menores20 = data.filter((item) => item.facts[filterBy] <= value);
      return menores20;
    }
    if (value > 20 && value <= 30) {
      const menores30 = data.filter(
        (item) => item.facts[filterBy] <= value && item.facts[filterBy] > 20
      );
      return menores30;
    }
    if (value > 30) {
      const mayores30 = data.filter((item) => item.facts[filterBy] > value);
      return mayores30;
    }
  }
};
