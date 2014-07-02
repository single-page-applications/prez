import HumanModel from '../models/human';
import HumansCollection from '../models/humans';

class HumansListViewModel {

  constructor (humansCollection) {

    this.list = document.querySelector("#humansList");

    this.collection = humansCollection;
    humansCollection.addObserver(this);

  }

  render () {
    this.list.innerHTML = this.collection.asList().reduce((previous, current) => {
      return previous +
        `<li><h2>${current.id} : ${current.human.firstName} ${current.human.lastName}</h2></li>`;
    }, "<ul>") + "</ul>";
  }

  update () {
    this.render()
  }


  initializeData () {
    var john = new HumanModel({id: '001', firstName: 'John', lastName: 'Doe'});
    var jane = new HumanModel({id: '002', firstName: 'Jane', lastName: 'Doe'});

    this.collection.add(john);
    this.collection.add(jane);
  }
}

export default HumansListViewModel;

