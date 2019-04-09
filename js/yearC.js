
function createYearC(){
	var statistic = document.getElementById("statistic"),
	yearC = document.createElement("div");
	yearC.classList.add("yearC");
	yearC.setAttribute("id", "yearC");
	yearC.classList.add("years");

	fillYearC(yearC);
	statistic.appendChild(yearC);

	function fillYearC(parent) {
		var firstRow = document.createElement("div");
		firstRow.innerHTML="<p style='font-size: 2em; margin: 7% 0 0 13%;'>Звенья патогенеза СД2</p>";

		var secondRow = document.createElement("div"); 
		secondRow.style.cssText="width: 100%; display: flex; flex-direction: column; margin-top: 4%;";
		secondRow.innerHTML="<p style='font-size: 1.4em; margin: 0 0 0 45%;'>1 β-клетки</p><div style='width: 11%; margin: 1% 0 0 44%; height: auto; border-radius: 40px; font-size: 3em; border: 1px solid white; text-align: center'>β</div>";

		var thirdRow = document.createElement("div");
		thirdRow.style.cssText="width: 100%; display: flex; flex-direction: row; margin-top: 5%;";

		createThirdRow(thirdRow);


		parent.appendChild(firstRow);
		parent.appendChild(secondRow);
		parent.appendChild(thirdRow);

		function createThirdRow(thirdRow){
			var leftDiv = document.createElement("div");
			leftDiv.style.cssText="display: flex; flex-direction: column; width: 33%; font-size: 1.4em;";
			leftDiv.innerHTML="<p style='font-size: 1.5em; text-align: center;'>2</p><p style='text-align: center; margin-bottom: 9%;'>Мышцы</p><div style='width: max-content; margin-left: 40%;'>Muscles &rarr;</div>";
			thirdRow.appendChild(leftDiv);

			var centerDiv = document.createElement("div");
			centerDiv.style.cssText="width: 33%;";
			centerDiv.innerHTML="<p style='text-align: center; font-size: 1.4em; margin-top: 15%;'>&darr;</p><div><p style='font-size: 1.4em; text-align: center; margin-top: 5%'>Гипергликемия</p></div>";
			thirdRow.appendChild(centerDiv);

			var rightDiv = document.createElement("div");
			rightDiv.style.cssText="display: flex; flex-direction: column; width: 33%; font-size: 1.4em;";
			rightDiv.innerHTML="<p style='font-size: 1.5em; text-align: center;'>3</p><p style='text-align: center; margin-bottom: 9%;'>Печень</p><div style='width: max-content; margin-left: 40%;'>&larr; Liver</div>";
			thirdRow.appendChild(rightDiv);
		}
	}
}