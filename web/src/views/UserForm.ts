import { User } from '../models/user';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
            <div onClick={this.onClick}>
            <h1>User Form</h1>
            <div>user name:${this.model.get('name')}</div>
            <div>user age:${this.model.get('age')}</div>
            <input/>
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
            </div>
            <template>

            </template>
        `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventMap = this.eventMap();

    for (const eventkey in eventMap) {
      const [eventName, selector] = eventkey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventMap[eventkey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
