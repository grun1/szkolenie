import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { UserRegistrationPage } from './user-registratione-form.po';

describe('User: Check login after registion', () => {
  let page: UserRegistrationPage;

  beforeEach(() => {
    page = new UserRegistrationPage();
  });

  it('should display registration page', () => {
    page.navigateTo();
    page.emailForm().sendKeys("a@wp.pl");
    page.passwordForm().sendKeys("a");
    page.passwordConfirmForm().sendKeys("a");
    page.personNameForm().sendKeys("a");
    page.personSurnameForm().sendKeys("a");
    page.submitForm().click();
    expect(page.result().resultMessage().getText()).toContain("Dziękujemy");

});



});
