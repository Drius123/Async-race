import {
  carBestTimeValueTable, carImageTable,
  carNameValueWinsTable, carWinnerNameTable, numberCarTable, tableWinnerCar,
} from '../Components/winnercarComponents';
import Request from '../Request/request';
import ElementCreator from '../htmlcreater/htmlcreater';
import { carItemsWinner } from '../types';
import Winners from '../winners/winners';
import './resources.scss';

export default class Winnercar {
  private request: Request;

  private carIMG: string;

  constructor() {
    this.request = new Request();
    this.carIMG = require('../assets/car.svg');
  }

  private createWinnerCar(
    id: number,
    color: string,
    name: string,
    time: number,
    wins: number,
  ): void {
    const carWinner = new ElementCreator(tableWinnerCar);
    const carNum = new ElementCreator(numberCarTable);
    const carImg = new ElementCreator(carImageTable);
    const carNameWineer = new ElementCreator(carWinnerNameTable);
    const carWins = new ElementCreator(carNameValueWinsTable);
    const carBestTime = new ElementCreator(carBestTimeValueTable);

    carNum.element.textContent = String(id);
    carImg.element.innerHTML = this.carIMG;
    const svg = carImg.element.firstChild?.firstChild?.firstChild as SVGElement;
    if (svg instanceof SVGElement) {
      svg.style.fill = color;
    }
    carNameWineer.element.textContent = name;
    carBestTime.element.textContent = String(time);

    carWinner.addInnerElement(carNum);
    carWinner.addInnerElement(carImg);
    carWinner.addInnerElement(carNameWineer);
    carWins.element.textContent = String(wins);
    carWinner.addInnerElement(carWins);
    carWinner.addInnerElement(carBestTime);
    const container = document.querySelector('.container-table') as HTMLElement;
    if (container instanceof HTMLElement) {
      container.appendChild(carWinner.element);
    }
  }

  public addItems(): void {
    const page = localStorage.getItem('winners');
    const container = document.querySelector('.container-table') as HTMLElement;
    if (container instanceof HTMLElement) {
      container.innerHTML = '';
      container.appendChild(Winners.createCap().element);
      this.request.getCarWinnersItems<carItemsWinner>(Number(page)).then((resp) => {
        resp.forEach((item) => {
          this.createWinnerCar(item.id, item.color, item.name, item.time, item.wins);
        });
        const winnerNum = document.querySelector('.winner-numbers') as HTMLElement;
        this.request.getAllCarWinnerItems().then((response) => {
          if (winnerNum instanceof HTMLElement) {
            winnerNum.textContent = `Winners(${response})`;
          }
        });
      });
    }
  }
}
