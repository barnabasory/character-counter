import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useToggleMenuContext } from "../../context/MenuContext";

const Header = () => {
  const { toggleMenu, setToggleMenu } = useToggleMenuContext();
  return (
    <section className={`fw ${styles.wrapper}`}>
      <div
        className={styles.hamburger}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <RxHamburgerMenu />
      </div>
      <h1 className={styles.logo}>Character Count</h1>
      <div className={styles.toggleTheme}>
        {<BsFillSunFill />}
        <BsFillMoonFill />
      </div>
    </section>
  );
};

export default Header;
