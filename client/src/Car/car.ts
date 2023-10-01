import {
  btnACar,
  btnBCar,
  btnRemoveCar, btnSelectCar, carFirstNames, carName,
  carNav, carSecondNames, divCar, divEngine, flag, road,
} from '../Components/carComponents';
import Controller from '../Controller/controller';
import Request from '../Request/request';
import ElementCreator from '../htmlcreater/htmlcreater';
import {
  car, carItems, promisArr, respArr, responseEngine,
} from '../types';
import './resources.scss';

export default class Car {
  private request: Request;

  private carIMG: string;

  private controller: Controller;

  constructor() {
    this.request = new Request();
    this.carIMG = require('../assets/car.svg');
    this.controller = new Controller();
  }

  public addCars(title: string, color: string, id: number): void {
    const div = new ElementCreator(divCar);
    const nav = new ElementCreator(carNav);
    const btnSelect = new ElementCreator(btnSelectCar);
    const btnRemove = new ElementCreator(btnRemoveCar);
    const name = new ElementCreator(carName);
    const engine = new ElementCreator(divEngine);
    const btnA = new ElementCreator(btnACar);
    const btnB = new ElementCreator(btnBCar);
    const roadCar = new ElementCreator(road);
    const flagFinish = new ElementCreator(flag);

    this.controller.listenerElement(btnSelect.element, (event: Event) => {
      this.selectEvent(event);
    });

    nav.addInnerElement(btnSelect);

    this.controller.listenerElement(btnRemove.element, (event: Event) => {
      this.removeEvent(event);
    });
    nav.addInnerElement(btnRemove);
    name.element.textContent = title;
    nav.addInnerElement(name);

    div.addInnerElement(nav);

    btnA.element.classList.add('active');
    this.controller.listenerElement(btnA.element, (event: Event) => {
      this.carStartEngine(event);
    });
    engine.addInnerElement(btnA);
    this.controller.listenerElement(btnB.element, (event: Event) => {
      this.carStopEngine(event);
    });
    engine.addInnerElement(btnB);
    div.addInnerElement(engine);

    roadCar.element.innerHTML = this.carIMG;
    const svg = roadCar.element.firstChild?.firstChild?.firstChild as SVGElement;
    if (svg instanceof SVGElement) {
      svg.style.fill = color;
    }

    div.addInnerElement(roadCar);
    const flagImg = flagFinish.element as HTMLImageElement;
    if (flagImg instanceof HTMLImageElement) {
      flagImg.src = '../assets/finish.png';
      flagImg.alt = 'flag';
    }
    div.addInnerElement(flagImg);
    div.element.dataset.number = `${id}`;

    const container = document.querySelector('.container') as HTMLElement;
    if (container instanceof HTMLElement) {
      container.appendChild(div.element);
    }
  }

  public changeCarNum(): void {
    const carNum = document.querySelector('.car-numbers') as HTMLElement;
    if (carNum instanceof HTMLElement) {
      this.request.getAllCarItems().then((response) => {
        carNum.textContent = `Garage(${response})`;
      });
    }
  }

  public addItems(): void {
    const page = localStorage.getItem('page');
    const container = document.querySelector('.container') as HTMLElement;
    if (container instanceof HTMLElement) {
      if (!container.children[6]) {
        container.textContent = '';
        this.request.getCarItems<carItems>(Number(page)).then((resp) => {
          resp.forEach((item) => {
            this.addCars(item.name, item.color, item.id);
          });
        });
      }
    }
  }

  private removeItem(id: number): void {
    this.request.removeCarItem(id);
    const page = localStorage.getItem('page');
    const container = document.querySelector('.container') as HTMLElement;
    if (container instanceof HTMLElement) {
      container.textContent = '';
      this.request.getCarItems<carItems>(Number(page)).then((resp) => {
        resp.forEach((item) => {
          this.addCars(item.name, item.color, item.id);
        });
      });
      this.changeCarNum();
    }
  }

