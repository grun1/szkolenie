import { browser, by, element } from 'protractor';
import { elementEnd } from '@angular/core/src/render3';

export class UserRegistrationPage {
    result(): any {
        throw new Error("Method not implemented.");
    }
  navigateTo() {
    return browser.get('/#/user/register');
  }

  getPageUrl(){
    return browser.getCurrentUrl();
  }

  emailForm(){
    return element(by.xpath('/html/body/app-root/app-page-user-register/form/div[1]/input')).getText();
  }

  passwordForm(){
    return element(by.xpath('/html/body/app-root/app-page-user-register/form/div[2]/input')).getText();
  }

  passwordConfirmForm(){
    return element(by.xpath('/html/body/app-root/app-page-user-register/form/div[3]/input')).getText();
  }

  personNameForm(){
    return element(by.xpath('/html/body/app-root/app-page-user-register/form/div[4]/input')).getText();
  }

  personSurnameForm(){
    return element(by.xpath('/html/body/app-root/app-page-user-register/form/div[5]/input')).getText();
  }

  submitForm(){
    return element(by.xpath('/html/body/app-root/app-page-user-register/form/button')).getText();
  }

  resultMessage(){
      return  "Dziękujemy";
  }

}
