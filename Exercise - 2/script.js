let fiyat = 10;
let adet = 3;
let tutar = adet*fiyat;
console.log("Tutar : " + tutar + " TL");
if( tutar >50 ) {
  console.log("Kargo Ücretsiz")
} else if( tutar < 50 ){
  console.log("Kargo tutarı 5 TL");
  console.log(50-tutar + " Tl daha harcayın kargo ücretsiz olsun")
}
