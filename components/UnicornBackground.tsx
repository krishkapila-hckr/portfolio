import React, { useEffect } from "react";

declare global {
  interface Window {
    UnicornStudio?: any;
  }
}

const UnicornBackground: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // If it's already initialized, do nothing
    if (window.UnicornStudio?.isInitialized) return;

    // Ensure the global object exists
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.36/dist/unicornStudio.umd.js";

    script.onload = () => {
      const u = window.UnicornStudio;
      if (u && !u.isInitialized && typeof u.init === "function") {
        u.init();
        u.isInitialized = true;
      }
    };

    (document.head || document.body).appendChild(script);
  }, []);

  return (
    <div
      data-us-project="bJ81cRVaW0xjGO4kmTNb" // 👈 make sure this is your actual project ID
      className="fixed inset-0 w-full h-full -z-20"
    />
  );
};

export default UnicornBackground;

