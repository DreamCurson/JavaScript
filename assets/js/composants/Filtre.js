class Filtre {
  // livres = tableau contenant tous les livres (data)
  // livre = instance de la classe Livre pour aller chercher _afficherLivre.
  constructor(livres, livre) {
    this.livres = livres;
    this.livre = livre;
  }

  onClicFiltre() {
    const filtres = document.querySelectorAll("[data-categorie]");

    filtres.forEach((filtre) => {
      const category = filtre.dataset.categorie;
      //   console.log(category);

      // Lors du clic sur un filtre applique le filtrage et ajoute la classe "selectionne" sur l'élément
      filtre.addEventListener("click", () => {
        // console.log(category);
        this.filtrerListe(category);
        this.clicFiltreSelection(filtre);
      });

      // Sélectionner "Nouveautés" par défaut au chargement de la page
      if (category === "Nouveautés") {
        this.filtrerListe("Nouveautés");
        this.clicFiltreSelection(filtre);
      }
    });
  }

  // category -> filtre cliqué
  filtrerListe(category) {
    let LivresFiltres;

    // Si la catégorie est "Tout"
    // affiche tous les livres sans filtré
    if (category === "Tout") {
      LivresFiltres = this.livres;
    } else if (category === "Nouveautés") {
      // Si la catégorie est "Nouveautés"
      // filtre les livres où 'nouveaute' dans la data est égal à true
      LivresFiltres = this.livres.filter((livre) => livre.nouveaute === true);
    } else {
      // Sinon
      // filtre les livres par la catégorie sélectionné
      LivresFiltres = this.livres.filter(
        (livre) => livre.categorie === category
      );
    }

    // Affiche les livres filtré avec la fonction dans Livres.js
    this.livre._afficherLivre(LivresFiltres);
  }

  clicFiltreSelection(filtreSelectionne) {
    // Supprimer la classe "selectionne" de tous les éléments de filtre (Surement possible à optimiser)
    const filtreItems = document.querySelectorAll("[data-categorie]");
    filtreItems.forEach((filtre) => {
      filtre.classList.remove("selectionne");
    });

    // Ajouter la classe "selectionne" au filtre qui a été cliqué
    filtreSelectionne.classList.add("selectionne");
  }
}

export default Filtre;
