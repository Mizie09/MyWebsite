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
}
