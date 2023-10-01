import { callbackFunction } from '../types';

export default class Controller {
  public listenerElement(
    element: HTMLElement,
    callback: callbackFunction,
  ): void {
    if (typeof callback === 'function') {
      element.addEventListener('click', (event) => callback(event));
    }
  }
}
