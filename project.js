
//shop//
var names = ["leggings", "training Tank", "joggers man", "sweatshirt", "crop tank","T-shirt man ", "crop top", "Hoodie man", "T-shirt", "Tank man", "Gulte Set 3pk", "Resistance Band","Golves","mat towel","Phone strap","peanut butter", "water bottle", "Gold standard Whey","100% whey protein","gold standard ISOLATE", "Vitamine C", "Zink", "Magnesium", "protein shaker"]
var price = ["5000da", "3000da", "5500da", "6000da", "5000da", "6000da", "4000da", "5500da", "4000da","4800da", "4300da", "5700da", "5000da","7000da","3000da","1400da", "3900da", "20000da","26000da","2400da", "1300da", "1200da", "1900da", "4000da"]
var description = ["gymshark/color dark grey", "gymshark/color white", "gymshark/color black", "gymshark/color black", "gymshark/color darkturquoise", "gymshark/color blue","gymshark/color rose brown ", "gymshark/color white", "gymshark/color dark turquoise", "gymshark/color orange ","gymshark/ Light grey, grey, black", "color grey", "gymshark golves", "gymshark/ color rose brown","phone strap","peanut butter","watter bottle 1L","whey", "whey", "Whey"," vitamine","vitamine", "Vitamine ", "shaker"]
var img = ["../picture/leggings.jpg", "../picture/tran.jpeg", "../picture/joggers.jpg", "../picture/sweat.webp", "../picture/croptank.jpeg", "../picture/tshirtman.jpg","../picture/croptop.jpeg ", "../picture/hoodie.webp", "../picture/t-shirtwoman.jpg", "../picture/tank.webp ", "../picture/gulteset.jpeg", "../picture/resistance.webp", "../picture/golves.webp","../picture/mat.webp","../picture/phone.webp","../picture/peanut.jpeg","../picture/bottle.jpeg ", "../picture/goldwhey.jpeg", "../picture/whey.jpeg","../picture/isolate.jpeg","../picture/vitaminc.jpeg", "../picture/vitaminzink.jpeg ", "../picture/magnesium.jpeg", "../picture/shaker.jpeg"]
var user=[]
for (let i = 0; i < names.length; i++) {
     
    var objectuser = {
      names : names[i],
      price : price[i],
      description : description [i],
    }
    user.push(objectuser)
 console.log(user);
 var product = document.getElementById("product")
 product.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src=${img[i]} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${names[i]}</h5>
    <p class="card-text">${description[i]}</p>
    <h6>${price[i]}</h6>
    <a href="#" class="btn btn-primary">add to carte</a>
  </div>
 </div>`
}
