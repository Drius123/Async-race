import Car from '../Car/car';
import Footer from '../Footer/footer';
import Garage from '../Garage/garage';
import Navigation from '../Navigation/navigation';
import Request from '../Request/request';
import { carItems } from '../types';
import Winners from '../winners/winners';

export default class App {
  private navigation: Navigation;

  private garage: Garage;

  private footer: Footer;

  private request: Request;

  private car: Car;

  private winners: Winners;

  constructor() {
    this.navigation = new Navigation();
    this.garage = new Garage();
    this.winners = new Winners();
    this.footer = new Footer();
    this.request = new Request();
    this.car = new Car();
  }

  public start():void {
    if (localStorage.getItem('page')) {
      const page = localStorage.getItem('page');
      if (typeof page === 'string') {
        this.garage.changePage(page);
      }

      this.car.changeCarNum();

      this.request.getCarItems<carItems>(Number(page)).then((response) => {
        response.forEach((item) => {
          this.car.addCars(item.name, item.color, item.id);
        });
      });
    } else {
      localStorage.setItem('page', '1');
      localStorage.setItem('winners', '1');
      this.car.changeCarNum();
      this.garage.changePage('1');
      this.request.getCarItems<carItems>(1).then((response) => {
        response.forEach((item) => {
          this.car.addCars(item.name, item.color, item.id);
        });
      });
    }
  }
}
