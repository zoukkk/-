var Min = document.getElementsByClassName("min")[0];
var Max = document.getElementsByClassName("max")[0];
var Cover = document.getElementsByClassName("cover")[0];
Min.onmouseover = function() {
    Max.style.display = "block";
    Cover.style.display = "block";

}
Min.onmouseout = function() {
    Max.style.display = "none";
    Cover.style.display = "none";
}
Min.onmousemove = function(e) {
        var x = e.clientX - Min.offsetLeft - Cover.offsetWidth / 2;
        console.log(x);
        var y = e.clientY - Min.offsetTop - Cover.offsetHeight / 2;
        console.log(y);
        if (x <= 0) {
            x = 0;
        } else if (x > Min.offsetWidth - Cover.offsetWidth) {
            x = Min.offsetWidth - Cover.offsetWidth;

        }
        if (y <= 0) {
            y = 0;
        } else if (y > Min.offsetHeight - Cover.offsetHeight) {
            y = Min.offsetHeight - Cover.offsetHeight;
        }
        Cover.style.left = x + "px";
        Cover.style.top = y + "px";
        var img = document.getElementsByClassName("larger")[0];
        img.style.left = -2 * x + "px";
        img.style.top = -2 * y + "px";
    }
    // var img = document.getElementsByClassName("larger")[0];
    // img.style.left