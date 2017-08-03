import { CursoAngularCliPage } from './app.po';

describe('curso-angular-cli App', () => {
  let page: CursoAngularCliPage;

  beforeEach(() => {
    page = new CursoAngularCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
