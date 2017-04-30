import { Angular4RouterDemoPage } from './app.po';

describe('angular4-router-demo App', () => {
  let page: Angular4RouterDemoPage;

  beforeEach(() => {
    page = new Angular4RouterDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
