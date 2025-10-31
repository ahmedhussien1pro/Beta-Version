import React, { useState, useEffect } from "react";
import "./LangSwitcher.css";

const LangSwitcher = () => {
  // Initialize state from local storage or default to false (light lang)
  const [isArabic, setIsArabic] = useState(() => {
    return localStorage.getItem("lang") === "ar";
  });

  useEffect(() => {
    // Set direction + save to localStorage
    document.documentElement.setAttribute("dir", isArabic ? "rtl" : "ltr");
    localStorage.setItem("lang", isArabic ? "ar" : "en");

    // ✅ Update all elements with ar_title / en_title attributes
    document.querySelectorAll("[ar_title]").forEach((el) => {
      const ar = el.getAttribute("ar_title");
      const en = el.getAttribute("en_title");
      el.textContent = isArabic ? ar : en;
    });

    // ✅ Dispatch event for any components that depend on lang
    window.dispatchEvent(new Event("langChange"));

    // ✅ Optional global helper function
    window.getLangTitle = (item) => {
      if (!item) return "";
      const lang = localStorage.getItem("lang") || "en";
      return lang === "ar" && item.ar_title ? item.ar_title : item.title;
    };
  }, [isArabic]);

  const toggleLang = () => setIsArabic((prev) => !prev);

  return (
    <div className="lang-switch-box">
      <label id="switch" className="switch">
        <input
          type="checkbox"
          onChange={toggleLang}
          id="slider"
          checked={isArabic}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default LangSwitcher;
