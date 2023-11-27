// Your custom JavaScript for order functionality goes here
function orderNow(pizzaName, price) {
  // Display order summary in the modal
  const orderDetails = `You added ${pizzaName} to your cart. Total Price: $${price.toFixed(
    2
  )}`;
  document.getElementById("orderDetails").innerText = orderDetails;

  // Show the modal
  const orderModal = new bootstrap.Modal(
    document.getElementById("orderModal"),
    {
      keyboard: false,
    }
  );
  orderModal.show();
}

// Function to handle adding items to the cart
function addToCart(pizzaName, price) {
  // Check if the user is logged in
  if (isLoggedIn()) {
    // Display order summary in the modal
    const orderDetails = `You added ${pizzaName} to your cart. Total Price: $${price.toFixed(
      2
    )}`;
    document.getElementById("orderDetails").innerText = orderDetails;

    // Show the order modal
    const orderModal = new bootstrap.Modal(
      document.getElementById("orderModal"),
      {
        keyboard: false,
      }
    );
    orderModal.show();
  } else {
    // If not logged in, show the login modal
    const loginModal = new bootstrap.Modal(
      document.getElementById("loginModal"),
      {
        keyboard: false,
      }
    );
    loginModal.show();
  }
}

// Function to check if the user is logged in (dummy function)
function isLoggedIn() {
  // Add your login status checking logic here
  // For simplicity, returning true for now
  return true;
}

// Function to handle the login process (dummy function)
function login() {
  // Add your login logic here
  // For simplicity, just close the login modal for now
  const loginModal = new bootstrap.Modal(
    document.getElementById("loginModal"),
    {
      keyboard: false,
    }
  );
  loginModal.hide();

  // After successful login, you can execute the addToCart function again
  // to add the item to the cart
}
