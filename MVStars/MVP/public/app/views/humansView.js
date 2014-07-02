class HumansView { // this is an observer

  constructor () {

    this.list = document.querySelector("#humansList");
    this.button = document.querySelector("#btnAddHuman");
    //this.createForm = document.querySelector("#humanForm");
  }

  render (data) {
    this.list.innerHTML = data.reduce((previous, current) => {
      return previous +
        `<li><h2>${current.id} : ${current.human.firstName} ${current.human.lastName}</h2></li>`;
    }, "<ul>") + "</ul>";
  }

}

export default HumansView;