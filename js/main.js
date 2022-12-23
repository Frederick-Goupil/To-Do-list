
document.getElementById("submit").onclick = function() {
    var text = document.getElementById("input");
    var li = "<li>" + text + "</li>";
    console.log(text + li)
    document.getElementById("list").appendChild(li);
}