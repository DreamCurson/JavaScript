function afficherLivre(livres) {
  const htmlSelector = document.querySelector("[liste-livre]");

  livres.forEach(function (livre) {
    const imageUrl =
      // vérifie si la propriété image de chaque livre n'est pas vide ni indisponible,
      // Si indisponible ou vide la constante est vide
      livre.images && livre.images.length > 0 ? livre.images[0].url : "";

    const carte = `
    <div class="listeLivre__livre">
        <img src="${imageUrl}" alt="${livre.titre}" />
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
