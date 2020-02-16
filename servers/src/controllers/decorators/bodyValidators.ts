import 'reflect-metadata';
import { Metadatakey } from './metadataKey';

export function bodyValidator(...keys: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(Metadatakey.validator, keys, target, key);
  };
}
