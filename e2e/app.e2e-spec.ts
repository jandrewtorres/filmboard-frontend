import { Fb3Page } from './app.po';

describe('fb3 App', function() {
  let page: Fb3Page;

  beforeEach(() => {
    page = new Fb3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
