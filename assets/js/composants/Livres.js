function afficherLivre(livres) {
  const htmlSelector = document.querySelector("[liste-livre]");

  livres.forEach(function (livre) {
    const carte = `
    <div class="listeLivre__livre">
        <img src="${livre.image}" alt="${livre.titre}" />
        <h2>${livre.titre}</h2>
        <div class="listeLivre__prix_bouton">
            <p>${livre.prix} $</p>
            <button class="Listelivre__bouton">Ajouter</button>
        </div>
    </div>
`;

    htmlSelector.insertAdjacentHTML("beforeend", carte);
  });
}

export default afficherLivre;
