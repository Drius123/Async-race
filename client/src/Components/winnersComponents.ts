import { ElementParams } from '../types';

const sectionWinner: ElementParams = {
  tag: 'section',
  classNames: ['section-winner', 'hidden'],
};

const h1Winner: ElementParams = {
  tag: 'h1',
  classNames: ['winner-numbers'],
  textContent: 'Winners',
};

const h2Winner: ElementParams = {
  tag: 'h2',
  classNames: ['winner-page'],
  textContent: 'Page #1',
};

const containerTable: ElementParams = {
  tag: 'table',
  classNames: ['container-table'],
};

const tableCap: ElementParams = {
  tag: 'tr',
  classNames: ['container-cap'],
};

const numberTable: ElementParams = {
  tag: 'th',
  classNames: ['winner-number'],
  textContent: 'Number',
};

const carTable: ElementParams = {
  tag: 'th',
  classNames: ['winner-car'],
  textContent: 'Car',
};

const carNameTable: ElementParams = {
  tag: 'th',
  classNames: ['winner-name'],
  textContent: 'Name',
};

const carNameWinsTable: ElementParams = {
  tag: 'th',
  classNames: ['winner-wins'],
  textContent: 'Wins',
};

const carBestTimeTable: ElementParams = {
  tag: 'th',
  classNames: ['winner-best-time'],
  textContent: 'Best Time(seconds)',
};

export {
  sectionWinner, h1Winner, h2Winner, containerTable, tableCap,
  numberTable, carTable, carNameTable, carNameWinsTable, carBestTimeTable,
};
