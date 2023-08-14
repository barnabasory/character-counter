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
    <div className={`fw_np ${styles.dropdown}`}>
      <div className={styles.dropdown_menu_div}>
        <div className={styles.dropdown_menu}>
          {/* Character Count */}
          <Link
            to="/character-count"
            className={`ch ${styles.dropdown_menu_link}`}
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
          {/* Compare Text */}
          <div className={`ar ${styles.dropdown_menu_link}`}>
            <img
              src={ab_testing}
              alt=""
              className={styles.dropdown_menu_icon}
            />
            <span className={styles.dropdown_menu_icon_text}>Compare Text</span>
          </div>
          {/* Font Changer */}
          <div className={`font ${styles.dropdown_menu_link}`}>
            <img src={refresh} alt="" className={styles.dropdown_menu_icon} />
            <span className={styles.dropdown_menu_icon_text}>Font Changer</span>
          </div>
          {/*  Counter */}
          <div className={`bs ${styles.dropdown_menu_link}`}>
            <img src={counter} alt="" className={styles.dropdown_menu_icon} />
            <span className={styles.dropdown_menu_icon_text}>Word Counter</span>
          </div>
          {/* Binary Translator */}
          <div className={`bi ${styles.dropdown_menu_link}`}>
            <img src={binary} alt="" className={styles.dropdown_menu_icon} />
            <span className={styles.dropdown_menu_icon_text}>
              Binary Translator
            </span>
          </div>
          {/* Case Converter */}
          <div className={`con ${styles.dropdown_menu_link}`}>
            <img
              src={uppercase_interface_button}
              alt=""
              className={styles.dropdown_menu_icon}
            />
            <span className={styles.dropdown_menu_icon_text}>
              Case Converter
            </span>
          </div>
        </div>
      </div>
      <div
        className={styles.overlay}
        onClick={() => setToggleMenu(!toggleMenu)}
      ></div>
    </div>
  );
};

export default Dropdown;
