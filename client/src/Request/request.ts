import { path } from '../types';

export default class Request {
  private baseUrl: string;

  private path: path;

  constructor() {
    this.baseUrl = 'http://localhost:3000/';
    this.path = {
      garage: 'garage',
      winners: 'winners',
    };
  }

  public async createCarItem<T>(name: string, color: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${this.path.garage}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        color,
      }),
    });
    const car = await response.json();
    return car;
  }

  public async getCarItem<T>(id: number): Promise<T> {
    const response = await fetch(`${this.baseUrl}${this.path.garage}?id=${id}`);
    const item = await response.json();
    return item;
  }

  public async getCarItems<T>(page: number): Promise<T> {
    const response = await fetch(`${this.baseUrl}${this.path.garage}?_page=${page}&_limit=7`);
    const items = await response.json();
    return items;
  }

  public async getAllCarItems<T>(): Promise<T> {
    const response = await fetch(`${this.baseUrl}${this.path.garage}`);
    const items = await response.json();
    return items.length;
  }

  public async removeCarItem<T>(id: number): Promise<T> {
    const response = await fetch(`${this.baseUrl}${this.path.garage}/${id}`, {
      method: 'DELETE',
    });
    const car = await response.json();
    return car;
  }

  public async changeCarItem<T>(id: number, name: string, color: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${this.path.garage}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        color,
      }),
    });
    const car = await response.json();
    return car;
  }

  public async driveCar<T>(id: number, status: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}engine?id=${id}&status=${status}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id,
        status,
      }),
    });
    const car = await response.json();
    return car;
  }

  public async createCarWinnerItem<T>(
    name: string,
    color: string,
    time: number,
    wins: number,
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}${this.path.winners}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        color,
        time,
        wins,
      }),
    });
    const car = await response.json();
    return car;
  }

  public async getCarWinnersItems<T>(page: number): Promise<T> {
    const response = await fetch(`${this.baseUrl}${this.path.winners}?_page=${page}&_limit=10`);
    const items = await response.json();
    return items;
  }

  public async getAllCarWinnerItems<T>(): Promise<T> {
    const response = await fetch(`${this.baseUrl}${this.path.winners}`);
    const items = await response.json();
    return items.length;
  }
}
