let a = document.querySelector('#d1');
setInterval ( function() {
  a.style.backgroundColor =      a.style.backgroundColor == 'black' ? 'red' : 'black';
  } , 2000);

let b = document.querySelector('#d2').innerHTML;
setInterval ( function () {
  b++;
  document.querySelector('#d2').innerHTML = b;
}, 1000);

let c = document.querySelector('#d2');
let d = document.querySelector('#d4');
document.querySelector('#d3').addEventListener ( 'mouseover', function() {
  c.classList.add('yesil');
  d.classList.add('yesil');
} );
document.querySelector('#d3').addEventListener ( 'mouseout' , function() {
  c.classList.remove('yesil');
  d.classList.remove('yesil');
});

document.querySelector('#d4').addEventListener ( 'dblclick' , function () {
  let e = document.createElement('div');
  document.querySelector('body').appendChild(e);
});

document.querySelector('#d5').addEventListener ( 'click' , function() {
  let f = document.getElementsByTagName('div').length;
  document.querySelector('#d5').innerHTML = f;
} );

document.querySelector('#d6').addEventListener ( 'click' , function(){
  var g = document.createElement('img');
  g.setAttribute( 'src' , 'https://picsum.photos/100/100')
  document.querySelector('body').appendChild(g);
} );

document.querySelector('#d7').addEventListener ( 'click' , function(){
  let h = document.getElementsByTagName('img').length;
  for ( x = 0 ; x < h ; x++ ) {
    document.getElementsByTagName('img')[x].style.border = '3px solid red';
  }
 } );
 
document.querySelector('#d8').addEventListener ( 'click' , function(){
  document.querySelector('#d8').classList.toggle('yesil');
} );

document.querySelector('#d9').addEventListener ( 'dblclick' , function(){
 let k = document.getElementsByTagName('div');
 k[0].remove();
} );

document.querySelector('#d10').addEventListener( 'dblclick', function(){
  setInterval ( function() {
    let k = document.getElementsByTagName('div');
    k[0].remove();
  } , 2000 )
} );
