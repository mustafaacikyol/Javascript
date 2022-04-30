let fiyat = 10;
let adet = 4;
let tutar = fiyat*adet;
let kargolututar = tutar + 5;
console.log( "Tutar : " + tutar + " TL" );
if ( tutar > 50 ) {
  console.log ( "Kargo Ücretsiz" )
} else if ( tutar < 50 ) {
  console.log ( "Kargo tutarı : 5TL" );
  console.log ( "Kargo dahil tutar : " + kargolututar + " TL" )
}
