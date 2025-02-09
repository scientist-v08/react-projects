import './header.css';

function Header() {
  return (
    <header>
      <img src="/src/assets/react-logo.png" width="40px" alt="react-logo" />
      <nav>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
