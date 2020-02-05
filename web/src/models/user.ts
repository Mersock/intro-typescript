interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => {};

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  get(propName: string): number | string {
    return this.data[propName];
  }

  on(eventName: string, callback: Callback) {}
}
