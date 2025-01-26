document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html') // Load the external menu HTML
      .then(response => response.text())
      .then(data => {
        document.getElementById('menu-container').innerHTML = data;
        // Initialize any JavaScript functionality for the menu if needed
        setupMenu(); // You can define the setup function for any interactivity
      })
      .catch(error => console.error('Error loading menu:', error));
  });
  
  function setupMenu() {
    // Handle active link functionality
   
  
    // You can add any other menu-related JavaScript functionality here.
  }
