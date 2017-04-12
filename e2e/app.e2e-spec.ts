import { UnecessarytheoriesPage } from './app.po';

describe('unecessarytheories App', () => {
  let page: UnecessarytheoriesPage;

  beforeEach(() => {
    page = new UnecessarytheoriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
