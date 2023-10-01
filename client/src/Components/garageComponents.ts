import { ElementParams } from '../types';

const sectionGarage: ElementParams = {
  tag: 'section',
  classNames: ['section-garage'],
};

const containerGarage: ElementParams = {
  tag: 'div',
  classNames: ['container'],
};

const h1Garage: ElementParams = {
  tag: 'h1',
  classNames: ['car-numbers'],
  textContent: 'Garage',
};

const divNavGarage: ElementParams = {
  tag: 'div',
  classNames: ['page-changer'],
};

const btnNext: ElementParams = {
  tag: 'button',
  classNames: ['btn-next'],
  textContent: 'NEXT',
};

const btnPrev: ElementParams = {
  tag: 'button',
  classNames: ['btn-prev'],
  textContent: 'PREV',
};

const h2Garage: ElementParams = {
  tag: 'h2',
  classNames: ['page-number'],
  textContent: 'Page',
};

export {
  sectionGarage, containerGarage, h1Garage, h2Garage, divNavGarage, btnNext, btnPrev,
};
