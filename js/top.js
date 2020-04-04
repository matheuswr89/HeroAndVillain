var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    document.getElementById("footer-inicio").style.position = "relative";
  } else {
    mybutton.style.display = "none";
  }
  if(document.body.scrollTop<15 || document.documentElement.scrollTop <15){
        document.getElementById("footer-inicio").style.position = "absolute";
  }
  
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
