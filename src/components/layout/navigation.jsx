import React, { useState } from "react";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";
import mainLogo from "./../../assets/meow-main-logo.png";
import { BsList } from "react-icons/bs";
import useMediaQueryHook, { SIZES } from "../use-media-query-hook";

const Navigation = () => {
  // const height = window.innerHeight;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { device } = useMediaQueryHook();

  const handleOpenMenu = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(true);
      // scroll();
    }
  };

  // const scroll = () => {
  //   window.scrollTo({ top: height });
  // };

  // const smallScreen = window.innerWidth <= 650;
  // const bigScreen = window.innerWidth > 650;

  return (
    <>
      {device === SIZES.MOBILE && (
        <>
          <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={handleOpenMenu}>
              <BsList className={styles.icon} />
            </button>
          </div>
          {menuIsOpen && (
            <div className={styles.hamburderMenu}>
              <div className={styles.headerMobileMenu}>
                <div>
                  <img
                    src={mainLogo}
                    alt="meow food logo"
                    className={styles.logoSmallScreen}
                  />
                </div>
                <div>
                  <button
                    className={styles.navBtn}
                    onClick={() => setMenuIsOpen(false)}
                  >
                    X
                  </button>
                </div>
              </div>

              <div className={styles.navOption}>
                <Link to="/about">
                  <button onClick={handleOpenMenu} className={styles.navBtn}>
                    Contact us
                  </button>
                </Link>
              </div>
              <div className={styles.navOption}>
                <Link to="/meals">
                  <button onClick={handleOpenMenu} className={styles.navBtn}>
                    Meals
                  </button>
                </Link>
              </div>
              <div className={styles.navOption}>
                <Link to="/rating">
                  <button onClick={handleOpenMenu} className={styles.navBtn}>
                    Rating
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}

      {(device === SIZES.DESKTOP) | (device === SIZES.BIG_DESKTOP) && (
        <div className={styles.nav}>
          <div>
            <img src={mainLogo} alt="meow food logo" className={styles.logo} />
          </div>
          <div className={styles.navOption}>
            <Link to="/about">
              <button className={styles.navBtn}>Contact us</button>
            </Link>
          </div>
          <div className={styles.navOption}>
            <Link to="/meals">
              <button className={styles.navBtn}>Meals</button>
            </Link>
          </div>
          <div className={styles.navOption}>
            <Link to="/rating">
              <button className={styles.navBtn}>Rating</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
