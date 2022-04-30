let b = 0;
setInterval ( function () {
  b++;
  let a = document.createElement ('p');
  document.querySelector('body').appendChild(a);
  a.innerHTML = "Paragraf " + b ;
  } , 3000 );
