document.getElementById("yesButton").addEventListener("click", function() {
    window.location.href = "next.html"; // Redirect to next page
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});