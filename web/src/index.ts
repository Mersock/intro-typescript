import { User } from './models/user';

const user = new User({ name: 'hello', age: 20 });

console.log(user.get('name'));

user.set({ name: 'eiei', age: 21 });

user.set({ name: 'eiei' });

console.log(user.get('name'));
