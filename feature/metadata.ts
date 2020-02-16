import 'reflect-metadata';

const plane = {
  color: 'red'
};

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

Reflect.defineMetadata('note', 'hi', plane, 'color');

const note = Reflect.getMetadata('note', plane, 'color');

console.log(note);
