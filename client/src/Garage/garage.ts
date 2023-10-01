import Car from '../Car/car';
import {
  btnNext,
  btnPrev,
  containerGarage, divNavGarage, h1Garage, h2Garage, sectionGarage,
} from '../Components/garageComponents';
import Controller from '../Controller/controller';
import Request from '../Request/request';
import ElementCreator from '../htmlcreater/htmlcreater';
import { carItems } from '../types';
import './resources.scss';

export default class Garage {
  private controller: Controller;

  private request: Request;

  private car: Car;

  constructor() {
    this.controller = new Controller();
    this.request = new Request();
    this.car = new Car();
    this.createGarage();
    this.addListenerBtns();
  }

  private createGarage(): void {
    const section = new ElementCreator(sectionGarage);
    const container = new ElementCreator(containerGarage);
    const h1 = new ElementCreator(h1Garage);
    const h2 = new ElementCreator(h2Garage);
    const divBtn = new ElementCreator(divNavGarage);
    const nextBtn = new ElementCreator(btnNext);
    const prevBtn = new ElementCreator(btnPrev);

    divBtn.addInnerElement(prevBtn);
    divBtn.addInnerElement(nextBtn);
    section.addInnerElement(h1);
    section.addInnerElement(h2);
    section.addInnerElement(divBtn);
    section.addInnerElement(container);

    document.body.appendChild(section.element);
  }

  public changePage(page: string): void {
    const pageNumber = document.querySelector('.page-number') as HTMLElement;
    if (pageNumber instanceof HTMLElement) {
      pageNumber.textContent = `Page #${page}`;
    }
  }

  private changePageEvent(event: Event): void {
    const btn = event.target as HTMLButtonElement;
    const page = localStorage.getItem('page');
    const container = document.querySelector('.container') as HTMLElement;
    if (btn instanceof HTMLButtonElement) {
      if (btn.classList.contains('btn-next')) {
        this.request.getAllCarItems().then((response) => {
          if (Number(response) - 7 * Number(page) > 0) {
            if (container instanceof HTMLElement) {
              container.innerHTML = '';
            }
            localStorage.setItem('page', `${Number(page) + 1}`);
            if (typeof page === 'string') {
              this.changePage(`${Number(page) + 1}`);
            }
            this.request.getCarItems<carItems>(Number(page) + 1).then((resp) => {
              resp.forEach((item) => {
                this.car.addCars(item.name, item.color, item.id);
              });
            });
          }
        });
      } else if (btn.classList.contains('btn-prev')) {
        if (Number(localStorage.getItem('page')) !== 1) {
          if (container instanceof HTMLElement) {
            container.innerHTML = '';
          }
          localStorage.setItem('page', `${Number(page) - 1}`);
          if (typeof page === 'string') {
            this.changePage(`${Number(page) - 1}`);
          }
          this.request.getCarItems<carItems>(Number(page) - 1).then((response) => {
            response.forEach((item) => {
              this.car.addCars(item.name, item.color, item.id);
            });
          });
        }
      }
    }
  }

  private addListenerBtns(): void {
    const nextBtn = document.querySelector('.btn-next');
    const prevBtn = document.querySelector('.btn-prev');

    if (nextBtn instanceof HTMLButtonElement) {
      this.controller.listenerElement(nextBtn, (event) => this.changePageEvent(event));
    }

    if (prevBtn instanceof HTMLButtonElement) {
      this.controller.listenerElement(prevBtn, (event) => this.changePageEvent(event));
    }
  }
}
