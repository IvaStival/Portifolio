import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", fixNav);

    return () => {
      window.removeEventListener("scroll", fixNav);
    };
  }, []);

  const fixNav = (e) => {
    if (window.scrollY > navRef.current.offsetHeight + 150) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <nav ref={navRef} className={`nav ${active ? "active" : ""}`}>
      <div className="container">
        <h1 className="logo">
          <a href="/index.html">My Website</a>
        </h1>
        <ul>
          <li>
            <a href="/" className="current">
              Home
            </a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
