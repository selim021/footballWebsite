$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        event.preventDefault();
        
        var username = $("#username").val();
        var password = $("#password").val();
        
        // In a real scenario, you'd validate credentials against a server/database.
        // For this example, we'll use a simple hardcoded check.
        if (username === "user" && password === "password") {
            console.log("logged in ")
            localStorage.setItem("loggedInUser", username);
            window.location.href = "PP.html";
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});