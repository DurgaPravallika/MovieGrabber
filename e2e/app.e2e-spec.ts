import { MoviegrabberPage } from './app.po';

describe('moviegrabber App', function() {
  let page: MoviegrabberPage;

  beforeEach(() => {
    page = new MoviegrabberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
