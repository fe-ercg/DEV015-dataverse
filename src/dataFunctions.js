// SORT
export const sortData = (data, sortBy, sortOrder) => {

  const dataOrder = data.map((item) => item);
  dataOrder.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });
  return dataOrder;
};

// FILTRO
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

//STATS

export const computeStats = (data, type) => {
  const genderStats = data.reduce(
    (acumulador, item) => {
      const gender = item.facts[type];
      if (!acumulador[gender]) {
        acumulador[gender] = 1;
      } else {
        acumulador[gender] += 1;
      }

      return acumulador
    }, {}
  );

  const totalSpiders = data.length;

  const porcentajes = Object.keys(genderStats).reduce((acumulador, item) => {
    acumulador[item] = (genderStats[item] / totalSpiders * 100).toFixed(1) + "%";
    return acumulador;
  }, {});

  return porcentajes, genderStats;
};