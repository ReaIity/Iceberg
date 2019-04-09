
function createYearA(){
	var statistic = document.getElementById("statistic"),
	yearA = document.createElement("div"),
	leftSide = document.createElement("div"),
	center = document.createElement("div"),
	rightSide = document.createElement("div"),
	inSiders = [leftSide, center, rightSide];
	yearA.setAttribute("id", "yearA");
	yearA.classList.add("yearA");
	yearA.classList.add("years");
	leftSide.classList.add("side");
	rightSide.classList.add("side");
	center.classList.add("side");
	fillLeftSide(leftSide);
	fillCenter(center);
	fillRightSide(rightSide);
	for (var i = 0; i < inSiders.length; i++) {
		yearA.appendChild(inSiders[i]);
	}
	statistic.appendChild(yearA);

	function fillCenter(parent) {
		var zeroRow = document.createElement("div");
		zeroRow.innerHTML="<p style='font-size: 2em; margin: 4% 0 0 13%;'>Звенья патогенеза СД2</p>";
		var firstRow = document.createElement("div");
		firstRow.style.cssText="width: 100%; display: flex; flex-direction: column;";
		firstRow.innerHTML="<p style='font-size: 1.2em;'>1 β-клетки</p><div style='width: 16%; margin: 3% 0 0 41%; height: auto; border-radius: 40px; font-size: 3em; border: 1px solid white; text-align: center'>β</div>";
		
		var secondRow = document.createElement("div");
		secondRow.style.cssText="width: 40%; font-size: 1.5em; text-align: center; margin: 5% 30% 0 30%;";
		secondRow.innerHTML="&uarr;    &darr;";

		var thirdRow = document.createElement("div");
		thirdRow.style.cssText="display: flex; flex-direction: row; width: 100%; padding-left: 8%; margin-top: 5%;";
		var leftSideThirdRow = fillLeftRow(2, "инкретинового эффекта");
		var rightSideThirdRow = fillRightRow(3, "Деффект а-клеток");
		rightSideThirdRow.style.cssText="display: flex; flex-direction: column;";
		var gluckagon = document.createElement("div");
		gluckagon.innerHTML="<p style='text-align: left;'>&darr;</p><p style='text-align: left;'>&uarr; глюкагон</p>";
		rightSideThirdRow.appendChild(gluckagon);
		thirdRow.appendChild(leftSideThirdRow);
		thirdRow.appendChild(rightSideThirdRow);

		var fourthRow = document.createElement("div");
		fourthRow.style.cssText="width: 40%; font-size: 1.5em; text-align: center; margin: 5% 30% 0 30%;";
		fourthRow.innerHTML="&darr;    &darr;";

		var fifthRow = document.createElement("div");
		fifthRow.style.cssText="text-align: center; margin-top: 5%; font-size: 1.2em;";
		fifthRow.innerHTML="<p>Гипергликемия</p>";

		var sixRow = document.createElement("div");
		sixRow.style.cssText="width: 40%; font-size: 1.5em; text-align: center; margin: 5% 30% 0 30%;";
		sixRow.innerHTML="&uarr;    &darr;";

		var seventhRow = fillLastRow(11, "Почки","Kidneys");
		seventhRow.style.cssText="padding-left: 30%;";

		parent.appendChild(zeroRow);
		parent.appendChild(firstRow);
		parent.appendChild(secondRow);
		parent.appendChild(thirdRow);
		parent.appendChild(fourthRow);
		parent.appendChild(fifthRow);
		parent.appendChild(sixRow);
		parent.appendChild(seventhRow);


		function fillLastRow(number, organ, img){
			var row = document.createElement("div"),
			ld = document.createElement("div"),
			rd = document.createElement("div");
			row.classList.add("row");
			ld.classList.add("left-part-row");
			ld.innerHTML="<p class='left-part-row-p'>"+img+"</p>";
			rd.classList.add("right-part-row");
			rd.innerHTML="<p class='right-part-row-p' style='font-size: 1.5em; margin-top: 5%;'>"+number+"</p><p class='right-part-row-p'>"+organ+"</p>";
			row.appendChild(ld);
			row.appendChild(rd);
			return row;
		}

		function fillLeftRow(number, organ){
			var row = document.createElement("div"),
			ld = document.createElement("div");
			row.classList.add("row");
			ld.classList.add("right-part-row");
			ld.innerHTML="<p class='right-part-row-p' style='font-size: 1.5em; margin-top: 5%; text-align: right;'>"+number+"</p><p class='right-part-row-p' style='text-align: right; float: right; width: auto'>"+organ+"</p>";
			row.appendChild(ld);
			return row;
		}
		function fillRightRow(number, organ){
			var row = document.createElement("div"),
			rd = document.createElement("div");
			row.classList.add("row");
			rd.classList.add("right-part-row");
			rd.innerHTML="<p class='right-part-row-p' style='font-size: 1.5em; margin-top: 5%;'>"+number+"</p><p class='right-part-row-p'>"+organ+"</p>";
			row.appendChild(rd);
			return row;
		}
	}

	function fillLeftSide(parent){
			var firstRow = fillRow(8, "Микрофлора кишечника", "Flora");
			firstRow.style.cssText="margin: 20% 0 0 15%;";
			var secondRow = fillRow(9, "Нарушение имунной регуляции/воспаление", "Immunity");
			var thirdRow = document.createElement("div");
			thirdRow.innerHTML="<p style='float: right;'>&darr; амилин</p>";
			thirdRow.style.cssText="width: 50%; margin: 10% 0 0 43%";

			var fourthRow = document.createElement("div");
			fourthRow.innerHTML="&darr;";
			fourthRow.style.cssText="width: 30%; margin-left: 70%; font-size: 1.5em;";

			var fifthRow = fillRow(10, "Желудок", "Stomach");

			parent.appendChild(firstRow);
			parent.appendChild(secondRow);
			parent.appendChild(thirdRow);
			parent.appendChild(fourthRow);
			parent.appendChild(fifthRow);

		function fillRow(number, organ, img){
			var row = document.createElement("div"),
			ld = document.createElement("div"),
			rd = document.createElement("div");
			row.classList.add("row");
			rd.classList.add("left-part-row");
			ld.classList.add("right-part-row");
			ld.innerHTML="<p class='right-part-row-p' style='font-size: 1.5em; margin-top: 5%; text-align: right;'>"+number+"</p><p class='right-part-row-p' style='text-align: right; float: right; width: auto'>"+organ+"</p>";
			rd.innerHTML="<p class='left-part-row-p'>"+img+"</p>";
			row.appendChild(ld);
			row.appendChild(rd);
			return row;
		}
	}


	function fillRightSide(parent){
		var firstRow = fillRow(7, "Головной мозг", "Brain");
		firstRow.style.cssText="margin: 20% 0 0 15%;";


		var sd = document.createElement("div");
		sd.innerHTML="<p>&uarr; &darr;</p>";
		sd.style.cssText="width: 100%; height: auto; text-align: center; font-size: 1.5em; margin: 5% 0 5% 0";

		var td = document.createElement("div"),
		tds = document.createElement("div"),
		tdt, tdf, tdv;
		td.classList.add("third-div");
		tds.innerHTML="<p style='text-align: center; margin-top: 10%;'>Инсулинорезистентность</p>";
		tdt = fillRow(6, "Печень", "Liver");
		tdf = fillRow(5, "Мышцы", "Musc");
		tdv = fillRow(4, "Жировые клетки", "Fat");
		td.appendChild(tds);
		td.appendChild(tdt);
		td.appendChild(tdf);
		td.appendChild(tdv);

		parent.appendChild(firstRow);
		parent.appendChild(sd);
		parent.appendChild(td);

		function fillRow(number, organ, img){
			var row = document.createElement("div"),
			ld = document.createElement("div"),
			rd = document.createElement("div");
			row.classList.add("row");
			ld.classList.add("left-part-row");
			ld.innerHTML="<p class='left-part-row-p'>"+img+"</p>";
			rd.classList.add("right-part-row");
			rd.innerHTML="<p class='right-part-row-p' style='font-size: 1.5em; margin-top: 5%;'>"+number+"</p><p class='right-part-row-p'>"+organ+"</p>";
			row.appendChild(ld);
			row.appendChild(rd);
			return row;
		}
	}
}