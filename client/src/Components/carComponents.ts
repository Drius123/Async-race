import { ElementParams } from '../types';

const divCar: ElementParams = {
  tag: 'div',
  classNames: ['car-container'],
};

const carNav: ElementParams = {
  tag: 'div',
  classNames: ['car-nav'],
};

const btnSelectCar: ElementParams = {
  tag: 'button',
  classNames: ['btn-select'],
  textContent: 'Select',
};

const btnRemoveCar: ElementParams = {
  tag: 'button',
  classNames: ['btn-remove'],
  textContent: 'Remove',
};

const carName: ElementParams = {
  tag: 'p',
  classNames: ['car-name'],
};

const divEngine: ElementParams = {
  tag: 'div',
  classNames: ['div-engine'],
};

const btnACar: ElementParams = {
  tag: 'button',
  classNames: ['btn-a'],
  textContent: 'A',
};

const btnBCar: ElementParams = {
  tag: 'button',
  classNames: ['btn-b'],
  textContent: 'B',
};

const road: ElementParams = {
  tag: 'div',
  classNames: ['road'],
};

const flag: ElementParams = {
  tag: 'img',
  classNames: ['finish-flag'],
};

const carFirstNames: string[] = ['AUDI', 'BMW', 'MERSEDES', 'TESLA', 'ACURA', 'BUGATTI', 'CHEVROLET', 'FERRARI', 'HONDA', 'KIA', 'LAMBORGHINI', 'MITSUBISHI', 'RENAULT'];

const carSecondNames: string[] = ['X7', '221', 'MODEL S', 'R8', 'MALIBU', 'FF', 'M5', 'S2000', 'LANCER', 'DUSTER', 'INTEGRA', 'CONTINENTAL GT', 'VESTA'];

export {
  divCar, btnSelectCar, btnRemoveCar, carName, btnACar, btnBCar,
  carNav, divEngine, carFirstNames, carSecondNames, road, flag,
};
