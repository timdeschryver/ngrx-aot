import { browser } from 'protractor';
import { Login } from './features/login.po';
import { SecurityQuestion } from './features/security-question.po';

describe('As a user, I can login to the View Accounts page', () => {
  let login: Login;
  let securityQuestion: SecurityQuestion;

  beforeEach(() => {
    login = new Login();
    securityQuestion = new SecurityQuestion();
  });

  it('Should prompt the user for login details and a security question before taking them to View Accounts', async () => {
    await browser.get('/online/login');

    await login.loginAs({
      userName: 'desktop1',
      password: 'Tuesday123',
    });

    await securityQuestion.answerWith('Tuesday123');

    expect(await browser.getCurrentUrl()).toContain('/account/summary');
  });
});
