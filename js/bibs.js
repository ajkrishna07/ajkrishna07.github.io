function togglebib(blockID) {
    var x = document.getElementById(blockID);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}