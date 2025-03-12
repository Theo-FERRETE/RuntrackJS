window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY; 
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight; 
    let scrollPercent = (scrollTop / scrollHeight) * 100; 

    // Conversion du pourcentage allant de rouge à vert
    let red = Math.max(255 - (scrollPercent * 2.55), 0);
    let green = Math.min(scrollPercent * 2.55, 255);
    let footer = document.getElementById("footer");

    footer.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
});
