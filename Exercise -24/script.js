function tekSayilar (dizi) {
  for ( x = 0; x <= elemanSayisi; x++ ) {
    if ( sayilar [x] % 2 == 1 ){
      console.log ( sayilar [x] );
    }
  }
}

let sayilar = [15, 26, 37, 41, 56, 68, 74, 85, 92, 97];
let elemanSayisi = sayilar.length - 1;

tekSayilar (sayilar);
