var range = document.querySelector(".slider-range");
// Sélectionne le slider (input range) dans le HTML.

var imageAfter = document.querySelector(".slider-image-after");
// Sélectionne l'image "after" à redimensionner dynamiquement.

var updatePosition = function () {
  // Fonction appelée quand le slider bouge.
  var position = range.value + "%";
  // Récupère la valeur du slider en pourcentage.
  imageAfter.style.width = position;
  // Ajuste la largeur de l'image "after" selon la valeur.
};

range.addEventListener("input", updatePosition);
// Exécute updatePosition à chaque changement du slider.

var range = document.querySelector(".slider-range");
var imageAfter = document.querySelector(".slider-image-after");
var separator = document.querySelector(".slider-separator");
// sélectionne le séparateur

var updatePosition = function () {
  var position = range.value + "%";
  imageAfter.style.width = position;
  separator.style.left = position;
  // déplacer le séparateur
};

range.addEventListener("input", updatePosition);
