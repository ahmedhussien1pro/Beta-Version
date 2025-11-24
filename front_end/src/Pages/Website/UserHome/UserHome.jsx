import React, { useEffect, useState } from "react";
import Courses from "./Components/Courses/Courses";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Landing from "./Components/LearnLanding/LearnLanding";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";
import Preloader from "../Preloader/Preloader";
import LangSwitcher from "./Components/LangSwitcher/LangSwitcher";
export default function UserHome() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 200);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div style={{position: "relative"}}>
      <Header />
      <ThemeSwitcher />
      {/* <LangSwitcher /> */}
      <Preloader  loading={loading}/>
      <Landing />
      <Courses />
      <Footer />
    </div>
  );
}
