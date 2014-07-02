import HumansCollection from './models/humans';
import HumanFormViewModel from './viewModels/humanFormViewModel';
import HumansListViewModel from './viewModels/humansListViewModel';

class Application {

  constructor () {

    var humansColl = new HumansCollection();
    var humanFormViewModel = new HumanFormViewModel(humansColl);
    var humansListViewModel = new HumansListViewModel(humansColl);

    humansListViewModel.initializeData();

  }

}


$(() => {
  window.app = new Application();
});




