import { browser } from 'protractor';

export const isLinkToNewTab = async (element, relativePath: string): Promise<boolean> => {
  const { baseUrl } = await browser.getProcessedConfig();
  const tagName = await element.getTagName();
  const target = await element.getAttribute('target');
  const href = await element.getAttribute('href');
  return tagName === 'a' && target === '_blank' && href === `${baseUrl}${relativePath}`;
};
