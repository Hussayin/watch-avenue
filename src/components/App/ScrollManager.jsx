import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const location = useLocation();
  const prevPath = useRef(null);

  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");

    if (prevPath.current === location.pathname && savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    } else {
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    prevPath.current = location.pathname; // Oldin qayerda edik, eslab qolamiz

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return null;
};

export default ScrollManager;
