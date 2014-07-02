//Humans collection
class Humans { // this is a subject
  constructor () {
    this.map = new Map();
    this.observers = [];
  }

  addObserver (observer) {
    this.observers.push(observer);
  }

  notifyObservers (context) {
    this.observers.forEach(function(observer) {
      observer.update(context)
    })

  }

  add (human) {
    this.map.set(human.id, human);
    this.notifyObservers({action:"add", human: human});
  }

  fetchBy (key) {
    return this.map.get(key);
  }

  fetchAll () {
    return this.map;
  }

  asList () {
    var humansList = [];
    this.map.forEach((human, key) => {
      humansList.push({id:key, human: human});
    });
    return humansList;
  }

}

export default Humans
