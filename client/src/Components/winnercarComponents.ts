import { ElementParams } from '../types';

const tableWinnerCar: ElementParams = {
  tag: 'tr',
  classNames: ['container-car-winner'],
};

const numberCarTable: ElementParams = {
  tag: 'td',
  classNames: ['car-number-winner'],
};

const carImageTable: ElementParams = {
  tag: 'td',
  classNames: ['car-winner-img'],
};

const carWinnerNameTable: ElementParams = {
  tag: 'td',
  classNames: ['car-winner-name'],
};

const carNameValueWinsTable: ElementParams = {
  tag: 'td',
  classNames: ['car-wins-value'],
};

const carBestTimeValueTable: ElementParams = {
  tag: 'td',
  classNames: ['car-best-time-value'],
};

export {
  tableWinnerCar, numberCarTable, carImageTable, carWinnerNameTable,
  carNameValueWinsTable, carBestTimeValueTable,
};
