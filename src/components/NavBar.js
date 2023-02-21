import "./NavBar.css";

const NavBar = ({ title }) => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="page-links">
          <h1 className="logo">
            <a href="/">{title}</a>
          </h1>
          <ul>
            <li>
              <a href="/" className="current">
                Home
              </a>
            </li>
            <li>
              <a href="/portifolio">Portifolio</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div id="social-links">
          <ul>
            <li>
              <a href="https://google.com">G</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
