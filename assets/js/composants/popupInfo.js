import Popup from "./popup.js";

class PopupInfo extends Popup {
  constructor(conteneurHTML, message, buttonText = "OK") {
    super(conteneurHTML, message, buttonText);
  }

  injecterHTML() {
    const gabarit = `
      <div class="popup information" popup-conteneur>
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

export default PopupInfo;
