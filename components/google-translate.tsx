"use client";

import React from "react";
import Script from "next/script";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

/**
 * Classic Google Translate widget (full language list + "Powered by")
 * - Renders the original select with all languages.
 * - Uses HTTPS translate script and the standard callback name.
 */
export default function GoogleTranslateFull() {
  return (
    <>
      {/* placeholder (you can keep inline style like your old site) */}
      <div id="google_translate_element" style={{ marginRight: "187px" }}></div>

      {/* inline initializer that the external script will call (cb=googleTranslateElementInit) */}
      <Script id="google-translate-init" strategy="afterInteractive">
        {`window.googleTranslateElementInit = function() {
          new google.translate.TranslateElement({
            pageLanguage: 'en',
            // no includedLanguages => show ALL languages as in your old site
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
          }, 'google_translate_element');
        }`}
      </Script>

      {/* official Google Translate script (use https to avoid mixed-content problems) */}
      <Script
        src="http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
