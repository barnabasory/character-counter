import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useToggleMenuContext } from "../../context/MenuContext";
import { data, Dropdown } from "../../exports/header";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { toggleMenu, setToggleMenu } = useToggleMenuContext();
  const location = useLocation();

  const urlSlug = location.pathname.replace("/", "");

  const matchingLink = data.find((link) => link.anchor === urlSlug);

  return (
    <>
      <section className={`fw ${styles.wrapper}`}>
        <div
          className={styles.hamburger}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <RxHamburgerMenu />
        </div>

        {matchingLink && <h1 className={styles.logo}>{matchingLink.text}</h1>}
      </section>
      <Dropdown />
    </>
  );
};

export default Header;
