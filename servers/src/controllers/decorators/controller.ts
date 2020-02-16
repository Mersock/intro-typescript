import 'reflect-metadata';
import { Request, Response, RequestHandler, NextFunction } from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods } from './method';
import { Metadatakey } from './metadataKey';

function bodyValidators(keys: string): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid Request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }

    next();
  };
}

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

      const middlewares =
        Reflect.getMetadata(Metadatakey.middleware, target.prototype, key) ||
        [];

      const bodyProps =
        Reflect.getMetadata(Metadatakey.validator, target.prototype, key) || [];

      const validator = bodyValidators(bodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          validator,
          ...middlewares,
          routeHandler
        );
      }
    }
  };
}
