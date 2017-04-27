import { CursoRefinadoAngularPage } from './app.po';

describe('curso-refinado-angular App', () => {
  let page: CursoRefinadoAngularPage;

  beforeEach(() => {
    page = new CursoRefinadoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
