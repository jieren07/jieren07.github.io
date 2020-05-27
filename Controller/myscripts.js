//navigation button
function naviOnClick(id) {
	var urls = "";
	var navi = document.getElementById(id).textContent;
	var str = window.location.href;
	var temp;
	var val = document.cookie;
	str = str.substr(str.lastIndexOf("/") + 1 , str.lastIndexOf(".html"));
	str = str.replace(".html","");
	temp = res(navi);
	//alert(temp);
	navi = temp;
	temp = temp + ".html";
	
	if(navi == "Back"){
		window.history.back();
	}else{
		if(navi == "home"){
			if(str !== "home" && navi == "home"){
	  			urls = "index.html";
			}else if(str == "index" && navi == "home"){
	  			urls = "index.html";
			}else{
	  			urls = temp;
			}
		}else if(navi == "contact"){				
			if(str !== "contact" && navi == "contact"){
	  			urls = "contact.html";
			}else if(str == "contact" && navi == "contact"){
	  			urls = "contact.html";
			}else{
			urls = temp;
			}
		}else if(navi == "about"){				
			if(str !== "about" && navi == "about"){
	  			urls = "about.html";
			}else if(str == "about" && navi == "about"){
	  			urls = "about.html";
			}else{
	  			urls = temp;
			}
		}else if(navi == "blog"){				
			if(str !== "blog" && navi == "blog"){
	  			urls = "blog.html";
			}else if(str == "blog" && navi == "blog"){
	  			urls = "blog.html";
			}else{
			urls = temp;
			}
		}
		

	//alert(urls);
        window.location = urls; 
		//alert("Completed");
		
	}	
}

function res(str){
	
	if(str == "Log In"){
		str = "login";
	}else if(str == "About"){
		str = "about";
	}else if(str == "Home"){
		str = "home";
	}else if(str == "Slideshow"){
		str = "slidesshow";
	}else if(str == "Contact"){
		str = "contact";
	}else if(str == "Blog"){
		str = "blog";
	}
	
	return str;
}



//Just go to index.html
function gotoIndex() {
	window.location =  "./Page/index.html";
}