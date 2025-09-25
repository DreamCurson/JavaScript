class Popup {
  constructor(conteneurHTML, message, buttonText = "OK") {
    this._conteneurHTML = conteneurHTML;
    this._elementHTML = null;

    this._message = message;
    this._buttonText = buttonText;

    this.injecterHTML();
  }

  set message(nouveauMessage) {
    if (nouveauMessage === "" || nouveauMessage === "Patate") {
      console.warn("Attention message invalide");
      return;
    }
    this._message = nouveauMessage.toLowerCase();

    if (this._elementHTML) {
      this._elementHTML.querySelector("h2").textContent = this._message;
    }
  }

  get message() {
    return this._message;
  }

  set buttonText(nouveauTexte) {
    if (!nouveauTexte || typeof nouveauTexte !== "string") {
      console.warn("Texte du bouton invalide");
      return;
    }

    this._buttonText = nouveauTexte;

    if (this._elementHTML) {
      this._elementHTML.querySelector("button").textContent = this._buttonText;
    }
  }

  get buttonText() {
    return this._buttonText;
  }

  cacher() {
    if (this._elementHTML) {
      this._elementHTML.remove();
      this._elementHTML = null;
    }
  }

  injecterHTML() {
    const gabarit = `
    <div class="popup" popup-conteneur>
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

export default Popup;
