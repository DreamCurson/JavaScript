class LivreModale {
  #image;
  #titre;
  #auteur;
  #editeur;
  #pages;
  #description;
  #conteneurHTML;

  constructor(
    image,
    titre,
    auteur,
    editeur,
    pages,
    description,
    conteneurHTML
  ) {
    this.#image = image;
    this.#titre = titre;
    this.#auteur = auteur;
    this.#editeur = editeur;
    this.#pages = pages;
    this.#description = description;
    this.#conteneurHTML = conteneurHTML;

    this._injecterHTML();
  }

  _injecterHTML() {
    const gabarit = `
      <img src="${this.#image}" alt="${this.#titre}" />
      <div class="livreModale__contenue">
        <div class="livreModale__btn_fermer">X</div>
        <h2 class="livreModale__titre">Titre : ${this.#titre}</h2>
        <p>Auteur : ${this.#auteur}</p>
        <p>Éditeur : ${this.#editeur}</p>
        <p>Pages : ${this.#pages}</p>
        <p>${this.#description}</p>
      </div>
    `;

    this.#conteneurHTML.innerHTML = gabarit;

    this.#conteneurHTML
      .querySelector(".livreModale__btn_fermer")
      .addEventListener("click", this.fermer.bind(this));
  }

  afficher() {
    this.#conteneurHTML.removeAttribute("id");
    document.body.classList.add("livreModale-verrou");
  }

  fermer() {
    this.#conteneurHTML.setAttribute("id", "livreModale-cache");
    document.body.classList.remove("livreModale-verrou");
  }
}

export default LivreModale;
