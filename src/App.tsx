import "./App.css";
import ClayImg from "./assets/clay3.png";
import "react-toggle/style.css";
import Toggle from "react-toggle";
import { RoughNotation } from "react-rough-notation";
import useLocalStorage from "use-local-storage";
import HamburgerIcon from "./assets/icons8-menu-36.svg";
import { useState } from "react";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", preference);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <div data-theme={isDarkMode ? "dark" : "light"} className="app">
      <nav className="navbar container">
        <p className="logo title">Timothy Upchurch</p>
        <div className={`nav-mobile ${mobileMenuActive ? "active" : ""}`}>
          <img
            src={HamburgerIcon}
            alt="Hamburger Icon"
            onClick={() => setMobileMenuActive((prev) => !prev)}
          />
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
            <Toggle
              defaultChecked={isDarkMode}
              icons={{
                checked: "☀️",
                unchecked: "🌙",
              }}
              aria-label="toggle theme"
              onChange={() => setIsDarkMode((prev) => !prev)}
              className="theme-toggle"
            />
          </ul>
        </div>
      </nav>

      <header className="header container">
        <div className="header-left">
          <h1 className="title">
            Hello! I'm Timothy, a{" "}
            <RoughNotation
              type="highlight"
              show={true}
              color={isDarkMode ? "#191C36" : "#D1BEEF"}
              animate={true}
              animationDelay={500}
              animationDuration={1000}
              multiline={true}
            >
              software developer
            </RoughNotation>{" "}
            based in St. Louis.
          </h1>
          <div className="header-copy">
            <p>
              I build applications from the ground up with{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color={isDarkMode ? "#4B8D51" : "#BEEFC3"}
                animate={true}
                animationDelay={1500}
                animationDuration={300}
                padding={1}
                iterations={1}
              >
                <span className="heading-p">scalability</span>
              </RoughNotation>{" "}
              and{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color={isDarkMode ? "#1D2BAC" : "#EFE955"}
                animate={true}
                animationDelay={2250}
                animationDuration={300}
                padding={1}
                iterations={1}
              >
                <span className="heading-p">performance</span>
              </RoughNotation>{" "}
              in mind. I love building clean, accessible, and mobile-responsive
              websites.
            </p>
            <br />
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <br />
            <p>
              I would love to learn more about your buisness and how my
              skill-set may align with the work.{" "}
              <RoughNotation
                type="underline"
                show={true}
                color="#EF5596"
                animate={true}
                animationDelay={3000}
                animationDuration={500}
                strokeWidth={3}
                iterations={1}
                multiline={true}
              >
                <span className="heading-p">Contact me!</span>
              </RoughNotation>
            </p>
          </div>

          <button className="btn btn-primary">
            <a
              href="https://www.linkedin.com/in/timothy-upchurch-61a108217/"
              target="_blank"
            >
              LinkedIn
            </a>
          </button>
          <button className="btn btn-secondary">
            <a href="https://github.com/Tupchu" target="_blank">
              GitHub
            </a>
          </button>
        </div>
        <div className="header-right">
          <img src={ClayImg} alt="" style={{ width: "460px" }} />
        </div>
      </header>
    </div>
  );
}

export default App;
