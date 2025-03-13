
function myFunction() {
  document.getElementById("demo").innerHTML = "I have changed!";
 const myElement = document.getElementById("dene");
  myElement.style.color = "blue";
  myElement.innerHTML = "NONE"

}
	function pullJSON() {  
  var URL = "https://script.google.com/macros/s/AKfycbx-fw7DtK_Jto2qeLCKUqdZkzIfM4DYVRH0lsNdBHcqFxoL_XVWMKQ0_3mQVDBZDjLb/exec"
 var data = fetch(URL, {"contentType": "application/json"});
  //console.log(data);
document.getElementById("dene").innerHTML = data;

}
	pullJSON();
	//document.getElementById("dene").innerHTML = "DENEME";
