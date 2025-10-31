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

    document.querySelectorAll("[ar_title]").forEach((el) => {
      const ar = el.getAttribute("ar_title");
      const en = el.getAttribute("en_title");

      // ✅ if element has an icon, change only the text node
      const textNode = Array.from(el.childNodes).find(
        (node) => node.nodeType === Node.TEXT_NODE
      );

      if (textNode) {
        textNode.textContent = isArabic ? ar : en;
      } else {
        el.appendChild(document.createTextNode(isArabic ? ar : en));
      }
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

  // const toggleLang = () => {
  //   // Add transition class
  //   document.documentElement.classList.add("lang-switching");

  //   setTimeout(() => {
  //     setIsArabic((prev) => !prev);
  //     document.documentElement.classList.remove("lang-switching");
  //   }, 300);
  // };
  const toggleLang = () => {
    const isArabicNow = document.documentElement.getAttribute("dir") === "rtl";
    // Slide opposite direction
    document.documentElement.style.setProperty(
      "--lang-slide",
      isArabicNow ? "30px" : "-30px"
    );

    document.documentElement.classList.add("lang-switching");

    setTimeout(() => {
      setIsArabic((prev) => !prev);
      document.documentElement.classList.remove("lang-switching");
    }, 400);
  };

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