  private updateItem(id: number): void {
    const name = document.querySelector('.input-update') as HTMLInputElement;
    const color = document.querySelector('.update-color') as HTMLInputElement;
    const btnUpd = document.querySelector('.btn-update') as HTMLButtonElement;
    if (name instanceof HTMLInputElement && color instanceof HTMLInputElement) {
      const response = this.request.changeCarItem(id, name.value, color.value).then(() => {
        name.value = '';
        color.value = 'rgb(0, 0, 0)';
      });
      response.then(() => {
        const page = localStorage.getItem('page');
        const container = document.querySelector('.container') as HTMLElement;
        if (container instanceof HTMLElement) {
          container.textContent = '';
          this.request.getCarItems<carItems>(Number(page)).then((resp) => {
            resp.forEach((item) => {
              this.addCars(item.name, item.color, item.id);
            });
          });
        }
      });
      if (btnUpd instanceof HTMLButtonElement) {
        btnUpd.setAttribute('disabled', 'disabled');
      }
      name.setAttribute('disabled', 'disabled');
      color.setAttribute('disabled', 'disabled');
    }
  }

  public carEventCreate(event: Event): void {
    if (event) {
      const name = document.querySelector('.input-create') as HTMLInputElement;
      const color = document.querySelector('.input-color') as HTMLInputElement;
      if (name instanceof HTMLInputElement || color instanceof HTMLInputElement) {
        const text = name.value;
        const colorCar = color.value;
        name.value = '';

        this.request.createCarItem<car>(text, colorCar);
      }
    }
    this.addItems();
    this.changeCarNum();
  }

  public carEventCreate100Cars(event: Event): void {
    if (event) {
      for (let i = 0; i < 100; i += 1) {
        const text = `${carFirstNames[Math.round(Math.random() * (carFirstNames.length - 1))]} ${carSecondNames[Math.round(Math.random() * (carSecondNames.length - 1))]}`;
        const color = `#${(`${Math.random().toString(16)}000000`).substring(2, 8).toUpperCase()}`;
        this.request.createCarItem<car>(text, color);
      }
    }
    this.addItems();
    this.changeCarNum();
  }

  public removeEvent(event: Event) {
    const btn = event.target as HTMLButtonElement;
    if (btn instanceof HTMLButtonElement) {
      const secondparent = btn.parentNode as HTMLElement;
      if (secondparent instanceof HTMLElement) {
        const parent = secondparent.parentNode as HTMLElement;
        if (parent instanceof HTMLElement) {
          this.removeItem(Number(parent.getAttribute('data-number')));
        }
      }
    }
  }

  public selectEvent(event: Event) {
    const btn = event.target as HTMLButtonElement;
    const btnUpd = document.querySelector('.btn-update') as HTMLButtonElement;
    const name = document.querySelector('.input-update') as HTMLInputElement;
    const color = document.querySelector('.update-color') as HTMLInputElement;
    if (btn instanceof HTMLButtonElement) {
      const secondparent = btn.parentNode as HTMLElement;
      if (secondparent instanceof HTMLElement) {
        const parent = secondparent.parentNode as HTMLElement;
        if (parent instanceof HTMLElement) {
          if (btnUpd instanceof HTMLButtonElement) {
            if (name instanceof HTMLInputElement && color instanceof HTMLInputElement) {
              name.removeAttribute('disabled');
              color.removeAttribute('disabled');
              btnUpd.removeAttribute('disabled');
              this.controller.listenerElement(btnUpd, () => {
                this.updateItem(Number(parent.getAttribute('data-number')));
              });
            }
          }
        }
      }
    }
  }

  private carStartEngine(event: Event): void {
    const btn = event.target as HTMLButtonElement;
    if (btn instanceof HTMLButtonElement) {
      btn.classList.remove('active');
      const secondparent = btn.parentNode as HTMLElement;
      if (secondparent instanceof HTMLElement) {
        const btnB = secondparent.children[1] as HTMLButtonElement;
        if (btnB instanceof HTMLButtonElement) {
          btnB.classList.add('active');
        }
        const parent = secondparent.parentNode as HTMLElement;
        if (parent instanceof HTMLElement) {
          this.request.driveCar<responseEngine>(Number(parent.getAttribute('data-number')), 'started').then((response: responseEngine) => {
            const roadForCar = parent.children[2] as HTMLElement;
            if (roadForCar instanceof HTMLElement) {
              roadForCar.style.animationDuration = `${response.distance / response.velocity / 1000}s`;
              roadForCar.classList.add('animation');
              this.request.driveCar(Number(parent.getAttribute('data-number')), 'drive').catch(() => {
                roadForCar.classList.add('animation-paused');
              });
            }
          });
        }
      }
    }
  }

