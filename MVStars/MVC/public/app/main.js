
import HumansCollection from './models/humans';
import HumansView from './views/humansView';
import HumansController from './controllers/humansController';

class Application {

  constructor () {

    console.log("=== TADA ===");

    var humansColl = new HumansCollection();
    var humansCtrl = new HumansController(humansColl);
    var humansView = new HumansView(humansColl, humansCtrl);
    humansCtrl.initializeData();
  }

}


$(() => {
  window.app = new Application();
});




