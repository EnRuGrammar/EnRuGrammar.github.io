var body = document.body;
var leftC, topC;
var count = +116;
var string = [];
var print = document.getElementById("printButton");

body.onmousedown = function (e) {
    leftC = 710;//e.pageX - +20;
    topC = e.pageY - +20;

    var teg = "#divName_" + count + "{left: " + leftC + "px; top: " + topC + "px;}";
    var copyField = document.getElementById("coords");
    copyField.value = teg;
    $(function () {
        $('#coords')[0].select();
        document.execCommand('copy');
    });
    document.getElementById("page").value = count.toString();
    string.push(teg);
    count++;
}

print.onclick = function () {
    for (var i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
};