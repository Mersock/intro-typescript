import 'reflect-metadata';
import { Metadatakey } from './metadataKey';
import { RequestHandler } from 'express';

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDecorator) {
    const middlewares =
      Reflect.getMetadata(Metadatakey.middleware, target, key) || [];

    Reflect.defineMetadata(
      Metadatakey.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
