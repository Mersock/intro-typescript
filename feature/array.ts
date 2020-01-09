const carMaker = ['ford', 'honda'];
const date = [new Date(), new Date()];

const carsBy: string[][] = [];

//help with inference when exreacting values
const cars = carMaker[0];
const myCar = carMaker.pop();

//Prevent income
carMaker.push(100);

//help with map
carMaker.map((car: string): string => {
  return car.toLocaleUpperCase();
});

//flixible type
const importantDate: (Date | String)[] = [new Date(), '2020-10-10'];
importantDate.push('2020-10-10');
importantDate.push('2020-03-03');
