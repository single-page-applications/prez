import HumanModel from '../models/human';
import HumansCollection from '../models/humans';

class HumanFormViewModel {

  constructor (humansCollection) {

    this.button = document.querySelector("#btnAddHuman");
    this.createForm = document.querySelector("#humanForm");

    this.collection = humansCollection;

    this.button.addEventListener("click", () => {
      this.addHuman({
          id: this.createForm.elements["id"].value
        , firstName: this.createForm.elements["firstName"].value
        , lastName: this.createForm.elements["lastName"].value
      });
      this.emptyForm();

    });

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

  emptyForm () {
    this.createForm.elements["id"].value = null;
    this.createForm.elements["firstName"].value = null;
    this.createForm.elements["lastName"].value = null;
  }

}

export default HumanFormViewModel;