var statistic = document.getElementById("statistic"),
    slider = document.createElement("input");
    slider.setAttribute("type", "range");
    slider.setAttribute("min", "1");
    slider.setAttribute("max", "3");
    slider.setAttribute("value", "3");
    slider.setAttribute("step", "1");
    slider.classList.add("slider");

    document.addEventListener('DOMContentLoaded', function() {
      var yearA = document.getElementById("yearA");
      var yearC = document.getElementById("yearC");
      var yearB = document.getElementById("yearB");
        yearC.style.cssText="display: none";
        yearB.style.cssText="display: none";
        yearA.style.cssText="display: flex";
    });
    slider.addEventListener("change", function(){
      var yearA = document.getElementById("yearA");
      var yearC = document.getElementById("yearC");
      var yearB = document.getElementById("yearB");
      if(this.value == "1"){
        yearA.style.cssText="display: none;";
        yearC.style.cssText="display: flex";
        yearB.style.cssText="display: none;";
      } else if(this.value == "3"){
        yearC.style.cssText="display: none";
        yearA.style.cssText="display: flex";
        yearB.style.cssText="display: none;";
      } else if(this.value == "2") {
        yearC.style.cssText="display: none";
        yearA.style.cssText="display: none";
        yearB.style.cssText="display: flex;";
      }
    });
    statistic.appendChild(slider);

    var yearCtitle = document.createElement("p");
    yearCtitle.style.cssText="width: max-content; position: absolute; color: white; top: 90%; left: 13%;";
    yearCtitle.innerHTML="1998";

    var yearBtitle = document.createElement("p");
    yearBtitle.style.cssText="width: max-content; position: absolute; color: white; top: 90%; left: 47.5%;";
    yearBtitle.innerHTML="2009";

    var yearAtitle = document.createElement("p");
    yearAtitle.style.cssText="width: max-content; position: absolute; color: white; top: 90%; left: 82%;";
    yearAtitle.innerHTML="2016";

    statistic.appendChild(yearCtitle);
    statistic.appendChild(yearBtitle);
    statistic.appendChild(yearAtitle);
