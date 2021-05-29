var backgroundCanvas = document.getElementById("socialize-background-canvas");
var backgroundContext = backgroundCanvas.getContext("2d");

var backgroundImage = document.getElementById("socialize-background-image");

var backgroundColor = 700;


var backgroundStarsRotation = 0;
var backgroundStars = [];

setInterval(() => {
	backgroundStarsRotation = (backgroundStarsRotation + 0.0420) % 480;
}, 1000 / 60);

function renderFrame() {
	var backgroundCanvasH = backgroundCanvas.height = Math.max(window.innerWidth, window.innerHeight);
	var backgroundCanvasW = backgroundCanvas.width = Math.max(window.innerWidth, window.innerHeight);

	var backgroundGradient = backgroundContext.createLinearGradient(
		backgroundCanvasW / 2, 0,
		backgroundCanvasW / 2, backgroundCanvasH
	);
	backgroundGradient.addColorStop(0.0, "hsla(" + backgroundColor + ", 100%, 0%, 1)");
	backgroundGradient.addColorStop(1.0, "hsla(" + backgroundColor + ", 100%, 0%, 1)");

	backgroundImage.style.filter = "hue-rotate(" + backgroundColor + "deg)";

	for (var starAmount = backgroundStars.length; starAmount <= (backgroundCanvasW * backgroundCanvasH) / 200; starAmount++) {
		backgroundStars.push({
			starX: (Math.random() * (backgroundCanvasW * 5)),
			starY: (Math.random() * (backgroundCanvasH * 9)),
			starR: ((Math.random() * 3) + 0.2)
		});
	}

	backgroundContext.save();


	backgroundContext.fillStyle = backgroundGradient;
	backgroundContext.fillRect(0, 0, backgroundCanvasW, backgroundCanvasH);

	backgroundContext.translate(-(backgroundCanvasW), -(backgroundCanvasH));

	backgroundContext.translate(backgroundCanvasW, backgroundCanvasH);
	backgroundContext.rotate(backgroundStarsRotation * Math.PI / 180);
	backgroundContext.translate(-backgroundCanvasW, -backgroundCanvasH);

	for (var starIndex = 0; starIndex < backgroundStars.length; starIndex++) {
		backgroundContext.fillStyle = "#FFFFFF";

		backgroundContext.fillRect(
			backgroundStars[starIndex].starX,
			backgroundStars[starIndex].starY,
			backgroundStars[starIndex].starR,
			backgroundStars[starIndex].starR
		);
	}

	backgroundContext.restore();

	requestAnimationFrame(renderFrame);
};
renderFrame();


var value = 0;

function incrementValue()
{
    value++;
    if(value == 10){
		value = 0;
		window.open("https://www.twitch.com/dariomocciatwitch")
	}
}





function scarica()
{
	document.getElementById("socialize-linkss").style.display = "block";
	document.getElementById("socialize-contact-mail").style.display = "none";
	document.getElementById("piattaforma").style.display = "block";
}