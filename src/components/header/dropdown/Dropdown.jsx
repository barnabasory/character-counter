import styles from "./Dropdown.module.scss";
import {
  ab_testing,
  refresh,
  binary,
  counter,
  calculator,
  uppercase_interface_button,
} from "../../../exports/icons";
import { useToggleMenuContext } from "../../../context/MenuContext";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const { toggleMenu, setToggleMenu } = useToggleMenuContext();
  return (
    <>
      {toggleMenu && (
        <div className={`fw_np ${styles.dropdown}`}>
          <div className={styles.dropdown_menu_div}>
            <div className={styles.dropdown_menu}>
              {/* Character Count */}
              <Link
                to="/character-count"
                className={`ch ${styles.dropdown_menu_link}`}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <img
                  src={calculator}
                  alt=""
                  className={styles.dropdown_menu_icon}
                />
                <span className={styles.dropdown_menu_icon_text}>
                  Character Count
                </span>
              </Link>
              {/* Compare Text
              <Link
                to="/compare-texts"
                className={`ar ${styles.dropdown_menu_link}`}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <img
                  src={ab_testing}
                  alt=""
                  className={styles.dropdown_menu_icon}
                />
                <span className={styles.dropdown_menu_icon_text}>
                  Compare Texts
                </span>
              </Link> */}
              {/* Font Changer */}
              <Link
                to="/font-changer"
                className={`font ${styles.dropdown_menu_link}`}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <img
                  src={refresh}
                  alt=""
                  className={styles.dropdown_menu_icon}
                />
                <span className={styles.dropdown_menu_icon_text}>
                  Font Changer
                </span>
              </Link>
              {/* Binary Translator */}
              <Link
                to="/binary-translator"
                className={`bi ${styles.dropdown_menu_link}`}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <img
                  src={binary}
                  alt=""
                  className={styles.dropdown_menu_icon}
                />
                <span className={styles.dropdown_menu_icon_text}>
                  Binary Translator
                </span>
              </Link>
              {/* Case Converter */}
              <Link
                to="/change-case"
                className={`con ${styles.dropdown_menu_link}`}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <img
                  src={uppercase_interface_button}
                  alt=""
                  className={styles.dropdown_menu_icon}
                />
                <span className={styles.dropdown_menu_icon_text}>
                  Case Converter
                </span>
              </Link>
            </div>
          </div>
          <div
            className={styles.overlay}
            onClick={() => setToggleMenu(!toggleMenu)}
          ></div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
