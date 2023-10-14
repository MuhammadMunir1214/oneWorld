document.addEventListener("DOMContentLoaded", function() {
    var countries = document.querySelectorAll('.country');
    var totalCountries = countries.length;
    var radius = '40%'; // Adjust this value to set the circle size.

    for (var i = 0; i < totalCountries; i++) {
        var angle = i * (360 / totalCountries);
        var x = 50 + Math.sin(angle * (Math.PI / 180)) * parseInt(radius, 10) + '%';
        var y = 50 + Math.cos(angle * (Math.PI / 180)) * -parseInt(radius, 10) + '%';

        countries[i].style.left = x;
        countries[i].style.top = y;
    }
});
