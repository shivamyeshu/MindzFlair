'use client';

import { useState } from 'react';
import PlaylistInput from '../components/Playlist/PlaylistInput';
import PlaylistStats from '../components/Playlist/PlaylistStats';

export default function AnalyzePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100 
                     dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black 
                     flex items-center justify-center p-6 transition-colors duration-500">
      <div className="w-full max-w-3xl bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-80 
                      backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-white/30 
                      dark:border-gray-700 transition-colors duration-500">
       <h1
        className="text-4xl md:text-5xl font-extrabold mb-4 animate-bounce-slow transition-colors duration-500 
                    bg-gradient-to-br from-black via-blue-500 to-slate-500 dark:from-slate-500 dark:via-slate-300 dark:to-blue-700 
                    text-transparent bg-clip-text">
                     🎥 Playlist Analyzer 
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 animate-fade-in transition-colors duration-500">
          Paste a YouTube playlist and let us calculate time — total duration, average time, and speed-watch info.
        </p>

        <div className="animate-slide-up">
          <PlaylistInput setData={setData} loading={loading} setLoading={setLoading} />
        </div>

        {data && (
          <div className="mt-10 animate-fade-in">
            <PlaylistStats data={data} />
          </div>
        )}

        <p className="mt-10 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">
          Built for students ! 💜
        </p>
      </div>
    </main>
  );
}
