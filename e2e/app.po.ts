export class PostaClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('posta-client-app h1')).getText();
  }
}
