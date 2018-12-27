import { browser, element, by } from 'protractor';

export class SecurityQuestion {
  securityQuestionInput = element(by.qa('security-q-input'));
  securityQuestionSubmit = element(by.qa('security-q-submit'));

  async answerWith(answer: string) {
    await this.securityQuestionInput.sendKeys(answer);
    return this.securityQuestionSubmit.click();
  }
}
