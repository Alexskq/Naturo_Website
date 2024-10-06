"use client";

import { useEffect, useRef, useState } from "react";
import { Banner } from "./Components/Banner";
import Grid from "./Components/Grid";
import { Menu } from "./Components/Menu";
import Navbar from "./Components/Navbar";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Calculer si l'écran est mobile lors du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gérer l'état sticky du Menu lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current && bannerRef.current) {
        const bannerBottom = bannerRef.current.getBoundingClientRect().bottom;

        // Vérifier si le menu dépasse le haut de la page
        if (window.scrollY > bannerBottom) {
          setIsMenuFixed(true);
        } else {
          setIsMenuFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Banner with ref */}
      <div ref={bannerRef}>
        <Banner />
      </div>

      {/* Mobile Navbar */}
      {isMobile ? (
        <div className="fixed top-0 w-full opacity-90 z-50">
          <Navbar />
        </div>
      ) : (
        // Desktop Menu with dynamic fixed position
        <div
          ref={menuRef}
          className={`w-full z-50 transition-all duration-300 ${
            isMenuFixed ? "fixed top-0 left-0 bg-white shadow-lg" : ""
          }`}
          style={{
            position: isMenuFixed ? "fixed" : "static",
            top: isMenuFixed ? "0px" : "auto",
          }}
        >
          <Menu />
        </div>
      )}

      {/* Content */}
      <Grid />
      <Grid />
    </div>
  );
}
