const body = document.querySelector("body");
const button1 = document.querySelector(".sonbahar");
const button2 = document.querySelector(".kis");
const button3 = document.querySelector(".ilkbahar");
const button4 = document.querySelector(".yaz");

button1.addEventListener("click", changeToAutumn);
button2.addEventListener("click", changeToWinter);
button3.addEventListener("click", changeToSpring);
button4.addEventListener("click", changeToSummer);

let bodySıra = 0;

function changeToAutumn() {
	const bodyAutumn = [
		"url('./mevsimler/sonbahar/son1.jpg')",
		"url('./mevsimler/sonbahar/son2.jpg')",
		"url('./mevsimler/sonbahar/son3.jpg')",
	];
	console.log(bodySıra);

	if (bodySıra == 3) {
		bodySıra = 0;
	}

	const secilenBodyRenk = bodyAutumn[bodySıra];

	bodySıra++;

	body.style.backgroundImage = secilenBodyRenk;
}

function changeToWinter() {
	const bodyWinter = [
		"url('./mevsimler/kış/w1.jpg')",
		"url('./mevsimler/kış/w2.jpg')",
		"url('./mevsimler/kış/w3.jpg')",
	];
	console.log(bodySıra);
	if (bodySıra == 3) {
		bodySıra = 0;
	}
	const secilenBodyRenk = bodyWinter[bodySıra];
	bodySıra++;
	body.style.backgroundImage = secilenBodyRenk;
}

function changeToSpring() {
	const bodySpring = [
		"url('./mevsimler/ilkbahar/sp1.jpg')",
		"url('./mevsimler/ilkbahar/sp2.jpg')",
		"url('./mevsimler/ilkbahar/sp3.jpg')",
	];
	console.log(bodySıra);
	if (bodySıra == 3) {
		bodySıra = 0;
	}
	const secilenBodyRenk = bodySpring[bodySıra];
	bodySıra++;
	body.style.backgroundImage = secilenBodyRenk;
}

function changeToSummer() {
	const bodySummer = [
		"url('./mevsimler/yaz/sum1.jpg')",
		"url('./mevsimler/yaz/sum2.jpg')",
		"url('./mevsimler/yaz/sum3.jpg')",
	];

	console.log(bodySıra);
	if (bodySıra == 3) {
		bodySıra = 0;
	}
	const secilenBodyRenk = bodySummer[bodySıra];
	bodySıra++;
	body.style.backgroundImage = secilenBodyRenk;
}
