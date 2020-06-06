function navClick(id){
  var str = id + ".html";
  str = replaceUrl(str)
  window.location.href = str;
}

function replaceUrl(str){

  var url = window.location.href;
  url = url.substring(url.lastIndexOf("/") + 1,url.lastIndexOf(".html")+5)

  if (checkUrl(str) == checkUrl(url)){
    str = str;
  }
  else{
    str = "../" + str;
  }

  return str;
}

function checkUrl(url){
  var bool;
  if(url == "index.html" || url == "about.html"  || url == "contact.html" || url == "blog.html" || url == "page.html" ){
    bool = "x";
  }
  return bool;
}

function fAnswer(){
  var str = document.forms["uAnswer"]["sAnswer"].value;
  str = str.toLowerCase();
  //readEData(str, str.length);
  str = readEData(str, str.length);
  //alert(str);
  submitAnswer(str);
  //str = readDData(str, str.length);
}


function readEData(str, l){
  for(var x = 0; x < 3; x++){
    str = corresponds(str, str.length);
    //alert(str + "-" + x);
  }
  return str;
}

function readDData(str, l){
  for(var x = 0; x < 3; x++){
    str = corresponds2(str, str.length);
    //alert(str + "-" + x);
  }
  return str;
}


function corresponds(str, l){
    var r;
    var newStr = str;

  if( l >= 0) {
    r = ec(str.charAt(l - 1));
    str = str.substring(0, l - 1) + r + str.substring(l, str.length);
    newStr = str;
    l = l - 1;
    newStr = corresponds(newStr, l);
  }else{
    return newStr;
  }
  return newStr;
}


function corresponds2(str, l){
    var r;
    var newStr = str;

  if( l >= 0) {
    r = dc(str.charAt(l - 1));
    str = str.substring(0, l - 1) + r + str.substring(l, str.length);
    newStr = str;
    l = l - 1;
    newStr = corresponds2(newStr, l);
  }else{
    return newStr;
  }
  return newStr;
}

function ec(c){
  if(c == "a" ){
    c = "q";
  }else if(c == "b" ){
    c = "g";
  }else if(c == "c" ){
    c = "d";
  }else if(c == "d" ){
    c = "e";
  }else if(c == "e" ){
    c = "3";
  }else if(c == "f" ){
    c = "r";
  }else if(c == "g" ){
    c = "t";
  }else if(c == "h" ){
    c = "y";
  }else if(c == "i" ){
    c = "8";
  }else if(c == "j" ){
    c = "u";
  }else if(c == "k" ){
    c = "i";
  }else if(c == "l" ){
    c = "o";
  }else if(c == "m" ){
    c = "j";
  }else if(c == "n" ){
    c = "h";
  }else if(c == "o" ){
    c = "9";
  }else if(c == "p" ){
    c = "0";
  }else if(c == "q" ){
    c = "1";
  }else if(c == "r" ){
    c = "4";
  }else if(c == "s" ){
    c = "w";
  }else if(c == "t" ){
    c = "5";
  }else if(c == "u" ){
    c = "7";
  }else if(c == "v" ){
    c = "f";
  }else if(c == "w" ){
    c = "2";
  }else if(c == "x" ){
    c = "s";
  }else if(c == "y" ){
    c = "6";
  }else if(c == "z" ){
    c = "a";
  }else if (c == "1"){
    c = "z";
  }else if (c == "2"){
    c = "x";
  }else if (c == "3"){
    c = "c";
  }else if (c == "4"){
    c = "v";
  }else if (c == "5"){
    c = "b";
  }else if (c == "6"){
    c = "n";
  }else if (c == "7"){
    c = "m";
  }else if (c == "8"){
    c = ",";
  }else if (c == "9"){
    c = ".";
  }else if (c == "0"){
    c = "/";
  }else if (c == "/"){
    c = ";";
  }else if (c == "."){
    c = "l";
  }else if (c == ","){
    c = "k";
  }

  return c;
}


function dc(c){
  if(c == "a" ){
    c = "z";
  }else if(c == "b" ){
    c = "5";
  }else if(c == "c" ){
    c = "3";
  }else if(c == "d" ){
    c = "c";
  }else if(c == "e" ){
    c = "d";
  }else if(c == "f" ){
    c = "v";
  }else if(c == "g" ){
    c = "b";
  }else if(c == "h" ){
    c = "n";
  }else if(c == "i" ){
    c = "k";
  }else if(c == "j" ){
    c = "m";
  }else if(c == "k" ){
    c = ",";
  }else if(c == "l" ){
    c = ".";
  }else if(c == "m" ){
    c = "7";
  }else if(c == "n" ){
    c = "6";
  }else if(c == "o" ){
    c = "l";
  }else if(c == "p" ){
    c = ";";
  }else if(c == "q" ){
    c = "a";
  }else if(c == "r" ){
    c = "f";
  }else if(c == "s" ){
    c = "x";
  }else if(c == "t" ){
    c = "g";
  }else if(c == "u" ){
    c = "j";
  }else if(c == "v" ){
    c = "4";
  }else if(c == "w" ){
    c = "s";
  }else if(c == "x" ){
    c = "2";
  }else if(c == "y" ){
    c = "h";
  }else if(c == "z" ){
    c = "1";
  }else if (c == "1"){
    c = "q";
  }else if (c == "2"){
    c = "w";
  }else if (c == "3"){
    c = "e";
  }else if (c == "4"){
    c = "r";
  }else if (c == "5"){
    c = "t";
  }else if (c == "6"){
    c = "y";
  }else if (c == "7"){
    c = "u";
  }else if (c == "8"){
    c = "i";
  }else if (c == "9"){
    c = "o";
  }else if (c == "0"){
    c = "p";
  }else if (c == ";"){
    c = "/";
  }else if (c == "."){
    c = "9";
  }else if (c == ","){
    c = "8";
  }

  return c;
}

function submitAnswer(str){
  var url = window.location.href;
  var html = url.substring(0,url.lastIndexOf(".html") + 5);
  url = url.substring(url.lastIndexOf("/puzzle1"),url.lastIndexOf(".html") + 5);
  //alert(html);
  if (url == "/puzzle1/message.html"){
    if(str == "7zf3l"){
      alert("Correct!");
      window.location.href = "meetup.html";
    }else{
      document.getElementById("answer").innerHTML = "Wrong!";
    }
  }
  if (url == "/puzzle1/meetup.html"){
    if(str == "3z.d6czf"){
      alert("Correct!");
      window.location.href = "calendar.html";
    }else{
      document.getElementById("answer").innerHTML = "Wrong!";
    }
  }

  if (url == "/puzzle1/calendar.html"){
    if(str == "jck6d"){
      alert("Correct!");
      window.location.href = "italy.html";
    }else{
      document.getElementById("answer").innerHTML = "Wrong!";
    }
  }

  if (url == "/puzzle1/italy.html"){
    if(str == "wqwwqt"){
      alert("Correct!");
      window.location.href = "escaped.html";
    }else{
      document.getElementById("answer").innerHTML = "Wrong!";
    }
  }

}
