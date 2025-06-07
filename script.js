//setTimeout(function(){document.getElementById("btn1").click()}, 2000);
//const myTimeout = setTimeout(goNoAddOn, 2000);
const myTimeout = setTimeout(goNON, 2000);

function myStopFunction() {
  clearTimeout(myTimeout);
	document.getElementById("stopTxt").removeAttribute("hidden");		
}
