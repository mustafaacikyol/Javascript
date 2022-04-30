let a =  prompt ( "Lütfen bir sayı giriniz" );

if ( a != null ) {
var c = prompt ( "Lütfen +, -, *, / operatörlerinden birini giriniz" );
  }

if ( c != null ) {
var b = prompt ( "Lütfen bir sayı giriniz" );
}

if ( c == "+" ) {
  let d = parseInt ( a ) + parseInt ( b );
  document.querySelector('p').innerHTML = a + c + b + "=" + d ;
} ;
if ( c == "-" ) {
  let d = parseInt ( a ) - parseInt ( b );
  document.querySelector('p').innerHTML = a + c + b + "=" + d ;
} ;
if ( c == "*" ) {
  let d = parseInt ( a ) * parseInt ( b );
  document.querySelector('p').innerHTML = a + c + b + "=" + d ;
} ;
if ( c == "/" ) {
  let d = parseInt ( a ) / parseInt ( b );
  document.querySelector('p').innerHTML = a + c + b + "=" + d ;
} ;
