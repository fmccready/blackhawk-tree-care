import { BtcPage } from './app.po';

describe('btc App', () => {
  let page: BtcPage;

  beforeEach(() => {
    page = new BtcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
