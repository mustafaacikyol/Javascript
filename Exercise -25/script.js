let sepet = [
 {
   urunAd : "Süt",
   fiyat : 25,
   adet : 3,
   hediyePuan : 2
 },
 {
   urunAd : "Ketçap",
   fiyat : 35,
   adet : 2,
   hediyePuan : 3
 },
 {
   urunAd : "Mayonez",
   fiyat : 30,
   adet : 5,
   hediyePuan : 1
 },
 {
   urunAd : "Yumurta",
   fiyat : 2,
   adet : 15,
   hediyePuan : 0.5
 }
];
/*let urunMiktari = sepet.length;
console.log ( urunMiktari );*/

function sepetBilgi (diziUrun) {
  console.log ( "Toplam Ürün : " + diziUrun.length ) ;
  console.log ( diziUrun[0].urunAd + " : " + diziUrun[0].fiyat * diziUrun[0].adet + "TL" ) ;
  console.log ( "Puan : " + diziUrun[0].hediyePuan);
  console.log ( diziUrun[1].urunAd + " : " + diziUrun[1].fiyat * diziUrun[1].adet + "TL" ) ;
  console.log ( "Puan : " + diziUrun[1].hediyePuan);
  console.log ( diziUrun[2].urunAd + " : " + diziUrun[2].fiyat * diziUrun[2].adet + "TL" ) ;
  console.log ( "Puan : " + diziUrun[2].hediyePuan);
  console.log ( diziUrun[3].urunAd + " : " + diziUrun[3].fiyat * diziUrun[3].adet + "TL" ) ;
  console.log ( "Puan : " + diziUrun[3].hediyePuan);
}

sepetBilgi(sepet);
