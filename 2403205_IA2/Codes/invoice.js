const cart = JSON.parse(localStorage.getItem("cart")) || [];
const invoiceDate = new Date().toLocaleDateString();
let subtotal = 0;

if (cart.length > 0) {
    const invoiceItemsContainer = document.getElementById("invoice-items");

    	if (invoiceItemsContainer) {
             cart.forEach(item => {
             let price = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
             subtotal += price;

             const itemDiv = document.createElement("div");
             itemDiv.textContent = `${item.name} - ${price.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
             invoiceItemsContainer.appendChild(itemDiv);
    });
  }
}

const tax = subtotal * 0.14;
const total = subtotal + tax;

//Function to update invoice values with proper formatting
const updateElementText = (id, value) => {
     const element = document.getElementById(id);
     if (element) {
     element.textContent = value.toLocaleString("en-US", { minimumFractionDigits: 2 });
  }
};

updateElementText("invoice-date", invoiceDate);
updateElementText("subtotal", subtotal);
updateElementText("tax", tax);
updateElementText("total", total);

//Checkout Button click
document.getElementById("checkoutBtn").addEventListener("click", function() {
    // Display purchase success message
    const successMessage = document.getElementById("purchase-success");
    if (successMessage) {
         successMessage.style.display = "block";
    }

    //Clear the cart from localStorage after purchase
    localStorage.removeItem("cart");

    //hides the success message after a short delay or redirect
    setTimeout(() => {
        successMessage.style.display = "none";
        //redirect user
        window.location.href = "thank-you.html";
    }, 2000);  
});
