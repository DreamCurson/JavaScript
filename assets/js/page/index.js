import livres from "../data/livres.js";
import Livre from "../composants/Livres.js";

function init() {
  const livre = new Livre({});
  livre._afficherLivre(livres);
}

init();
