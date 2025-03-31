
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://github.com/facebook/react/issues/27219
async function getJson() {
	const Url = 'https://script.google.com/macros/s/AKfycbwGhi3oRXE_svZboyB5w-RkiU3qF70PaPXrQQsZ0n1s4tsWL8z55V-eqQeE9XhwkkDB/exec';
	try {
		const response = await fetch(Url);
		const data = await response.json();

		//document.getElementById("datajson").innerHTML = "JSON Data =>" + data[0][0] + "-" + data[0][1] + "-" + data[0][2];
		document.getElementById("datajson").innerHTML = data[0][0] + "-" + data[0][1] + "-" + data[0][2];
		console.log(data);
		console.log(data[0][0]);

	//REDIRECTION VAR YONLENDIR
	if(data[0][2] == 1){	
		if(data[0][0] == 0){
			setTimeout(function(){document.getElementById("btn0").click()}, data[0][1]);
			//document.getElementById("btn0").click();
			//document.getElementById("btn0").removeAttribute("hidden");
			//document.getElementById("btn0").disabled = false;
		}
		
		if(data[0][0] == 1){
			setTimeout(function(){document.getElementById("btn1").click()}, data[0][1]);
			//document.getElementById("btn1").removeAttribute("hidden");
		}
		
		if(data[0][0] == 2){
			setTimeout(function(){document.getElementById("btn2").click()}, data[0][1]);
			//document.getElementById("btn2").removeAttribute("hidden");
		}

		if(data[0][0] == 3){
			document.getElementById("btn0").removeAttribute("hidden");
			document.getElementById("btn1").removeAttribute("hidden");
			document.getElementById("btn2").removeAttribute("hidden");
		}
	//REDIRECTION YOK BUTTON GOSTER	
	} else if(data[0][2] == 0){

		if(data[0][0] == 0){
			document.getElementById("btn0").removeAttribute("hidden");
		}
		
		if(data[0][0] == 1){
			document.getElementById("btn1").removeAttribute("hidden");
		}
		
		if(data[0][0] == 2){
			document.getElementById("btn2").removeAttribute("hidden");
		}

		if(data[0][0] == 3){
			document.getElementById("btn0").removeAttribute("hidden");
			document.getElementById("btn1").removeAttribute("hidden");
			document.getElementById("btn2").removeAttribute("hidden");
		}
		
	}	
	
	} catch (error) {
			console.log(error);
	}
}

getJson();
