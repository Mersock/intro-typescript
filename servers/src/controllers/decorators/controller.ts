import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

export function controller(routePrefix: string) {
  return function(target: Function) {
    // console.log('controller.target', target.prototype);
    const router = AppRouter.getInstance();

    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
