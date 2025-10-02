// son image, son titre, son auteur, son éditeur, son nombre de pages et sa description.
// La boite modale doit être centrée à l’écran et le reste de la page doit être assombri.
// - Empêchez le scroll vertical de la page lorsque la boite modale est ouverte (N'oubliez pas de remettre le comportement correctement à la fermeture de celle-ci).
class LivreModale {
  #image;
  #titre;
  #auteur;
  #editeur;
  #nbPages;
  #description;
  #conteneurHTML;
  #elementHTML;

  constructor(
    image,
    titre,
    auteur,
    editeur,
    nbPages,
    description,
    conteneurHTML
  ) {
    this.#image = image;
    this.#titre = titre;
    this.#auteur = auteur;
    this.#editeur = editeur;
    this.#nbPages = nbPages;
    this.#description = description;
    this.#conteneurHTML = conteneurHTML;
    this.#elementHTML;

    this._injecterHTML();
  }

  _injecterHTML() {}

  afficher() {}

  fermer() {}
}

export default LivreModale;
