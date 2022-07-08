var messageArray = ["Hey, life is short, enjoy your coffee ☕"];
var textPosition = 0;
var speed = 100;

typewriter = () => {
	document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

	if(textPosition++ != messageArray[0].length)
		setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);


/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Здесь должно быть моё кредо...')
})

