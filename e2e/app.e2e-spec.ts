import { RestappwebPage } from './app.po';

describe('restappweb App', function() {
  let page: RestappwebPage;

  beforeEach(() => {
    page = new RestappwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
