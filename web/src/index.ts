import { User } from './models/user';

const user = User.buildUser({ id: 1, name: 'never name', age: 223434 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
