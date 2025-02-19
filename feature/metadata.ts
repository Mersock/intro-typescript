import 'reflect-metadata';

const plane = {
  color: 'red'
};

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// Reflect.defineMetadata('note', 'hi', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);

@controller
class Plane {
  color: string = 'red';

  @get('hello')
  fly(): void {
    console.log('fly');
  }
}

function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

const secret = Reflect.getMetadata('path', Plane.prototype, 'fly');

function controller(target: typeof Plane) {
  for (const key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);

    console.log(path);
  }
}
