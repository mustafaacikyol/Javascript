console.log("0 ile 100 arasındaki çift sayılar : ");
let sayac = 1; 
while ( sayac < 100 ) { 
   let kalan = sayac % 2; 
   if ( kalan === 0 ) { 
     console.log(sayac); 
   }
   sayac++; 
}
