import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../context/MenuContext";
import { data, Dropdown } from "../../exports/header";
import { useLocation } from "react-router-dom";

const Header = ({ themeFunction }) => {
  const { toggleMenu, setToggleMenu, colorTheme } = useContext(ThemeContext);
  const location = useLocation();

  const urlSlug = location.pathname.replace("/", "");

  const matchingLink = data.find((link) => link.anchor === urlSlug);

  return (
    <>
      <section
        className={`fw ${styles.wrapper} ${
          colorTheme === "theme-dark" ? styles.theme_dark : styles.theme_light
        }`}
      >
        <div
          className={styles.hamburger}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <RxHamburgerMenu />
        </div>

        {matchingLink && <h1 className={styles.logo}>{matchingLink.text}</h1>}

        <div className={styles.toggleTheme}>
          {colorTheme === "theme-light" && (
            <BsFillSunFill onClick={() => themeFunction("theme-dark")} />
          )}
          {colorTheme === "theme-dark" && (
            <BsFillMoonFill onClick={() => themeFunction("theme-light")} />
          )}
        </div>
      </section>
      <Dropdown />
    </>
  );
};

export default Header;
