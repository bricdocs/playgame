
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://github.com/facebook/react/issues/27219
async function getJson() {
	const Url = 'https://script.google.com/macros/s/AKfycbx-fw7DtK_Jto2qeLCKUqdZkzIfM4DYVRH0lsNdBHcqFxoL_XVWMKQ0_3mQVDBZDjLb/exec';
	try {
		const response = await fetch(Url);
		const data = await response.json();
		console.log(data);
		if(data[0][0] == 0){
			document.getElementById("btn0").disabled = false;
		}
	} catch (error) {
		console.log(error);
	}
}

getJson();
