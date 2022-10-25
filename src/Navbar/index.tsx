import React, { useEffect, useRef } from "react";
import "./style.scss";

const Navbar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navBarBgRef = useRef<HTMLInputElement | null>(null);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement> & { target: { href: string } }
  ) => {
    e.preventDefault();
    // console.log(e.target.href.split("#"));
    const href = e.target.href.split("#").pop() ?? "";
    // console.log(href);
    window.location.hash = href;
    if (inputRef?.current) {
      inputRef.current.checked = false;
    }
  };

  return (
    <div className="nav-bar" id="nav-bar">
      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        ref={inputRef}
      />
      <label className="menu-btn-container" htmlFor="menu-toggle">
        <div className="menu-btn" />
      </label>
      <ul className="menu">
        <li>
          <a target="_self" href="#about-me" onClick={handleLinkClick}>
            About Me
          </a>
        </li>
        <li>
          <a target="_self" href="#experience" onClick={handleLinkClick}>
            Experience
          </a>
        </li>
        <li>
          <a target="_self" href="#education" onClick={handleLinkClick}>
            Education
          </a>
        </li>
        <li>
          <a target="_self" href="#projects" onClick={handleLinkClick}>
            Projects
          </a>
        </li>
        <li>
          <a target="_self" href="#blogs" onClick={handleLinkClick}>
            Blogs
          </a>
        </li>
      </ul>
      <div className="bg" ref={navBarBgRef}></div>
    </div>
  );
};

export default Navbar;
