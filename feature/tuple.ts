const drink = {
  color: 'brown',
  corbonated: true,
  sugar: 40
};

// const pepsi: [string, boolean, number] = ['brown', true, 40];

//type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3554];

const carStats = {
  horseposer: 400,
  weight: 3354
};
