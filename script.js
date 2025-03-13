
function myFunction() {
  document.getElementById("demo").innerHTML = "I have changed!";
 const myElement = document.getElementById("dene");
  myElement.style.color = "blue";
  myElement.innerHTML = "NONE"
	document.getElementById("btn0").disabled = false;
}
	function pullJSON() {  
  var URL = "https://script.google.com/macros/s/AKfycbx-fw7DtK_Jto2qeLCKUqdZkzIfM4DYVRH0lsNdBHcqFxoL_XVWMKQ0_3mQVDBZDjLb/exec"
 var data = fetch(URL, {"contentType": "application/json"});
  //console.log(data);
document.getElementById("dene").innerHTML = data;

}
	//pullJSON();
//document.getElementById("dene").innerHTML = "DENEME";


//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://github.com/facebook/react/issues/27219
async function getQuotes() {
const apiUrl = 'https://script.google.com/macros/s/AKfycbx-fw7DtK_Jto2qeLCKUqdZkzIfM4DYVRH0lsNdBHcqFxoL_XVWMKQ0_3mQVDBZDjLb/exec';
try {
const response = await fetch(apiUrl);
const apiQuotes = await response.json();
console.log(apiQuotes);
} catch (error) {
console.log(error);
}
}

getQuotes();
