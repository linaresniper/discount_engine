function totalPrice() {
    let purchaseAmount = Number(document.getElementById("purchaseAmount").value);
    let hasCoupon = document.getElementById("hasCoupon").value === "true";

    if (hasCoupon == true) {
        let total = purchaseAmount - (purchaseAmount * 0.30);
        document.getElementById("totalPrice").textContent =
        "premium discount applied (30%). total price: $" + total;

    } else if (purchaseAmount > 100) {
        let total = purchaseAmount - (purchaseAmount * 0.20);
        document.getElementById("totalPrice").textContent =
        "your discount is 20%. total price: $" + total;

    } else if (purchaseAmount > 50) {
        let total = purchaseAmount - (purchaseAmount * 0.10);
        document.getElementById("totalPrice").textContent =
        "your discount is 10%. total price: $" + total;

    } else {
        document.getElementById("totalPrice").textContent =
        "no discount. total price: $" + purchaseAmount;
    }
}