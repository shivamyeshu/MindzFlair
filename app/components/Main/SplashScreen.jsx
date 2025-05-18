"use client";
import { useEffect, useState } from "react";

export default function SplashScreen({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      {showSplash ? (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-black z-50">
          <h2
            className="text-white text-4xl md:text-6xl font-extrabold tracking-wide animate-bounce "
            style={{ transformOrigin: "center bottom" }}
          >
            Mind
            <span
              className="text-transparent inline-block bg-clip-text bg-gradient-to-tr from-violet-500 via-indigo-400 to-blue-400 drop-shadow-md animate-ping "
              style={{ animationDelay: "1.5s" }}
            >
              Z
            </span>
            flair
          </h2>

          {/* The floor line */}
          <div className="w-40 md:w-64 h-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-600 rounded-full mt-6 shadow-[0_3px_10px_rgb(139,92,246)]"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
