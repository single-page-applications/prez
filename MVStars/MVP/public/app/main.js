
import HumansCollection from './models/humans';
import HumansView from './views/humansView';
import HumansPresenter from './presenters/humansPresenter';

class Application {

  constructor () {

    var humansColl = new HumansCollection();
    var humansView = new HumansView();
    var humansPres = new HumansPresenter(humansColl, humansView);

    humansPres.initializeData();

  }

}


$(() => {
  window.app = new Application();
});




