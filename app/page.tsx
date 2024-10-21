"use client";

import { useEffect, useState } from "react";
import { Banner } from "./Components/Banner";

import { Divider } from "./Components/Divider";
import Grid from "./Components/Grid";
import { Hero } from "./Components/Hero";
import { Menu } from "./Components/Menu";

import Contact from "./Components/Contact";
import { Footer } from "./Components/Footer";
import Navbar from "./Components/Navbar";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <Banner />
      {/* <div
        className={`fixed w-full opacity-90 ${
          isMobile ? "navbar-top" : "bottom-0"
        }`}
      >
        <Navbar />
      </div> */}
      {isMobile ? (
        <div className="fixed top-0 w-full opacity-90 z-50">
          <Navbar />
        </div>
      ) : (
        <div className="w-full opacity-90 z-50">
          <Menu />
        </div>
      )}
      <Hero />
      <Divider />
      <Grid />
      <Divider />

      <Contact />
      <Footer />

      {/* <Contact />
       */}
      {/* <ContactMe /> */}
    </div>
  );
}
