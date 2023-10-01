import {
  carBestTimeTable,
  carNameTable,
  carNameWinsTable,
  carTable,
  containerTable, h1Winner, h2Winner,
  numberTable, sectionWinner, tableCap,
} from '../Components/winnersComponents';
import ElementCreator from '../htmlcreater/htmlcreater';
import './resources.scss';

export default class Winners {
  constructor() {
    this.createWinner();
  }

  private createWinner(): void {
    const section = new ElementCreator(sectionWinner);
    const h1 = new ElementCreator(h1Winner);
    const h2 = new ElementCreator(h2Winner);
    const table = new ElementCreator(containerTable);

    section.addInnerElement(h1);
    section.addInnerElement(h2);
    table.addInnerElement(Winners.createCap());
    section.addInnerElement(table);

    document.body.appendChild(section.element);
  }

  public static createCap(): ElementCreator {
    const cap = new ElementCreator(tableCap);
    const number = new ElementCreator(numberTable);
    const car = new ElementCreator(carTable);
    const carName = new ElementCreator(carNameTable);
    const carNameWins = new ElementCreator(carNameWinsTable);
    const carBestTime = new ElementCreator(carBestTimeTable);
    cap.addInnerElement(number);
    cap.addInnerElement(car);
    cap.addInnerElement(carName);
    cap.addInnerElement(carNameWins);
    cap.addInnerElement(carBestTime);
    return cap;
  }
}
