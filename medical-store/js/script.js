// Simulated user login
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home
    } else {
        alert("Please enter email and password!");
    }
}

// Simulated payment processing
function processPayment() {
    alert("Payment successful! Your order is placed.");
    window.location.href = "order-tracking.html";
}

// Add items to cart (simplified)
function addToCart(item, price) {
    alert(item + " added to cart!");
}
