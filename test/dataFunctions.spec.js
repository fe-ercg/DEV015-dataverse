import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);



describe('filterData', () => {

  it('should Spiderman by gender and return the quantity of female', () => {

    const totalSpiderman = filterData(fakeData, 'gender', 'Femenino');

    expect(totalSpiderman.length).toBe(4);
  })
})

describe('filterData', () => {

  it('should Spiderman by gender and return the quantity of male', () => {

    const totalSpiderman = filterData(fakeData, 'gender', 'Masculino');

    expect(totalSpiderman.length).toBe(6);
  })
})

describe('filterData', () => {

  it('should Spiderman by age and return the quantity of under 20', () => {

    const totalSpiderman = filterData(fakeData, 'age', '20');

    expect(totalSpiderman.length).toBe(5);
  })
})

describe('filterData', () => {

  it('should Spiderman by age and return the quantity of under 30', () => {

    const totalSpiderman = filterData(fakeData, 'age', '30');

    expect(totalSpiderman.length).toBe(2);
  })
})

describe('filterData', () => {

  it('should Spiderman by age and return the quantity of greather than 30', () => {

    const totalSpiderman = filterData(fakeData, 'age', '31');

    expect(totalSpiderman.length).toBe(3);
  })
})

describe('sortData', () => {

  it('Should Spiderman in ascending order and return the name of the first one in the list', () => {

    const orderSpiderman = sortData(fakeData, 'name', 'asc');

    expect(orderSpiderman[0].name).toBe('Silk');
  })
})

describe('sortData', () => {

  it('Should Spiderman in ascending order and return the name of the fifth in the list', () => {

    const orderSpiderman = sortData(fakeData, 'name', 'asc');

    expect(orderSpiderman[5].name).toBe('Spider-Man J');
  })
})
