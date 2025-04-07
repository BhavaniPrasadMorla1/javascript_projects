
const decreasebtn = document.getElementById("decreasebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const countLabel = document.getElementById("countLabel1");

let count = 0;

// Increase button functionality
increasebtn.onclick = function() {
    count += 1;
    countLabel.textContent = count;
};

// Decrease button functionality
decreasebtn.onclick = function() {
    count -= 1;
    countLabel.textContent = count;
};

// Reset button functionality
resetbtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
};
