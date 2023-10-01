import {
  footerLink, footerLogo, footerSection, img,
} from '../Components/footerComponents';
import ElementCreator from '../htmlcreater/htmlcreater';
import './resources.scss';

export default class Footer {
  constructor() {
    this.createFooter();
  }

  private createFooter(): void {
    const footer = new ElementCreator(footerSection);
    const logo = new ElementCreator(footerLogo);
    const link = new ElementCreator(footerLink);
    const image = new ElementCreator(img);

    const footerImg = image.element as HTMLImageElement;
    if (footerImg instanceof HTMLImageElement) {
      footerImg.alt = 'footer-logo';
      footerImg.src = './assets/rs_school.svg';
    }
    const linkElement = link.element as HTMLLinkElement;
    linkElement.href = 'https://github.com/Drius123';
    linkElement.textContent = '©Drius123, 2023';

    const logotype = logo.element as HTMLLinkElement;
    logotype.href = 'https://rs.school/';
    logo.addInnerElement(footerImg);
    footer.addInnerElement(logo);
    footer.addInnerElement(linkElement);

    document.body.appendChild(footer.element);
  }
}
