import { TusemeUiPage } from './app.po';

describe('tuseme-ui App', () => {
  let page: TusemeUiPage;

  beforeEach(() => {
    page = new TusemeUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
