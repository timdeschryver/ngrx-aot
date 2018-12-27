import { element, by } from 'protractor';

export class ContactUs {
  headerBtn = element(by.qa('contact-us-open'));
  memberServicesLink = element(by.qa('contact-us-call-member-services'));
  locateBranchOrAtmLink = element(by.qa('contact-us-locate-branch-or-atm'));
  emailUsLink = element(by.qa('contact-us-email'));
  mailUsLink = element(by.qa('contact-us-snail-mail'));
}
