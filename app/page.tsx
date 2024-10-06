"use client";

import { useEffect, useState } from "react";
import { Banner } from "./Components/Banner";

import { Menu } from "./Components/Menu";

import Grid from "./Components/Grid";

import Navbar from "./Components/Navbar";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
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
        <Grid />
    </div>

  );
}
