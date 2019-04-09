function createYearB(){
	var statistic = document.getElementById("statistic");
	yearB = document.createElement("div");
	yearB.classList.add("yearB");
	yearB.setAttribute("id", "yearB");
	yearB.classList.add("years");

	fillYearB(yearB);
	statistic.appendChild(yearB);

function fillYearB(parent) {
	var title = document.createElement("div");
	title.innerHTML="Смертельный октет";
	title.style.cssText="color: white; font-size: 3em; height: 10%;";
	parent.appendChild(title);


	var thirdRow = document.createElement("div"),
	brain = document.createElement("div"),
	liver = document.createElement("div"),
	muscles = document.createElement("div");

	thirdRow.classList.add("third-row-year-B");

	muscles.style.cssText="width: 22%; height: 100%; margin-left: 0.7%;";
	var musclesCircle = document.createElement("div"),
	musclesTitle = document.createElement("p");

	musclesCircle.style.cssText="width: 20%; height: 46%; margin: 0 25% 0 33%; border: 1px solid white; border-radius: 45px;";
	musclesTitle.innerHTML="5 мышцы";
	musclesTitle.style.cssText="text-align: center; width: 30%; margin: 7% 29%; font-size: 1.2em;";

	muscles.appendChild(musclesCircle);
	muscles.appendChild(musclesTitle);

	liver.style.cssText="width: 22%; height: 100%; margin-left: 0.7%;";
	var liverCircle = document.createElement("div"),
	liverTitle = document.createElement("p");

	liverCircle.style.cssText="width: 20%; height: 46%; margin: 0 25% 0 33%; border: 1px solid white; border-radius: 45px;";
	liverTitle.innerHTML="6 печень";
	liverTitle.style.cssText="text-align: center; width: 30%; margin: 7% 29%; font-size: 1.2em;";

	liver.appendChild(liverCircle);
	liver.appendChild(liverTitle);

	brain.style.cssText="width: 22%; height: 100%; margin-left: 16.7%;";
	var brainCircle = document.createElement("div"),
	brainTitle = document.createElement("p");

	brainCircle.style.cssText="width: 20%; height: 46%; margin: 0 25% 0 33%; border: 1px solid white; border-radius: 45px;";
	brainTitle.innerHTML="7 головной мозг";
	brainTitle.style.cssText="text-align: center; width: 30%; margin: 7% 29%; font-size: 1.2em;";

	brain.appendChild(brainCircle);
	brain.appendChild(brainTitle);

	thirdRow.appendChild(brain);
	thirdRow.appendChild(liver);
	thirdRow.appendChild(muscles);

	var secondRow = document.createElement("div"),
	kidneys = document.createElement("div"),
	hypergl = document.createElement("div"),
	fat = document.createElement("div");

	secondRow.classList.add("second-row-year-B");

	fat.style.cssText="display: flex; flex-direction: row; width: 15%; padding-top: 6%; padding-left: 25%;";
	var fatTitle = document.createElement("p");
	fatTitle.style.cssText="text-align: center; margin: 0; font-size: 1.24em; width: 20%;";
	fatTitle.innerHTML="4 жир";

	var fatCircle = document.createElement("div");
	fatCircle.classList.add('circle-sr');

	var fatArrow = document.createElement("p");
	fatArrow.style.cssText="font-size: 1.5em; margin: 0; margin: 4% 0 0 1%; height: 27%";
	fatArrow.innerHTML=" &larr;";

	fat.appendChild(fatArrow);
	fat.appendChild(fatCircle);
	fat.appendChild(fatTitle);



	hypergl.classList.add('hypergl');

	var downArrowRow = document.createElement("div");
	downArrowRow.style.cssText="display: flex; flex-direction: row";
	downArrowRow.innerHTML="<p style='margin: 0 0 0 27%; text-align: right; font-size: 1.4em;'>&darr;</p><p style='margin: 0 55%; text-align: center; font-size: 1.4em;'>&darr;</p><p style='margin: 0; font-size: 1.4em; text-align: left'>&darr;</p>";

	hypergl.appendChild(downArrowRow);
	var hyperglikemia = document.createElement("div");
	hyperglikemia.style.cssText="border: 1px solid white; width: 150%; height: 350%; margin: 6%; margin-left: 0%; padding-left: 5%";
	hyperglikemia.innerHTML="<p style='margin: 3% 37%; font-size: 1.6em'>Гипергликемия<p>";
	hypergl.appendChild(hyperglikemia);

	var upArrowRow = document.createElement("div");
	upArrowRow.style.cssText="display: flex; flex-direction: row";
	upArrowRow.innerHTML="<p style='margin: 0 0 0 27%; text-align: right; font-size: 1.4em;'>&uarr;</p><p style='margin: 0 55%; text-align: center; font-size: 1.4em;'>&uarr;</p><p style='margin: 0; font-size: 1.4em; text-align: left'>&uarr;</p>";
	hypergl.appendChild(upArrowRow);


	kidneys.style.cssText="display: flex; flex-direction: row; width: 15%; padding-top: 6%;";
	var kidneysTitle = document.createElement("p");
	kidneysTitle.style.cssText="text-align: center; margin: 0; font-size: 1.24em; width: 32%; height: 129%";
	kidneysTitle.innerHTML="8 почки";

	var kidneysCircle = document.createElement("div");
	kidneysCircle.classList.add('circle-sr');

	var kidneysArrow = document.createElement("p");
	kidneysArrow.style.cssText="font-size: 1.5em; margin: 0; margin: 4% 0 0 1%; height: 30%";
	kidneysArrow.innerHTML=" &rarr;";

	kidneys.appendChild(kidneysTitle);
	kidneys.appendChild(kidneysCircle);
	kidneys.appendChild(kidneysArrow);

	secondRow.appendChild(kidneys);
	secondRow.appendChild(hypergl);
	secondRow.appendChild(fat);



	var firstRow = document.createElement("div"),
	incretin = document.createElement("div"),
	bCells = document.createElement("div"),
	aCells = document.createElement("div");

	firstRow.classList.add("first-row-year-B");

	incretin.style.cssText="display: flex; flex-direction: row;";
	var incretinTitle = document.createElement("p");
	incretinTitle.style.cssText="width: 64%; text-align: right; font-size: 1em; margin: 0; padding: 6% 4% 0 0;";
	incretinTitle.innerHTML="инкретиновый эффект";
	incretin.appendChild(incretinTitle);

	var incretinCircle = document.createElement("div");
	incretinCircle.classList.add('circle');
	incretinCircle.innerHTML="2";
	incretin.appendChild(incretinCircle);

	bCells.style.cssText="display: flex; flex-direction: column; width: 40%";
	bCells.innerHTML="<p style='margin: 0; text-align: center; padding-left: 16%;'>1</p><p style='font-size: 1.2em; margin: 0; text-align: center; padding-left: 16%;'>β-клетки</p><div style='width: 11%; margin: 0 0 0 53%; height: auto; border-radius: 40px; font-size: 3em; border: 1px solid white; text-align: center;'>β</div>";

	aCells.style.cssText="display: flex; flex-direction: row;";
	var aCellsTitle = document.createElement("p");
	aCellsTitle.style.cssText="width: 57%; text-align: right; font-size: 1em; margin: 0; padding-top: 6%;";
	aCellsTitle.innerHTML="деффект α-клеток";

	var aCellsCircle = document.createElement("div");
	aCellsCircle.classList.add('circle-3');
	aCellsCircle.innerHTML="3";
	aCells.appendChild(aCellsCircle);
	aCells.appendChild(aCellsTitle);


	firstRow.appendChild(incretin);
	firstRow.appendChild(bCells);
	firstRow.appendChild(aCells);

	parent.appendChild(firstRow);
	parent.appendChild(secondRow);
	parent.appendChild(thirdRow);
	}
}			