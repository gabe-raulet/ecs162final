
var submitButton = document.getElementById("submit");

submitButton.addEventListener('click', () => {
    var xhr = new XMLHttpRequest;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let loc  = document.getElementById("location").value;
    let data = {"date": date, "time": time, "location": loc};
    xhr.open("POST", "/newItem");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("Load", function() {
        console.log("Loaded");
        if (xhr.status == 200) {
            console.log(xhr.responseText);
            date.value = null;
            time.value = null;
            loc.value = null;
        } else {
            console.log(xhr.responseText);
        }
    })
    xhr.send(JSON.stringify(data));
});
