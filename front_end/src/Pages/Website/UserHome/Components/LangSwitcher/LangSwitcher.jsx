import React, { useState, useEffect } from "react";
import "./LangSwitcher.css";

const LangSwitcher = () => {
  const [isArabic, setIsArabic] = useState(() => {
    return localStorage.getItem("lang") === "ar";
  });

  useEffect(() => {
    const lang = isArabic ? "ar" : "en";

    // ✅ Set global HTML attributes
    document.documentElement.setAttribute("dir", isArabic ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);

    // ✅ Update elements with [ar_title] / [en_title]
    document.querySelectorAll("[ar_title]").forEach((el) => {
      const ar = el.getAttribute("ar_title");
      const en = el.getAttribute("en_title");

      // fallback priority: correct lang > opposite lang > existing text
      const fallbacks = [
        isArabic ? ar : en,
        !isArabic ? ar : en,
        el.textContent,
      ].filter(Boolean);

      const newText = fallbacks[0];
      const textNode = Array.from(el.childNodes).find(
        (node) => node.nodeType === Node.TEXT_NODE
      );

      if (textNode) {
        textNode.textContent = newText;
      } else {
        el.appendChild(document.createTextNode(newText));
      }
    });

    // ✅ Dispatch event for components that depend on language
    window.dispatchEvent(new Event("langChange"));

    // ✅ Global helper to get correct title/description
    window.getLangTitle = (item) => {
      if (!item) return "";
      const lang = localStorage.getItem("lang") || "en";

      const arKeys = [
        "ar_title",
        "ar_name",
        "ar_description",
      ];
      const enKeys = [
        "en_title",
        "en_name",
        "en_description",
      ];

      const keys = lang === "ar" ? arKeys : enKeys;

      // Pick the first available value
      for (const key of keys) {
        if (item[key]) return item[key];
      }

      // Final fallback (neutral fields)
      return item.title || item.name || item.description || "";
    };

    // ✅ Global function to check if Arabic
    window.isArabic = () => (localStorage.getItem("lang") || "en") === "ar";
  }, [isArabic]);

  // ✅ Toggle language with smooth animation
  const toggleLang = () => {
    const isArabicNow = document.documentElement.getAttribute("dir") === "rtl";

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
