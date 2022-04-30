console.log("0 ile 100 arasındaki tek sayılar : ");
let sayac = 1; 
while ( sayac < 100 ) { 
   let kalan = sayac % 2; 
   if ( kalan === 1 ) { 
     console.log(sayac); 
   }
   sayac++; 
}
