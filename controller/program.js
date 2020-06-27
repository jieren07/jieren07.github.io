function square(){
  var a = document.forms["uSquare"]["a"].value;

  a = a * a;

  document.getElementById("aSquare").innerHTML = a;

}


function triangle(){
  var b = document.forms["uTri"]["b"].value;
  var h = document.forms["uTri"]["h"].value;
  var a = .5 * b * h;

  document.getElementById("aTriangle").innerHTML = a;
}

function rectangle(){
  var w = document.forms["uRect"]["w"].value;
  var h = document.forms["uRect"]["h"].value;
  var a = w * h;

  document.getElementById("aRectangle").innerHTML = a;
}
