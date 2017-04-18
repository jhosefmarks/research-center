import { CliLibsExternasPage } from './app.po';

describe('cli-libs-externas App', () => {
  let page: CliLibsExternasPage;

  beforeEach(() => {
    page = new CliLibsExternasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
