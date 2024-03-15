document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signInForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        if (name.trim() === "" || mobile.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        window.location.href = "homepage.html"; 
    });
});