  private carStopEngine(event: Event): void {
    const btn = event.target as HTMLButtonElement;
    if (btn instanceof HTMLButtonElement) {
      btn.classList.remove('active');
      const secondparent = btn.parentNode as HTMLElement;
      if (secondparent instanceof HTMLElement) {
        const btnA = secondparent.children[0] as HTMLButtonElement;
        if (btnA instanceof HTMLButtonElement) {
          btnA.classList.add('active');
        }
        const parent = secondparent.parentNode as HTMLElement;
        if (parent instanceof HTMLElement) {
          this.request.driveCar<responseEngine>(Number(parent.getAttribute('data-number')), 'stopped').then((response: responseEngine) => {
            const roadForCar = parent.children[2] as HTMLElement;
            if (roadForCar instanceof HTMLElement) {
              roadForCar.style.animationDuration = `${response.distance / response.velocity / 1000}s`;
              roadForCar.classList.remove('animation');
              roadForCar.classList.remove('animation-paused');
            }
          });
        }
      }
    }
  }

  public race(): void {
    const page = localStorage.getItem('page');
    this.request.getCarItems<carItems>(Number(page)).then((resp: carItems) => {
      const idArray = resp.map((item) => item.id);
      this.raceAllCar(idArray);
    });
  }

  private raceAllCar(array: number[]): void {
    const promiseArr: promisArr = [];
    array.forEach((item) => {
      const resForCar: number[] = [];
      const promise = new Promise((resolve) => {
        this.request.driveCar<responseEngine>(item, 'started').then((response: responseEngine) => {
          const roadContainer = document.querySelector(`.car-container[data-number="${item}"]`) as HTMLElement;
          if (roadContainer instanceof HTMLElement) {
            const roadForCar = roadContainer.children[2] as HTMLElement;
            if (roadForCar instanceof HTMLElement) {
              roadForCar.style.animationDuration = `${response.distance / response.velocity / 1000}s`;
              roadForCar.classList.add('animation');
              this.request.driveCar(item, 'drive').catch(() => {
                roadForCar.classList.add('animation-paused');
                resForCar.push(0);
              }).then(() => {
                resForCar.push(item);
                resForCar.push(response.distance / response.velocity / 1000);
                resolve(resForCar);
              });
            }
          }
        });
      });
      promiseArr.push(promise);
    });
    Promise.all(promiseArr).then((resp) => {
      const res = resp as respArr;
      this.createWinner(res);
    });
  }

  public resetAllCar(): void {
    const page = localStorage.getItem('page');
    this.request.getCarItems<carItems>(Number(page)).then((resp: carItems) => {
      const idArray = resp.map((item) => item.id);
      idArray.forEach((item) => {
        const roadContainer = document.querySelector(`.car-container[data-number="${item}"]`) as HTMLElement;
        if (roadContainer instanceof HTMLElement) {
          const roadForCar = roadContainer.children[2] as HTMLElement;
          if (roadForCar instanceof HTMLElement) {
            roadForCar.classList.remove('animation');
            roadForCar.classList.remove('animation-paused');
          }
        }
      });
    });
  }

  private createWinner(arr: respArr): void {
    const arrFiltred = arr.map((item) => (item[0] !== 0
      ? item : null)).filter((x) => x !== null) as number[][];
    const winner = arrFiltred.sort((a, b) => a[1] - b[1])[0];
    const winnerId = winner[0];
    const winnerTime = winner[1].toFixed(2);
    this.request.getCarItem<carItems>(winnerId).then((resp) => {
      this.request.createCarWinnerItem(resp[0].name, resp[0].color, Number(winnerTime), 1);
    });
  }
}
