import 'reflect-metadata';

export function get(path: string) {
  return function(target: any, key: string) {
    Reflect.defineMetadata('path', path, target, key);
    console.log('method.get', target);
    console.log('method.get', key);
  };
}
