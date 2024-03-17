document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signInForm");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        if (name.trim() === "" || mobile.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch('/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, mobile }),
            });

            // Check if the HTTP response status is "OK" before parsing as JSON
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                window.location.href = "homepage.html";
            } else {
                // Log the error or display a message to the user
                console.error("Error:", response.statusText);
                // Optionally, handle different response statuses or show a specific message
                alert("An error occurred. Please try again.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while sending your request. Please try again.");
        }
    });
});
