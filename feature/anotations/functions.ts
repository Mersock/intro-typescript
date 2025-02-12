const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function devide(a: number, b: number): number {
  return a / b;
}

const mulitply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  return undefined;
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

console.log(todayWeather);
