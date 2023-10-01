import Car from '../Car/car';
import {
  btnCreate,
  btnGenerateCars,
  btnRace,
  btnReset,
  btnToGarage, btnToWinners, btnUpdate, divFormInputCreate, divFormInputUpdate,
  divFormRace,
  inputColor,
  inputCreate, inputUpdate, sectionNavBtn, sectionNavigation, updateColor,
} from '../Components/navigationComponents';
import Controller from '../Controller/controller';
import ElementCreator from '../htmlcreater/htmlcreater';
import Winnercar from '../winnercar/winnercar';
import './resources.scss';

export default class Navigation {
  private controller: Controller;

  private car: Car;

  private winnerCar: Winnercar;

  constructor() {
    this.createNav();
    this.controller = new Controller();
    this.addListenerBtnCreate();
    this.car = new Car();
    this.addListenerBtnCreate100Cars();
    this.addListenerBtnRace();
    this.addListenerBtnReset();
    this.addListenerBtnToGarage();
    this.addListenerBtnToWinners();
    this.winnerCar = new Winnercar();
  }

  private createNav(): void {
    const sectionNav = new ElementCreator(sectionNavigation);
    const sectionBtn = new ElementCreator(sectionNavBtn);
    const btnGarage = new ElementCreator(btnToGarage);
    const btnWinners = new ElementCreator(btnToWinners);
    const formNewCar = new ElementCreator(divFormInputCreate);
    const inputNewCar = new ElementCreator(inputCreate);
    const inputCarColor = new ElementCreator(inputColor);
    const updateCarColor = new ElementCreator(updateColor);
    const btnNewCar = new ElementCreator(btnCreate);
    const formUpdate = new ElementCreator(divFormInputUpdate);
    const inputUpdateCar = new ElementCreator(inputUpdate);
    const btnUpdateCar = new ElementCreator(btnUpdate);
    const formRace = new ElementCreator(divFormRace);
    const btnNewRace = new ElementCreator(btnRace);
    const btnResetRace = new ElementCreator(btnReset);
    const btnGenerate = new ElementCreator(btnGenerateCars);

    formNewCar.addInnerElement(inputNewCar);
    formNewCar.addInnerElement(inputCarColor);
    formNewCar.addInnerElement(btnNewCar);

    inputUpdateCar.element.setAttribute('disabled', 'disabled');
    updateCarColor.element.setAttribute('disabled', 'disabled');
    btnUpdateCar.element.setAttribute('disabled', 'disabled');
    formUpdate.addInnerElement(inputUpdateCar);
    formUpdate.addInnerElement(updateCarColor);
    formUpdate.addInnerElement(btnUpdateCar);

    formRace.addInnerElement(btnNewRace);
    formRace.addInnerElement(btnResetRace);
    formRace.addInnerElement(btnGenerate);

    sectionBtn.addInnerElement(btnGarage);
    sectionBtn.addInnerElement(btnWinners.element);
    sectionNav.addInnerElement(formNewCar.element);
    sectionNav.addInnerElement(formUpdate.element);
    sectionNav.addInnerElement(formRace.element);

    document.body.appendChild(sectionBtn.element);
    document.body.appendChild(sectionNav.element);
  }

  private addListenerBtnCreate(): void {
    const btn = document.querySelector('.btn-create') as HTMLButtonElement;
    if (btn instanceof HTMLButtonElement) {
      this.controller.listenerElement(btn, (event) => this.car.carEventCreate(event));
    }
  }

  private addListenerBtnCreate100Cars(): void {
    const btn = document.querySelector('.btn-generate') as HTMLButtonElement;
    if (btn instanceof HTMLButtonElement) {
      this.controller.listenerElement(btn, (event) => this.car.carEventCreate100Cars(event));
    }
  }

  private addListenerBtnRace(): void {
    const btn = document.querySelector('.btn-race') as HTMLButtonElement;
    if (btn instanceof HTMLButtonElement) {
      this.controller.listenerElement(btn, () => this.car.race());
    }
  }

  private addListenerBtnReset(): void {
    const btn = document.querySelector('.btn-reset') as HTMLButtonElement;
    if (btn instanceof HTMLButtonElement) {
      this.controller.listenerElement(btn, () => this.car.resetAllCar());
    }
  }

  private addListenerBtnToGarage(): void {
    const btn = document.querySelector('.btn-garage') as HTMLButtonElement;
    if (btn instanceof HTMLButtonElement) {
      this.controller.listenerElement(btn, () => this.garageDisplay());
    }
  }

  private addListenerBtnToWinners(): void {
    const btn = document.querySelector('.btn-winners') as HTMLButtonElement;
    if (btn instanceof HTMLButtonElement) {
      this.controller.listenerElement(btn, () => this.winnersDisplay());
    }
  }

  private garageDisplay(): void {
    const section = document.querySelector('.section-garage') as HTMLElement;
    const sectionNav = document.querySelector('.section-nav') as HTMLElement;
    const sectionWinn = document.querySelector('.section-winner') as HTMLElement;
    if (section instanceof HTMLElement && sectionNav instanceof HTMLElement
      && sectionWinn instanceof HTMLElement) {
      section.classList.remove('hidden');
      sectionNav.classList.remove('hidden');
      sectionWinn.classList.add('hidden');
      this.car.resetAllCar();
    }
  }

  private winnersDisplay(): void {
    const section = document.querySelector('.section-garage') as HTMLElement;
    const sectionNav = document.querySelector('.section-nav') as HTMLElement;
    const sectionWinn = document.querySelector('.section-winner') as HTMLElement;
    if (section instanceof HTMLElement && sectionNav instanceof HTMLElement
      && sectionWinn instanceof HTMLElement) {
      section.classList.add('hidden');
      sectionNav.classList.add('hidden');
      this.winnerCar.addItems();
      sectionWinn.classList.remove('hidden');
    }
  }
}
