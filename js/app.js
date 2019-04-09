document.addEventListener('DOMContentLoaded', function() {
	main();
}, true);
var main = function () {
	fillFirstSlide();
	fillSecondSlide();
	fillThirdSlide();
}

//заполняем третий слайд
function fillThirdSlide(){
	var thirdSlide = document.getElementById("ThirdSlide"),
	statistic = document.getElementById("statistic");

	createYearC();
	createYearA();
	createYearB();
}
//добавляем текст на второй слайд
function fillSecondSlide(){
	var secondSlide = document.getElementById("SecondSlide"),
		secondaryTitle = document.createElement("p");
		secondaryTitle.innerHTML="Основа терапии - патогенез СД2";
		secondaryTitle.style.cssText="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); margin: 0; color: whitesmoke; font-size: 3rem;"
		secondSlide.appendChild(secondaryTitle);
}
//создаем точки и текст на первом слайде
function fillFirstSlide(){
	var FirstSlide = document.getElementById("FirstSlide"),
	title = document.createElement("p");
	title.innerHTML="Всегда ли цели терапии СД2 на поверхности?";
	title.classList.add("title");
	FirstSlide.appendChild(title);

	var firstPoint = document.createElement("div"),
	firstPointTitle = document.createElement("p");
	firstPointTitle.innerHTML="Цель по HbA1c";
	firstPointTitle.style.cssText="position: absolute; color: darkblue; font-size: 25px; z-index: 3; top: 14%; left: 128%; width: max-content; margin: 0;";
	firstPoint.setAttribute("id","firstPoint");
	firstPoint.classList.add("point");
	firstPoint.style.cssText="width: 2.5%; height: 4.5%; top: 20%; left: 54.2%;";
	pointChilds(firstPoint);
	firstPoint.appendChild(firstPointTitle);
	FirstSlide.appendChild(firstPoint);

	var secondPoint = document.createElement("div"),
	secondPointTitle = document.createElement("p");
	secondPoint.setAttribute("id", "secondPoint");
	secondPoint.classList.add("point");
	secondPointTitle.innerHTML="Гипогликемия";
	secondPointTitle.style.cssText="position: absolute; color: darkblue; font-size: 25px; z-index: 3; top: -80%; left: -167%; width: max-content; margin: 0;";
	secondPoint.style.cssText="width: 1.8%; height: 3.5%; top: 41.2%; left: 29.2%;";
	pointChilds(secondPoint);
	secondPoint.appendChild(secondPointTitle);
	FirstSlide.appendChild(secondPoint);

	var thirdPoint = document.createElement("div"),
	thirdPointTitle=document.createElement("p");
	thirdPoint.setAttribute("id", "thirdPoint");
	thirdPoint.classList.add("point");
	thirdPoint.style.cssText="width: 1.8%; height: 3.5%; top: 68%; left: 31.2%;";
	thirdPointTitle.innerHTML="Осложнения СД2";
	thirdPointTitle.style.cssText="position: absolute; color: darkblue; font-size: 25px; z-index: 3; top: -91%; left: -179%; width: max-content; margin: 0;";
	pointChilds(thirdPoint);
	thirdPoint.appendChild(thirdPointTitle);
	FirstSlide.appendChild(thirdPoint);

	var fourthPoint = document.createElement("div"),
	fourthPointTitle = document.createElement("p");
	fourthPoint.setAttribute("id", "fourthPoint");
	fourthPoint.classList.add("point");
	fourthPoint.style.cssText="width: 2%; height: 3.5%; top: 69%; left: 59%;";
	fourthPointTitle.innerHTML="СС риски";
	fourthPointTitle.style.cssText="position: absolute; color: darkblue; font-size: 25px; z-index: 3; top: -91.2%; left: -74%; width: max-content; margin: 0;";
	pointChilds(fourthPoint);
	fourthPoint.appendChild(fourthPointTitle);
	FirstSlide.appendChild(fourthPoint);

	function pointChilds(parent){ //на уже созданных точках рисуем "центральную" и "динамическую" точки
		var staticPoint = document.createElement("div"),
		dynamicPoint = document.createElement("div");
		staticPoint.classList.add("staticPoint");
		dynamicPoint.classList.add("dynamicPoint");
		parent.appendChild(staticPoint);
		parent.appendChild(dynamicPoint);
	}

}
