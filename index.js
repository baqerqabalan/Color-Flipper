document.addEventListener('DOMContentLoaded', function () {
    var colorDisplay = document.getElementById('color-display');
    var colors = ["#e21cdf", "#1c21e2", "#1ce286", "#34e2e8", "#a334e8", "#e8343f"];
    var currentColorIndex = 0;
    function flipColors() {
        colorDisplay.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }
    ;
    setInterval(flipColors, 100);
});
