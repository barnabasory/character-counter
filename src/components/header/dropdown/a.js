import styles from "./Dropdown.module.scss";
import data from "./data";
import { useToggleMenuContext } from "../../../context/MenuContext";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const { toggleMenu, setToggleMenu } = useToggleMenuContext();
  return (
    <div className={`fw_np ${styles.dropdown}`}>
      <div className={styles.dropdown_menu_div}>
        <div className={styles.dropdown_menu}>
          {data.map((link) => (
            <Link className={`ch ${styles.dropdown_menu_link}`} key={link.id}>
              <img
                src={link.icon}
                alt="icon"
                className={styles.dropdown_menu_icon}
              />
              <span className={styles.dropdown_menu_icon_text}>
                {link.text}
              </span>
            </Link>
          ))}
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
