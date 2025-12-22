// src/Components/LanguageHandler.jsx
import { useEffect } from 'react';

const LanguageHandler = () => {
    useEffect(() => {
        // 1. نطبق اللغة المحفوظة من أول لحظة (قبل أي render)
        const savedLang = localStorage.getItem('lang') || 'en';
        document.documentElement.lang = savedLang;
        document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';

        // دالة تغيير النصوص فقط
        const applyTexts = () => {
            const isAr = document.documentElement.lang === 'ar';

            document.querySelectorAll('[ar-data],[en-data]').forEach(el => {
                const arText = el.getAttribute('ar-data');
                const enText = el.getAttribute('en-data') || el.textContent.trim();

                // لو عربي وفيه ar-data → نعرض العربي، غير كده نعرض الإنجليزي (أو النص الأصلي)
                el.textContent = isAr && arText ? arText : enText;
            });
        };

        // ننفذها فورًا
        applyTexts();

        // نراقب أي تغيير في lang أو dir (لما المستخدم يضغط زرار اللغة)
        const observer = new MutationObserver(applyTexts);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['lang', 'dir'],
        });

        // تنظيف الـ observer لما الكومبوننت يتفك
        return () => observer.disconnect();
    }, []);

    // الكومبوننت ما بيرجعش أي UI
    return null;
};

export default LanguageHandler;