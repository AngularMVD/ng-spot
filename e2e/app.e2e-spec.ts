import { AngularWorkshopPage } from './app.po';

describe('angular-workshop App', () => {
  let page: AngularWorkshopPage;

  beforeEach(() => {
    page = new AngularWorkshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
