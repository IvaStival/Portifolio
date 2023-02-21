import "./NavHome.css";

const NavHome = () => {
  return (
    <div className="main-links">
      <div>
        <h1 className="logo">
          <a href="/">Ivã Stival</a>
        </h1>
      </div>
      <div className="page-links">
        <ul>
          <a href="/">Home</a>
        </ul>
        <ul>
          <a href="/portifolio">Portifolio</a>
        </ul>
        <ul>
          <a href="/about">About</a>
        </ul>
      </div>
      <div className="social">
        <ul>
          <a href="https://facebook.com">F</a>
        </ul>
        <ul>
          <a href="https://instagram.com">I</a>
        </ul>
      </div>
    </div>
  );
};

export default NavHome;
