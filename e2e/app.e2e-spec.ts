import { CodetestPage } from './app.po';

describe('codetest App', () => {
  let page: CodetestPage;

  beforeEach(() => {
    page = new CodetestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
