let i=0;
function pastRead(){
  if(!i) {
    document.getElementById("pastMore").style.display = "inline";
    document.getElementById("pastDots").style.display = "none";
    document.getElementById("pastRead").innerHTML="Read less";
    i=1;
    } else {
    document.getElementById("pastMore").style.display = "none";
    document.getElementById("pastDots").style.display = "inline";
    document.getElementById("pastRead").innerHTML="Read more";
    i=0;
  }
}

function presentRead(){
  if(!i) {
    document.getElementById("presentMore").style.display = "inline";
    document.getElementById("presentDots").style.display = "none";
    document.getElementById("presentRead").innerHTML="Read less";
    i=1;
    } else {
    document.getElementById("presentMore").style.display = "none";
    document.getElementById("presentDots").style.display = "inline";
    document.getElementById("presentRead").innerHTML="Read more";
    i=0;
  }
}

function futureRead(){
  if(!i) {
    document.getElementById("futureMore").style.display = "inline";
    document.getElementById("futureDots").style.display = "none";
    document.getElementById("futureRead").innerHTML="Read less";
    i=1;
    } else {
    document.getElementById("futureMore").style.display = "none";
    document.getElementById("futureDots").style.display = "inline";
    document.getElementById("futureRead").innerHTML="Read more";
    i=0;
  }
}
