import HumanModel from '../models/human';
import HumansCollection from '../models/humans';
import HumansView from '../views/humansView';


class HumansPresenter { // this is an observer

  constructor (humansCollection, humansView) {

    humansCollection.addObserver(this);
    this.collection = humansCollection;

    this.view = humansView;

    this.list = document.querySelector("#humansList");
    this.createForm = document.querySelector("#humanForm");

    this.view.button.addEventListener("click", () => {

      this.addHuman({
          id: this.createForm.elements["id"].value
        , firstName: this.createForm.elements["firstName"].value
        , lastName: this.createForm.elements["lastName"].value
      });

    });

  }

  update (context) {
    this.view.render(this.collection.asList())
  }

  addHuman (data) {
    this.collection.add(
      new HumanModel({
        id: data.id
        , firstName: data.firstName
        , lastName: data.lastName
      })
    );
  }

  initializeData () {
    var john = new HumanModel({id: '001', firstName: 'John', lastName: 'Doe'});
    var jane = new HumanModel({id: '002', firstName: 'Jane', lastName: 'Doe'});

    this.collection.add(john);
    this.collection.add(jane);
  }

}

export default HumansPresenter;