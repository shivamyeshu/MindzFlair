'use client';
import React, { useState, useEffect } from 'react';

const Footer = () => {

  return (
    <footer className="relative bg-gradient-to-tr from-blue-100 via-purple-300 to-pink-100 
                      dark:bg-gradient-to-tr dark:from-black dark:via-gray-900 dark:to-black 
                      text-gray-600 dark:text-gray-300 py-10 border-t-2 border-slate-800 overflow-hidden">

     

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Left: Brand & Description */}
        <div className="max-w-sm">
          <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-3">
            Mind<span className="text-transparent bg-clip-text bg-gradient-to-tr from-violet-500 via-indigo-400 to-blue-400 drop-shadow-md ">Z</span>flair
          </h2>

          <p className="text-sm mb-4">
           MindzFlair breaks down any YouTube playlist—get quick summaries and see how long it'll actually take to watch at your speed. No fluff, just facts.
          </p>


          {/* System Status */}
          <div className="flex items-center text-xs text-gray-500 mb-1">
            <div className="rounded-full bg-green-400  h-2 w-2 mr-1 animate-pulse"></div>
            <span>All systems online</span>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-16">
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/analyze" className="hover:text-gray-400">Analyze Playlst</a></li>
              <li><a href="/summary" className="hover:text-gray-400">Generate Summary</a></li>
              <li><a href="/transcript" className="hover:text-gray-400">Get Transcript</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} MindzFlair. All rights reserved.
      </div>
        {/* Watermark */}
      <div className="absolute inset-0 flex place-items-end-safe justify-center pointer-events-none">
        <h1 className="text-[1vw] md:text-9xl font-extrabold text-slate-400 opacity-3 select-none">
          MindsFlare
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
