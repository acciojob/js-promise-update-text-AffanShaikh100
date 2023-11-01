//your JS code here. If required.
function displaydata(content){
 document.getElementById("output").textContent = content;
}

let promisefg = new Promise((resolve,reject)=>{
	// resolve("Hello, world!");
	setTimeout(()=>{
		resolve("Hello, world!")
	},1000)
})

promisefg.then((value)=>displaydata(value)).
	catch((error)=>displaydata(error))