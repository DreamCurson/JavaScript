import Popup from "../composants/popup.js";
import PopupErreur from "../composants/popupErreur.js";
import PopupSucces from "../composants/popupSucces.js";
import PopupInfo from "../composants/popupInfo.js";

const bodyHTML = document.querySelector("body");

const btnInfo = document.querySelector("[popup-test-info]");
const btnErreur = document.querySelector("[popup-test-erreur]");
const btnSucces = document.querySelector("[popup-test-succes]");

function initialiser() {
  //   const popup = new Popup(bodyHTML, "Popup de test swag", "Fermer");
  //   const popupErreur = new PopupErreur(bodyHTML, "Erreur", "Fermer");
  //   const popupErreur = new PopupErreur(
  //     bodyHTML,
  //     "Erreur",
  //     "Ça fonctionne pas ça"
  //   );
  //   const popupSucces = new PopupSucces(bodyHTML, "Succes !", "Fermer");
  //   const popupSucces = new PopupSucces(bodyHTML, "Succes !", "Trop cool");
  //   const popupInfo = new PopupInfo(bodyHTML, "Saviez-vous...");
  //   const popupInfo = new PopupInfo(bodyHTML, "Saviez-vous...", "chouette");

  btnInfo.addEventListener("click", () => {
    new PopupInfo(bodyHTML, "Information stylé");
  });

  btnErreur.addEventListener("click", () => {
    new PopupErreur(bodyHTML, "Une erreur est survenue", "Fermer");
  });

  btnSucces.addEventListener("click", () => {
    new PopupSucces(bodyHTML, "Opération réussie !", "Fermer");
  });
}

initialiser();
