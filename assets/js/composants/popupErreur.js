import Popup from "./popup.js";

class PopupErreur extends Popup {
  constructor(conteneurHTML, message, buttonText = "Fermer") {
    super(conteneurHTML, message, buttonText);

    this.debug();
  }

  debug() {
    console.error("Erreur :", this._message);
  }

  injecterHTML() {
    const gabarit = `
      <div class="popup erreur" popup-conteneur>
        <h2>${this._message}</h2>
        <button>${this._buttonText}</button>
      </div>
    `;

    this._conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
    this._elementHTML = this._conteneurHTML.lastElementChild;

    const button = this._elementHTML.querySelector("button");
    button.addEventListener("click", this.cacher.bind(this));
  }
}

export default PopupErreur;
