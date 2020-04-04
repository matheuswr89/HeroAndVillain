var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    document.getElementById("footer-inicio").style.position = "relative";
  } else {
    mybutton.style.display = "none";
    document.getElementById("footer-inicio").style.position = "absolute";
  }
  if(document.body.scrollTop.style.display != "none" || document.documentElement.style.display != "none"){
        document.getElementById("footer-inicio").style.position = "relative";
  }
  
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
