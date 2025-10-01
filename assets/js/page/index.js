import livres from "../data/livres.js";
import Livre from "../composants/Livres.js";
import Filtre from "../composants/Filtre.js";

function init() {
  const livre = new Livre({});
  livre._afficherLivre(livres);

  const filtre = new Filtre(livres, livre);
  filtre.onClicFiltre();
}

init();
