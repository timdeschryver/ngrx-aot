import { browser, element, by } from 'protractor';

interface User {
  password: string;
  userName: string;
}

export class Login {
  userNameInput = element(by.qa('login-username-input'));
  passwordInput = element(by.qa('login-password-input'));
  loginButton = element(by.qa('login-submit-button'));

  async loginAs(user: User) {
    await this.userNameInput.sendKeys(user.userName);
    await this.passwordInput.sendKeys(user.password);
    return this.loginButton.click();
  }
}
