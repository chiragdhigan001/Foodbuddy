import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="food">Food</span>
        <span className="buddy">Buddy</span>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="">Order</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="/Signin" target="blank">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
