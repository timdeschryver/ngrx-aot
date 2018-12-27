import { browser, ExpectedConditions } from 'protractor';
import { ContactUs } from './features/contact-us.po';
import { isLinkToNewTab } from './utils/is-link-to-new-tab';

describe('As a user, I can find help through the Contact Us link', () => {
  let contactUs: ContactUs;

  beforeEach(() => {
    contactUs = new ContactUs();
  });

  it('Should display a Contact Us button that opens a modal with links to help pages', async () => {
    await browser.get('/online/login');

    // The contact us button is visible on the page
    expect(await contactUs.headerBtn.isDisplayed()).toBe(true);

    // Once the contact us button is clicked, the user is presented with four links
    await contactUs.headerBtn.click();
    expect(await contactUs.memberServicesLink.isDisplayed()).toBe(true);
    expect(await contactUs.locateBranchOrAtmLink.isDisplayed()).toBe(true);
    expect(await contactUs.emailUsLink.isDisplayed()).toBe(true);
    expect(await contactUs.mailUsLink.isDisplayed()).toBe(true);

    // Each link points to an associated help page which opens in a new tab
    expect(await isLinkToNewTab(contactUs.emailUsLink, '/contact-us#email')).toBe(true);
    expect(await isLinkToNewTab(contactUs.mailUsLink, '/contact-us#mail')).toBe(true);
    expect(await isLinkToNewTab(contactUs.memberServicesLink, '/contact-us#call')).toBe(true);
    expect(await isLinkToNewTab(contactUs.locateBranchOrAtmLink, '/BranchMaps/')).toBe(true);
  });
});
