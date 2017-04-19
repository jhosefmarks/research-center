import { RoutesPage } from './app.po';

describe('routes App', () => {
  let page: RoutesPage;

  beforeEach(() => {
    page = new RoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
