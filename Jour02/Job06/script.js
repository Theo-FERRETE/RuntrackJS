const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
];

let userInput = [];

document.addEventListener("keydown", function(event) {
    userInput.push(event.key);
    userInput = userInput.slice(-konamiCode.length); 

    if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
        document.body.classList.add("konami-active"); 
    }
});
