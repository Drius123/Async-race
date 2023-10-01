export type callbackFunction = (event: Event) => void;

export type callbackFunctionCar = (title: string) => void;

export interface ElementParams {
  tag: string,
  classNames: string[],
  textContent?: string,
  callback?: callbackFunction,
  type?: string,
}

export interface path {
  garage: string,
  winners: string,
}

export type car = {
  name: string,
  color: string,
  id:number,
}

export type carWinner = {
  name: string,
  color: string,
  id:number,
  time: number,
  wins: number,
}

export type carItems = car[];

export type carItemsWinner = carWinner[];

export interface responseEngine {
 velocity: number,
 distance: number,
}

export type promisArr = Promise<unknown>[];

export type respArr = number[][];
