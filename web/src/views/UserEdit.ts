import { View } from './view';
import { User, UserProps } from '../models/user';

export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `;
  }
}
