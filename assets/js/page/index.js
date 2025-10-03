import livres from "../data/livres.js";
import Filtre from "../composants/Filtre.js";
/**
 * Après plusieurs heures à chercher comment gérer les interactions entre les livres et la modale sans rendre le init rempli de code
 * j'ai créé la classe LivreManager
 * Elle permet de joindre la gestion de l'affichage des livres, des filtres et des modales
 */
import LivreManager from "../composants/LivreManager.js";

function init() {
  const livreManager = new LivreManager(
    livres,
    "[liste-livre]",
    ".livreModale"
  );

  const filtre = new Filtre(livres, livreManager);
  filtre.onClicFiltre();
}

init();
