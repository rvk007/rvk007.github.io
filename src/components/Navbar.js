import React from 'react';
import logo from '../images/logo.jpeg';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <a class="navbar-brand" href="/">
          <img class="App-logo rounded" src={logo} alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ml-auto">
            <div>
              <li class="nav-item">
                <a
                  class="nav-link px-4"
                  href="/"
                  style={{ color: 'whitesmoke ' }}
                >
                  About
                  {window.location.pathname === '/' ? (
                    <hr class="nav-hr" />
                  ) : null}
                </a>
              </li>
            </div>
            <li class="nav-item">
              <a
                class="nav-link px-4"
                href="/Experience"
                style={{ color: 'whitesmoke ' }}
              >
                Experience
                {window.location.pathname.includes('/Experience') ? (
                  <hr class="nav-hr" />
                ) : null}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link px-4"
                href="/Projects"
                style={{ color: 'whitesmoke ' }}
              >
                Projects
                {window.location.pathname.includes('/Projects') ? (
                  <hr class="nav-hr" />
                ) : null}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link px-4"
                href="/Publication"
                style={{ color: 'whitesmoke ' }}
              >
                Publications
                {window.location.pathname === '/Publication' ? (
                  <hr class="nav-hr" />
                ) : null}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://drive.google.com/file/d/1m4vhwxlrJQT9SeMgglLd7udAgmfqgbhO/view?usp=sharing"
                style={{ color: 'whitesmoke ' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
                {window.location.pathname === '/Resume' ? (
                  <hr class="nav-hr" />
                ) : null}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
