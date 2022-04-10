import React from "react";

const About = () => {
  return (
    <div>
      <nav
        id="navbar-example3"
        ClassName="navbar navbar-light bg-light flex-column align-items-stretch p-3"
      >
        <a ClassName="navbar-brand" href="#">
          Navbar
        </a>
        <nav ClassName="nav nav-pills flex-column">
          <a ClassName="nav-link" href="#item-1">
            Item 1
          </a>
          <nav ClassName="nav nav-pills flex-column">
            <a ClassName="nav-link ms-3 my-1" href="#item-1-1">
              Item 1-1
            </a>
            <a ClassName="nav-link ms-3 my-1" href="#item-1-2">
              Item 1-2
            </a>
          </nav>
          <a ClassName="nav-link" href="#item-2">
            Item 2
          </a>
          <a ClassName="nav-link" href="#item-3">
            Item 3
          </a>
          <nav ClassName="nav nav-pills flex-column">
            <a ClassName="nav-link ms-3 my-1" href="#item-3-1">
              Item 3-1
            </a>
            <a ClassName="nav-link ms-3 my-1" href="#item-3-2">
              Item 3-2
            </a>
          </nav>
        </nav>
      </nav>

      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example3"
        data-bs-offset="0"
        tabindex="0"
      >
        <h4 id="item-1">Item 1</h4>
        <p>...</p>
        <h5 id="item-1-1">Item 1-1</h5>
        <p>...</p>
        <h5 id="item-1-2">Item 1-2</h5>
        <p>...</p>
        <h4 id="item-2">Item 2</h4>
        <p>...</p>
        <h4 id="item-3">Item 3</h4>
        <p>...</p>
        <h5 id="item-3-1">Item 3-1</h5>
        <p>...</p>
        <h5 id="item-3-2">Item 3-2</h5>
        <p>...</p>
      </div>
    </div>
  );
};

export default About;
