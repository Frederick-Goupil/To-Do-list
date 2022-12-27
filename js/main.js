
document.getElementById("submit").onclick = function() {
    var node = document.createElement("Li");
    var task = document.getElementById("input").value;
    var tasknode = document.createTextNode(task);
    node.appendChild(tasknode);
    document.getElementById("list").appendChild(node);
}