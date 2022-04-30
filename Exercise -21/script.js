let bisikletKiralama = {
  ad          : "Murtaza" ,
  soyad       : "Yılmaz" ,
  gunFiyat    : 50 ,
  kacGun      : 3 ,
  borcHesapla : function () {
     console.log ( this.gunFiyat * this.kacGun ) ;
  }
}
bisikletKiralama.borcHesapla();
