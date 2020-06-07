
var nextButton = document.getElementById("next");

let title       = document.getElementById("title");
let category    = document.getElementById("category");
let description = document.getElementById("description");

nextButton.addEventListener("click", function() {
    sessionStorage.setItem("savedTitle", title.value);
    sessionStorage.setItem("savedCategory", category.value);
    sessionStorage.setItem("savedDescription", description.value);
    window.location = "http://localhost:3000/Screen4";
});






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



