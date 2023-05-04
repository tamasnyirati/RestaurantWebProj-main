const menuSelection = document.getElementById("detailed-menu");
const appetizerBtnPressed = document.getElementById("appetizersBtn");
const mainCoursesBtnPressed = document.getElementById("mainCoursesBtn");
const dessertsBtnPressed = document.getElementById("dessertsBtn");
const beersBtnPressed = document.getElementById("beersBtn");
const winesBtnPressed = document.getElementById("winesBtn");
const drinksBtnPressed = document.getElementById("drinksBtn");

let fileContents;

let appetizerPath = 'txtfiles/appetizers.txt';
appetizerBtnPressed.addEventListener("click", () => TextfileReader(appetizerPath, "appetizersBtn"));

let MainCoursesPath = 'txtfiles/mainCourses.txt';
mainCoursesBtnPressed.addEventListener("click", () => TextfileReader(MainCoursesPath, "mainCoursesBtn"));

let dessertsPath = 'txtfiles/desserts.txt';
dessertsBtnPressed.addEventListener("click", () => TextfileReader(dessertsPath, "dessertsBtn"));

let beerPath = 'txtfiles/beers.txt';
beersBtnPressed.addEventListener("click", () => TextfileReader(beerPath, "beersBtn"));

let winesPath = 'txtfiles/wines.txt';
winesBtnPressed.addEventListener("click", () => TextfileReader(winesPath, "winesBtn"));

let drinksPath = 'txtfiles/drinks.txt';
drinksBtnPressed.addEventListener("click", () => TextfileReader(drinksPath, "drinksBtn"));

//FileReader
function TextfileReader(pathString, btnID) {
    fetch(pathString)
        .then(Response => Response.text())
        .then(data => {
            fileContents = data;
            menuSelection.innerHTML = fileContents;
        })
        .catch(error => console.error(error));

    const PressedBtn = document.getElementById(btnID);
}

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});