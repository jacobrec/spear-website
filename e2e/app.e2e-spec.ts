import { SpearWebsitePage } from './app.po';

describe('spear-website App', () => {
  let page: SpearWebsitePage;

  beforeEach(() => {
    page = new SpearWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
