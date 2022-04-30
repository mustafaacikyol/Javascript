console.log("0 ile 100 arasındaki çift sayılar : ");
for (let sayac = 1 ; sayac < 100 ; sayac++) {
  let kalan = sayac % 2; 
   if ( kalan === 0 ) { 
     console.log(sayac); 
   }
}
