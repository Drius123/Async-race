import { ElementParams, callbackFunction } from '../types';

export default class ElementCreator {
  public element = document.createElement('div') as HTMLElement;

  constructor(params: ElementParams) {
    this.createElement(params);
  }

  private getElement(): HTMLElement {
    return this.element;
  }

  public addInnerElement(element: HTMLElement | ElementCreator): void {
    if (element instanceof ElementCreator) {
      this.element.append(element.getElement());
    } else {
      this.element.append(element);
    }
  }

  private createElement(params: ElementParams): void {
    this.element = document.createElement(params.tag);
    this.setCssClasses(params.classNames);
    if (typeof params.textContent === 'string') {
      this.setTextContent(params.textContent);
    }
    if (typeof params.callback === 'function') {
      this.setCallback(params.callback);
    }
    if (typeof params.type === 'string') {
      this.setType(params.type);
    }
  }

  private setCssClasses(cssClasses: string[]): void {
    if (this.element instanceof HTMLElement) {
      cssClasses.map((cssClass) => (cssClass === '' ? null : this.element.classList.add(cssClass)));
    }
  }

  private setTextContent(text: string) {
    if (this.element instanceof HTMLElement) {
      this.element.textContent = text;
    }
  }

  private setCallback(callback: callbackFunction): void {
    if (typeof callback === 'function') {
      this.element.addEventListener('click', (event) => callback(event));
    }
  }

  private setType(text: string) {
    if (this.element instanceof HTMLInputElement) {
      this.element.type = text;
    }
  }
}
