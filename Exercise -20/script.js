function hesapMakinesi ( a, b, c ) {
 if ( a == "+" ) {
   return b + c ;
 } else if ( a == "-" ) {
   return b - c ;
 } else if ( a == "*" ) {
   return b * c ;
 } else if ( a == "/" ) {
   return b / c ;
 } else {
   return false;
 }
}
console.log ( hesapMakinesi ( "+", 6, 2 ) )
