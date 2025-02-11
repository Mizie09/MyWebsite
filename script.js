let size = 20; // Initial font size of No button

function answer(choice) {
    let response = document.getElementById("response");

    if (choice === "yes") {
        response.innerHTML = "Yay! ❤️ Let's celebrate!";
    }
}

function moveButton() {
    let button = document.getElementById("noBtn");
    let x = Math.random() * (window.innerWidth - 150); // Random position within window width
    let y = Math.random() * (window.innerHeight - 150); // Random position within window height
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    // Decrease button size
    if (size > 5) { // Prevent it from disappearing completely
        size -= 2;
        button.style.fontSize = `${size}px`;
        button.style.padding = `${size / 2}px`;
    }
}
