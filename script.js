//your JS code here. If required.
window.onload=()=>{
	let div = document.getElementById("output");
	const promise = new promise(function(resolve,reject)){
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000);
	}

	promise.then((value)=>{
		div.innerHTML = value;
	})	
		
}