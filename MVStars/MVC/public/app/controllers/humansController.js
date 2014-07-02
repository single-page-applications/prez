import HumanModel from '../models/human';
import HumansCollection from '../models/humans';

class HumansController {

  constructor (humansCollection) {
    this.collection = humansCollection;
  }

  initializeData () {
    var john = new HumanModel({id: '001', firstName: 'John', lastName: 'Doe'});
    var jane = new HumanModel({id: '002', firstName: 'Jane', lastName: 'Doe'});

    this.collection.add(john);
    this.collection.add(jane);
  }

  handleEvent (eventName, data) {
    if (eventName == "clickAddButton") {
      this.add(data)
    }
  }

  add (data) {
    this.collection.add(
      new HumanModel({
          id: data.id
        , firstName: data.firstName
        , lastName: data.lastName
      })
    );
  }

}

export default HumansController;