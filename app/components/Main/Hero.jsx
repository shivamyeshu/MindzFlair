"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Faq from "./Faq";
import FAQSection from "./Faq";

export default function Hero() {
  return (
    <>

    <div className=" relative bg-gradient-to-tr from-blue-100 via-purple-300 to-pink-100 
                      dark:bg-gradient-to-tl dark:from-black dark:via-gray-900 dark:to-black  ">
  
 
  {/* Watermark Book Background */}
  <div
    className="absolute  inset-0 z-0  bg-[url('/logo1.png')] bg-no-repeat bg-center bg-contain opacity-10 dark:opacity-8 mt-10"
    aria-hidden="true"
  />

      <div className="px-4 py-10 md:py-20  ">
         <div className="text-center px-4  ">
      <div className="mb-4 mt-14 cursor-pointer">
        <span className="text-xs text-transparent bg-clip-text bg-white px-5 py-2 border-2 rounded-full border-gray-500  transform animate-spin">
         under construction 
        </span>
      </div>

    </div>
        <h1
          className="relative  z-10 mx-auto max-w-7xl text-center text-2xl font-bold text-slate-900 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Turn Hours of Study Videos into Minutes of Mastery"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block">
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
         Simplify your lectures, maximize your results.
          {/* AI-powered YouTube video summarizer for students and lifelong learners. */}
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
         <Link href="/analyze">
            <button
             className="px-3 py-2 text-lg font-semibold rounded-xl shadow-md transition-all duration-200 bg-gradient-to-br from-gray-900 via-slate-400 to-slate-900 hover:from-blue-600 hover:to-violet-500 cursor-pointer text-white w-60"
            >
              Get Started Free
            </button>
          </Link>
        </motion.div>
        
      </div>
    </div>
    <Faq1/>
    </>
  );
}

function Faq1(){
  return(
 
<>
<section className="bg-gradient-to-tr from-black via-slate-900  to-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2"> Playlist Analysis</h3>
        <p className="text-gray-300">Paste a YouTube playlist link — we’ll instantly fetch all videos with durations, counts, and more.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2"> Transcription </h3>
        <p className="text-gray-300">Our AI transcribes each video using accurate speech-to-text models. No manual work needed.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2"> Summary </h3>
        <p className="text-gray-300">"We process transcriptions to generate crisp, insightful summaries per video or for the whole playlist.</p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2"> Top Summaries (Coming Soon)</h3>
        <p className="text-gray-300">Get condensed versions of the best takeaways from entire playlists — perfect for fast learners.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2"> Playback Speed Insights</h3>
        <p className="text-gray-300">See how much time you save by watching at 1.5x or 2x speed. Optimize your learning curve!</p>
      </div>
    </div>
  </div>
</section>


<section className="bg-black text-white py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-12">Why Choose MindzFlair?</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 text-left md:grid-cols-3 gap-4">
    
    <div className="bg-gray-800 p-6 rounded-xl">
      <h4 className="text-lg font-semibold mb-2">Save Time</h4>
      <p className="text-gray-400">Don’t watch 8-hour videos. MindsFlare gives you summaries of entire playlists in minutes.</p>
    </div>
    
    <div className="bg-gray-800 p-6 rounded-xl">
      <h4 className="text-lg font-semibold mb-2"> Study Smarter</h4>
      <p className="text-gray-400">Get clean, easy-to-read notes with key concepts highlighted — perfect for revision.</p>
    </div>
    
    <div className="bg-gray-800 p-6 rounded-xl">
      <h4 className="text-lg font-semibold mb-2"> No Distractions</h4>
      <p className="text-gray-400">No ads, no comments, no YouTube rabbit holes. Just pure focused learning.</p>
    </div>
    
  </div>
</div>

</section>
<section className="bg-gradient-to-t from-gray-950 to-black text-white py-20 px-6 text-center"> 
  <FAQSection/>
</section>

<section className="bg-gradient-to-b from-gray-950 to-black text-white py-20 pb-44 px-6 text-center">
  <h2 className="text-3xl font-bold mb-10">Ready to level up your revision?</h2>
  <a href="/analyze">
    <button className="px-3 py-2 text-lg font-semibold rounded-xl shadow-md transition-all duration-200 bg-gradient-to-br from-gray-900 via-slate-400 to-slate-900 hover:from-blue-600 hover:to-violet-500 cursor-pointer text-white w-60">
      Try MindzFlair
    </button>
  </a>
</section>

</>
  )
}