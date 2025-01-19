interface Bird {
	type: "bird";
	flyingSpeed: number;
}

interface Horse {
	type: "horse";
	runningSpeed: number;
}

type Animal = Bird | Horse

function move(a: Animal): void {
	let speed: number;
	if ("flyingSpeed" in a) speed = a.flyingSpeed;
	if ("runningSpeed" in a) speed = a.runningSpeed;

	console.log("moving with speed " + speed)
}

move({type: "horse", runningSpeed: 1});


