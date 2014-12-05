function show(languagebtn) {
	if (window.XMLHttpRequest) {
	xmlhttp=new XMLHttpRequest();
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		document.getElementById("txtfield").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","code.php?languagebtn="+languagebtn, true);
	xmlhttp.send();
}
