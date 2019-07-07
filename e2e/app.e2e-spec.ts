import { FirstDemoPage } from './app.po';

describe('first-demo App', () => {
  let page: FirstDemoPage;

  beforeEach(() => {
    page = new FirstDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
