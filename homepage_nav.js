document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("team-btn").addEventListener("click", function() {
        var popup = document.getElementById("team-popup");
        popup.style.display = popup.style.display === "block" ? "none" : "block";
    });


    document.getElementById("reg-btn").addEventListener("click", function() {
        var popup = document.getElementById("reg-popup");
        popup.style.display = popup.style.display === "block" ? "none" : "block";
    });


    document.getElementById("address-btn").addEventListener("click", function() {
        var popup = document.getElementById("address-popup");
        popup.style.display = popup.style.display === "block" ? "none" : "block";
    });
});
