import 'reflect-metadata';
import { Methods } from './method';
import { Metadatakey } from './metadataKey';

function routeBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string) {
      Reflect.defineMetadata(Metadatakey.path, path, target, key);
      Reflect.defineMetadata(Metadatakey.method, method, target, key);

      // console.log('method.', target);
      // console.log('method.get', key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const put = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
