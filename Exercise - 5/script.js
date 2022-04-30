console.log("0 ile 100 arasında 10'un katları : ");
let sayac = 1; 
while ( sayac < 100 ) { 
   let kalan = sayac % 10; 
   if ( kalan === 0 ) { 
     console.log(sayac); 
   }
   sayac++; 
}
