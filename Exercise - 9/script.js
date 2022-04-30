console.log("0(dahil) ile 100(dahil) arasında hem 3'ün hem 4'ün katları : ");
let sayac = 0; 
while ( sayac < 101 ) { 
   let kalan = sayac % 3; 
   let kalan2 = sayac % 4;
   if ( kalan === 0 && kalan2 === 0 ) { 
     console.log(sayac); 
   }
   sayac++; 
}
