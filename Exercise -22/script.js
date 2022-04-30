let bisikletKiralama = {
  ad          : "Murtaza" ,
  soyad       : "Yılmaz" ,
  gunFiyat    : 50 ,
  kacGun      : 2 ,
  borcHesapla : function () {
     if ( this.kacGun < 7 ) {
       var tutar = this.gunFiyat * this.kacGun;
     } else if ( this.kacGun > 7 && this.kacGun <= 14 ) {
       var tutar = ( this.gunFiyat * this.kacGun ) * 0.9 ;
     } else if ( this.kacGun >= 15 ) {
       var tutar = ( this.gunFiyat * this.kacGun ) * 0.75 ;
     }
    return KDVliTutar = tutar + ( tutar * 0.18 );
  }
 
}
let borcTutari = bisikletKiralama.borcHesapla();
console.log ( "Sayın " + bisikletKiralama.ad + " " + bisikletKiralama.soyad + " Borcunuz: " + borcTutari );
