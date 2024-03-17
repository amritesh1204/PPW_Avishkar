document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the Team Members button
    document.getElementById("team-btn").addEventListener("click", function() {
        var popup = document.getElementById("team-popup");
        popup.style.display = popup.style.display === "block" ? "none" : "block";
    });

    // Event listener for the Reg. No. button
    document.getElementById("reg-btn").addEventListener("click", function() {
        var popup = document.getElementById("reg-popup");
        popup.style.display = popup.style.display === "block" ? "none" : "block";
    });

    // Event listener for the Address button
    document.getElementById("address-btn").addEventListener("click", function() {
        var popup = document.getElementById("address-popup");
        popup.style.display = popup.style.display === "block" ? "none" : "block";
    });
});
