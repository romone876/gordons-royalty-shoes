let cart = JSON.parse(localStorage.getItem("cart")) || [];

const updateCart = () => {
	const cartContainer = document.getElementById("cart-items");
    	cartContainer.innerHTML = ""; // Clear previous items

    	if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    	}

	let totalPrice = 0;

    	cart.forEach((item, index) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
        totalPrice += price;

        //Creates item container
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        //Image 
        const itemImage = document.createElement("img");
        itemImage.src = item.image; // Use stored image URL
        itemImage.alt = item.name;
        itemImage.classList.add("cart-image");

        //Creates text for item
        const itemText = document.createElement("span");
        itemText.textContent = `${item.name} (Size: US ${item.size}) - $${price.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

        //Creates remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", () => {
            cart.splice(index, 1); // Remove item from cart
            localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
            updateCart(); // Refresh cart display
        });

        //Appends items
        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemText);
        itemDiv.appendChild(removeButton);
        cartContainer.appendChild(itemDiv);
    });

    //Update total price
    document.getElementById("total-price").textContent = totalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 });
};

//Initialize cart on the page 
updateCart();

//Redirect to checkout page
document.getElementById("checkoutBtn").addEventListener("click", function() {
    window.location.href = "invoice.html"; // Redirect to invoice page
});
