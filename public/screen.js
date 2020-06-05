
let title       = document.getElementById("title");
let category    = document.getElementById("category");
let description = document.getElementById("description");
let date        = document.getElementById("date");
let time        = document.getElementById("time");

if (sessionStorage.getItem("autosave")) {
    title.value       = sessionStorage.getItem("autosave");
    catgeory.value    = sessionStorage.getItem("autosave");
    description.value = sessionStorage.getItem("autosave");
    date.value        = sessionStorage.getItem("autosave");
    time.value        = sessionStorage.getItem("autosave");
}

field.addEventListener("change", function() {
    sessionStorage.setItem("autosave", title.value);
    sessionStorage.setItem("autosave", catgeory.value);
    sessionStorage.setItem("autosave", description.value);
    sessionStorage.setItem("autosave", date.value);
    sessionStorage.setItem("autosave", time.value);
});
