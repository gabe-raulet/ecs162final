
var nextButton  = document.getElementById("next");
let title       = document.getElementById("title");
let category    = document.getElementById("category");
let description = document.getElementById("description");

nextButton.addEventListener("click", function() {
    sessionStorage.setItem("savedTitle", title.value);
    sessionStorage.setItem("savedCategory", category.value);
    sessionStorage.setItem("savedDescription", description.value);
    window.location = "http://localhost:3000/Screen4";
});

