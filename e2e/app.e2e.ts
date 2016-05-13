import { PostaClientPage } from './app.po';

describe('posta-client App', function() {
  let page: PostaClientPage;

  beforeEach(() => {
    page = new PostaClientPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('posta-client works!');
  });
});
