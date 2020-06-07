
var nextButton = document.getElementById("next");

if (nextButton != null) {
    nextButton.addEventListener('click', () => {
        window.location = "http://localhost:3000/Screen4";
        // var xhr = new XMLHttpRequest();
        // xhr.open("GET", "/Screen4", true);
        // xhr.onloadend = function(e) {
            // window.location = "http://localhost:3000/Screen4";
        // }
        // xhr.send();
    });
}


let title       = document.getElementById("title");
let category    = document.getElementById("category");
let description = document.getElementById("description");

// let date        = document.getElementById("date");
// let time        = document.getElementById("time");

// if (sessionStorage.getItem("autosave")) {
    // title.value       = sessionStorage.getItem("autosave");
    // category.value    = sessionStorage.getItem("autosave");
    // description.value = sessionStorage.getItem("autosave");
    // date.value        = sessionStorage.getItem("autosave");
    // time.value        = sessionStorage.getItem("autosave");
// }

// title.addEventListener("change", function() {
    // console.log("session storing change to title");
    // sessionStorage.setItem("autosave", title.value);
// });

// category.addEventListener("change", function() {
    // console.log("session storing change to category");
    // sessionStorage.setItem("autosave", category.value);
// });

// description.addEventListener("change", function() {
    // console.log("session storing change to description");
    // sessionStorage.setItem("autosave", description.value);
// });



