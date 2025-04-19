"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import styles from "@/styles/ScrollToTop.module.css";
// import styles from "@/ScrollToTop.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (isVisible) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className={isVisible ? styles.buttonVisible : styles.button}
      onClick={scrollToTop}
    >
      <MdKeyboardArrowUp />
    </button>
  );
};

export default ScrollToTop;