import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './method';
import { Metadatakey } from './metadataKey';

export function controller(routePrefix: string) {
  return function(target: Function) {
    // console.log('controller.target', target.prototype);
    const router = AppRouter.getInstance();

    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(Metadatakey.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(
        Metadatakey.method,
        target.prototype,
        key
      );

      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
