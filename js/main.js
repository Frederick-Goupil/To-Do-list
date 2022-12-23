
document.getElementById("submit").onclick = function() {
    var text = document.getElementById("input").ariaValueNow;
    var li = "<li>" + String(text) + "</li>";
    console.log(text + li)
    document.getElementById("list").appendChild(li);
}