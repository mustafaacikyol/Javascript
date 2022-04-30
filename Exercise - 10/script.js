console.log("0 ile 100 arasında 10'un katları : ");
for (let sayac = 1 ; sayac < 100 ; sayac++) {
  let kalan = sayac % 10; 
   if ( kalan === 0 ) { 
     console.log(sayac); 
   }
}
