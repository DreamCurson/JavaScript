class Livre {
  #titre;
  #image;
  #prix;

  constructor({ titre, image, prix }) {
    this.#titre = titre;
    this.#image = image;
    this.#prix = prix;
  }

  #injecterHTML() {
    return `
      <div class="listeLivre__livre">
        <img src="${this.#image}" alt="${
      this.#titre
    }" class="ListeLivre__img" />
        <h2>${this.#titre}</h2>
        <div class="listeLivre__prix_bouton">
          <p>${this.#prix} $</p>
          <button class="Listelivre__bouton">Ajouter</button>
        </div>
      </div>
    `;
  }

  _afficherLivre(livres) {
    const htmlSelector = document.querySelector("[liste-livre]");
    htmlSelector.innerHTML = "";

    livres.forEach((livreData) => {
      const livre = new Livre(livreData);
      htmlSelector.insertAdjacentHTML("beforeend", livre.#injecterHTML());
    });
  }
}

export default Livre;
