// form section

let form = document.querySelector(".form");
let inputNumber = form.querySelector("#form__input");
let button = form.querySelector(".btn");

// results

let human = document.querySelector(".person");
let bike = document.querySelector(".bycycle");
let carResult = document.querySelector(".car");
let planeResult = document.querySelector(".plane");

button.addEventListener("click", function (e) {
	e.preventDefault();

	let value = inputNumber.value;

	// Piyoda odamning sarflash vaqti

	let modul = value % 3.6;
	let device = value / 3.6;
	let round = device - Math.floor(device);
	let minute = Math.round(round * 10) / 10;

	if (modul === 0) {
		human.textContent = `${device} soat`;
	} else {
		human.textContent = `${Math.floor(device)} soat ${minute * 60} daqiqa`;
	}

	// velosapedning sarflagan vaqti

	let modulBike = value % 20.1;
	let deviceBike = value / 20.1;
	let roundBike = deviceBike - Math.floor(deviceBike);
	let minuteBike = Math.round(roundBike * 10) / 10;

	if (modulBike === 0) {
		bike.textContent = `${deviceBike} soat`;
	} else {
		bike.textContent = `${Math.floor(deviceBike)} soat ${
			minuteBike * 60
		} daqiqa`;
	}

	// Moshinaning sarflagan vaqti

	let modulCar = value % 70;
	let deviceCar = value / 70;
	let roundCar = deviceCar - Math.floor(deviceCar);
	let minuteCar = Math.round(roundCar * 10) / 10;

	if (modulCar === 0) {
		carResult.textContent = `${deviceCar} soat`;
	} else {
		carResult.textContent = `${Math.round(deviceCar)} soat ${
			minuteCar * 60
		} daqiqa`;
	}

	// Samalyotning saarflagan vaqti

	let modulPlane = value % 800;
	let devicePlane = value / 800;
	let roundPlane = devicePlane - Math.floor(devicePlane);

	if (modulPlane === 0) {
		planeResult.textContent = `${devicePlane} soat`;
	} else {
		if (value < 10) {
			let minutePlane = Math.round(roundPlane * 1000) / 1000;

			planeResult.textContent = `${Math.floor(
				devicePlane
			)} soat ${Math.floor(minutePlane * 60)} daqiqa ${Math.round(
				minutePlane * 3600
			)} sekund`;
		} else if (value < 100) {
			let minutePlane = Math.round(roundPlane * 100) / 100;
			let sekundPlane = minutePlane * 60 - Math.floor(minutePlane * 60);

			planeResult.textContent = `${Math.floor(
				devicePlane
			)} soat ${Math.round(minutePlane * 60)} daqiqa ${Math.round(
				sekundPlane * 60
			)} sekund`;
		} else {
               let minutePlane = Math.round(roundPlane * 10) / 10;
               
			planeResult.textContent = `${Math.floor(devicePlane)} soat ${minutePlane * 60} daqiqa`;
		}
	}
});
