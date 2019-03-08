import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { PageUserLoginComponent } from 'src/app/user/pages/page-user-login/page-user-login.component';

describe('workspace-project App', () => {
  let page: PageUserLoginComponent;

  beforeEach(() => {
  let page: PageUserLoginComponent;
  page = new AppPage();
  });

  it('should display success login after login', () => {
    page.navigateTo();
    page.emailField().sendKeys('a@wp.pl');
    page.passwordField().sendKeys('a');
    page.submit().click();
    expect(page.getPageUrl()).toContain('/user/profile');
});



});
