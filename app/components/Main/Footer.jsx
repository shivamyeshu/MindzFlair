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

          {/* Social icons */}
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-gray-400">
              {/* Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-1.178 8.93-4.968 10.93M8.25 19.25a2.25 2.25 0 01-1.5 0m1.5 0a2.25 2.25 0 001.5 0m-3 0h6m-6 0a2.25 2.25 0 01-.75-1.5m.75 1.5h3m-3-3L12 15.75m3-3L15 12.75" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              {/* TikTok */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V5m0 12a2 2 0 002 2m-2-2a2 2 0 012-2m-2 2v-2m0-2a2 2 0 002-2m-2 2a2 2 0 012-2m-2 2v-2m0-2a2 2 0 002-2m-2 2a2 2 0 012-2" />
              </svg>
            </a>
          </div>

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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[10vw] md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-black via-cyan-800 to-black opacity-15 select-none">
             Mindzflair
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
