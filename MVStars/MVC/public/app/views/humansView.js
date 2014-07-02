class HumansView { // this is an observer

  constructor (humansCollection, humansController) {

    humansCollection.addObserver(this);
    this.collection = humansCollection;

    this.list = document.querySelector("#humansList");
    this.button = document.querySelector("#btnAddHuman");
    this.createForm = document.querySelector("#humanForm");

    this.button.addEventListener("click", (e) => {

      humansController.handleEvent("clickAddButton", {
          id: this.createForm.elements["id"].value
        , firstName: this.createForm.elements["firstName"].value
        , lastName: this.createForm.elements["lastName"].value
      });

    })

  }

  render () {
    this.list.innerHTML = this.collection.asList().reduce((previous, current) => {
      return previous +
        `<li><h2>${current.id} : ${current.human.firstName} ${current.human.lastName}</h2></li>`;
    }, "<ul>") + "</ul>";
  }

  update (context) {
    this.render()
  }

}

export default HumansView;