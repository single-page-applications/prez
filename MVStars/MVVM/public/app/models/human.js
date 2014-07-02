
class Human {
  constructor (args) {
    this.id = args.id;
    this.firstName = args.firstName;
    this.lastName = args.lastName;

    //this.observers = [];
  }

  /*
  addObserver (observer) {
    this.observers.push(observer);
  }

  notifyObservers () {
    this.observers.forEach(function(observer) {
      observer.update(this)
    }.bind(this))
  }
  */

}

export default Human;