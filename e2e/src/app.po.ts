import { browser, by, element } from 'protractor';
import { elementEnd } from '@angular/core/src/render3';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getPageUrl(){
    return browser.getCurrentUrl();
  }

  contactButton(){
    return element(by.xpath('/html/body/app-root/app-menu/nav/ul[1]/li[3]/a')); 
  }
}
