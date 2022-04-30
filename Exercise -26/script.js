if ( devicePixelRatio === 1 ) {
document.querySelector('#p1').innerHTML = "Genişlik : " + outerWidth;
document.querySelector('#p2').innerHTML = "Yükseklik : " + outerHeight;
document.querySelector('#p3').innerHTML = "Oran : " + devicePixelRatio;
} else {
  document.querySelector('#p1').innerHTML = 
    "Genişlik : " + outerWidth * devicePixelRatio;
   document.querySelector('#p2').innerHTML = "Yükseklik : " + outerHeight * devicePixelRatio;
   document.querySelector('#p3').innerHTML = "Oran : " + devicePixelRatio;
}
