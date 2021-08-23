$(document).ready (function() 
{ 
  let quantite = $("#quantite"); 
  console.log(quantite)
  let taille = $("#taille");
  console.log(taille);
  let nombre = $("#nombre");
  console.log(nombre);
  let prix = $("#prix");
  console.log(prix)

  //recuperation de l endroit ou on stock l element

  let quantiteValue = $("#quantite_value")
  console.log(quantiteValue)
  
  let tailleValue = $("#taille_value")
  console.log(tailleValue)
  let nombreValue = $("#nombre_value")
  console.log(nombreValue)
  let prixValue = $("#prix_value")
  console.log(prixValue)
  let totalValue = $("#total_value")
  console.log(totalValue)

// 3eme tape
quantiteValue.text(quantite.val())

tailleValue.text(taille.val())

nombreValue.text(nombre.val())

prixValue.text(prix.val())

totalValue.text(quantite.val() * prix.val())


// ecouter les differentes ;
quantite.on('change', function(){
    quantiteValue.text(quantite.val())
    totalValue.text(quantite.val() * prix.val())
})

taille.on('change', function(){
    tailleValue.text(taille.val())
    totalValue.text(quantite.val() * prix.val())
})
nombre.on('change', function(){
    nombreValue.text(nombre.val())
    totalValue.text(quantite.val() * prix.val())
})
prix.on('change', function(){
    prixValue.text(prix.val())
    totalValue.text(quantite.val() * prix.val())
})





});