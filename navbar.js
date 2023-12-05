// navbar.js
function loadNavbar() {
    const navbar = `
      <nav>
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="product.html">Product</a></li>
          <li><a href="cart.html">Cart</a></li>
        </ul>
      </nav>
    `;
    document.getElementById('navbar').innerHTML = navbar;
  }
  
  export { loadNavbar };
  