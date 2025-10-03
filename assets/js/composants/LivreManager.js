import Livre from "./Livres.js";
import LivreModale from "./LivreModale.js";

/**
 * Gestion des livres et leur affichage dans l'interface utilisateur ce qui permet de pas rendre
 * index.js surchagé
 *
 * combine les fonctionnalités de la classe Livre
 * avec la gestion des interactions via les modales (LivreModale) permettant d'afficher
 * les détails complets d'un livre sélectionné.
 *
 * Affichage dynamique de la liste des livres dans un conteneur HTML donné
 * Gestion des événements de clic sur chaque livre pour ouvrir la modale
 * Mise à jour (rechargement) de la liste des livres affichés (application de filtres)
 */
class LivreManager {
  #livres; // Data livre
  #livreInstance; // Instance de la classe Livre
  #container;
  #modaleContainer;

  constructor(livres, containerSelector, modaleSelector) {
    this.#livres = livres;
    this.#livreInstance = new Livre({});
    this.#container = document.querySelector(containerSelector);
    this.#modaleContainer = document.querySelector(modaleSelector);

    this.#afficherLivres();
    this.#attacherListenersModale();
  }

  /**
   * Affiche les livres dans le container
   */
  #afficherLivres() {
    this.#livreInstance._afficherLivre(this.#livres);
  }

  /**
   * Attache les écouteurs d'événements sur chaque livre affiché
   * pour ouvrir la modale correspondante
   * (sauf si on clique sur le bouton "Ajouter")
   */
  #attacherListenersModale() {
    const livreElements =
      this.#container.querySelectorAll(".listeLivre__livre");

    livreElements.forEach((element, index) => {
      element.addEventListener("click", (event) => {
        // Bloque le bouton ajouter du click pour éviter de futur erreur avec le panier d'achat
        if (event.target.closest("button")) return;

        const data = this.#livres[index];

        const modale = new LivreModale(
          data.image,
          data.titre,
          data.auteur,
          data.editeur,
          data.nbPages,
          data.description,
          this.#modaleContainer
        );

        modale.afficher();
      });
    });
  }

  /**
   * Recharge la liste des livres affichés
   * et ré-attache les événements pour la modale
   * (filtre)
   */
  rechargerListe(nouveauxLivres) {
    this.#livres = nouveauxLivres;
    this.#afficherLivres();
    this.#attacherListenersModale();
  }
}

export default LivreManager;
