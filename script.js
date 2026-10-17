const storeName = "Jeff's Fresh Fits";
const currentYear = new Date().getFullYear();

let runningCount = 0;

document.getElementById("store-name").textContent = storeName;
document.getElementById("store-display").textContent = storeName;

const products = document.querySelectorAll(".product-card");

products.forEach(function(product) {
    runningCount++;
});

document.getElementById("product-count").textContent = runningCount;

document.getElementById("copyright").textContent =
    "\u00A9 " + currentYear + " " + storeName;

console.log("Store Name:", storeName);
console.log("Current Year:", currentYear);
console.log("Total Products:", runningCount);

const storeRating = 4.5;
let ratingLabel;

if (storeRating >= 4) {
    ratingLabel = "Highly recommended";
} else if (storeRating >= 2.5) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you're nearby";
}

document.getElementById("rating-result").textContent =
    storeRating + "/5 - " + ratingLabel;

const productPrice = 699;
const budgetLimit = 1000;
const isOpen = true;

const isGoodOption = productPrice <= budgetLimit && isOpen;

const budgetMessage = isGoodOption
    ? "Good option right now"
    : "Maybe another time";

document.getElementById("budget-result").textContent = budgetMessage;

const isWithinWalkingDistance = true;

const distanceMessage = isWithinWalkingDistance
    ? "Walking distance"
    : "Better to commute";

document.getElementById("distance-result").textContent = distanceMessage;

console.log("Store Rating:", storeRating);
console.log("Budget Check:", isGoodOption);
console.log("Distance Check:", isWithinWalkingDistance);

document.querySelectorAll(".sidebar-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        const targetId = button.getAttribute("aria-controls");
        const links = document.getElementById(targetId);
        const arrow = button.querySelector(".arrow");

        button.setAttribute("aria-expanded", String(!isExpanded));
        links.hidden = isExpanded;

        if (arrow) {
            arrow.textContent = isExpanded ? "+" : "−";
        }
    });
});