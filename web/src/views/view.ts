import { Model } from '../models/model';

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
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

  mapRegions(fragment: DocumentFragment): void {
    const regionMap = this.regionsMap();

    for (let key in regionMap) {
      const selector = regionMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
