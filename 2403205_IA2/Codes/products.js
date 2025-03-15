//Initialize cart from localStorage if it exists
let cart = JSON.parse(localStorage.getItem("cart")) || [];

//Update the cart count display
const updateCartCount = () => {
     document.getElementById("cart-count").textContent = cart.length;
};

// Add event listeners to the "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
     button.addEventListener("click", function() {
          const productItem = this.closest(".product-item"); 
          const productName = productItem.querySelector("h3").textContent;
          const productPrice = productItem.querySelector("p").textContent; 
          const productImage = productItem.querySelector("img").getAttribute("src");
	  const productSizeSelect = productItem.querySelector(".size-select");
          const productSize = productSizeSelect ? productSizeSelect.value : ""; 	
	 
          // Push product data to the cart
          cart.push({ name: productName, price: productPrice, image: productImage, size: productSize });
        
          // Save the updated cart to localStorage
          localStorage.setItem("cart", JSON.stringify(cart));

          // Update the cart count
          updateCartCount();
  });
});

//Updates the cart count when the page loads
updateCartCount();

//Redirect to the cart page when the "Cart" button is clicked
document.getElementById("cartBtn").addEventListener("click", function() {
    window.location.href = "cart.html";
});
