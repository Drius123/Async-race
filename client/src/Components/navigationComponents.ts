import { ElementParams } from '../types';

const sectionNavigation: ElementParams = {
  tag: 'section',
  classNames: ['section-nav'],
};

const btnToGarage: ElementParams = {
  tag: 'button',
  classNames: ['btn-garage'],
  textContent: 'TO GARAGE',
};

const btnToWinners: ElementParams = {
  tag: 'button',
  classNames: ['btn-winners'],
  textContent: 'TO WINNERS',
};

const divFormInputCreate: ElementParams = {
  tag: 'div',
  classNames: ['form-create'],
};

const inputCreate: ElementParams = {
  tag: 'input',
  classNames: ['input-create'],
  type: 'text',
};

const inputColor: ElementParams = {
  tag: 'input',
  classNames: ['input-color'],
  type: 'color',
};

const updateColor: ElementParams = {
  tag: 'input',
  classNames: ['update-color'],
  type: 'color',
};

const btnCreate: ElementParams = {
  tag: 'button',
  classNames: ['btn-create'],
  textContent: 'Create',
};

const divFormInputUpdate: ElementParams = {
  tag: 'div',
  classNames: ['form-update'],
};

const inputUpdate: ElementParams = {
  tag: 'input',
  classNames: ['input-update'],
  type: 'text',
};

const btnUpdate: ElementParams = {
  tag: 'button',
  classNames: ['btn-update'],
  textContent: 'Update',
};

const divFormRace: ElementParams = {
  tag: 'div',
  classNames: ['form-race'],
};

const btnRace: ElementParams = {
  tag: 'button',
  classNames: ['btn-race'],
  textContent: 'Race',
};

const btnReset: ElementParams = {
  tag: 'button',
  classNames: ['btn-reset'],
  textContent: 'Reset',
};

const btnGenerateCars: ElementParams = {
  tag: 'button',
  classNames: ['btn-generate'],
  textContent: 'GENERATE CARS',
};

const sectionNavBtn: ElementParams = {
  tag: 'section',
  classNames: ['section-nav-btn'],
};

export {
  sectionNavigation, btnToGarage, btnToWinners, inputCreate, inputUpdate, divFormInputUpdate,
  divFormInputCreate, btnCreate, btnUpdate, inputColor, divFormRace,
  updateColor, btnRace, btnReset, btnGenerateCars, sectionNavBtn,
};
