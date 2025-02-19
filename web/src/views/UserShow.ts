import { View } from './view';
import { User, UserProps } from '../models/user';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <div>
            <h1>User Detail</h1>
            <div>User Name:${this.model.get('name')}</div>
            <div>User Age:${this.model.get('age')}</div>
        </div>
      `;
  }
}
