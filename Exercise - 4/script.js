let fiyat = 10;
let adet = 3;
const KDV = 0.18;
let tutar = fiyat * adet;
let KDVliTutar = tutar + ( tutar * KDV );
let kargoluTutar = KDVliTutar + 5;
console.log ( "Tutar : " + tutar + " TL" );
console.log ( "KDV Dahil Tutar : " + KDVliTutar + " TL" );
if ( tutar > 50 ) {
  console.log ( "Kargo ücretsiz" );
  if ( tutar > 200 ) {
  console.log ( "20 TL puan kazandınız" );
    } else if ( tutar > 150) {
      console.log ( "15TL puan kazandınız" );
    } else if ( tutar > 100) {
      console.log ( "10TL puan kazandınız" );
    } else if ( tutar < 100) {
      console.log ( "Puan kazanamadınız" );
    }
} else if( tutar < 50 ) {
  console.log ( "Kargo tutarı : 5 TL" );
  console.log ( "Kargo ve KDV dahil toplam tutar : " + kargoluTutar + "TL" );
}
