'use client';
import { useState } from 'react';

export default function PlaylistInput({ setData, loading, setLoading }) {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.includes('list=')) return alert('Invalid playlist URL');

    setLoading(true);
    try {
      const res = await fetch('/api/playlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const result = await res.json();
      setData(result);
    } catch (err) {
      alert('Error fetching playlist data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center w-full">
      <input
        className="w-full md:w-4/5 p-3 text-lg rounded-xl shadow-md border border-purple-300 dark:border-white focus:outline-none focus:ring-4
          focus:ring-gray-300 dark:focus:ring-gray-400 transition-all duration-200 bg-white/90 dark:bg-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
        placeholder="🎥 Paste your YouTube playlist URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className={`px-6 py-2 text-lg font-semibold rounded-xl shadow-md transition-all duration-200 ${
          loading
            ? 'bg-black dark:bg-black cursor-not-allowed'
            : 'bg-gradient-to-tr from-gray-500 via-white to-slate-800 hover:from-pink-500 hover:to-purple-900 text-slate-800 cursor-pointer ' 
        }`}
      >
        {loading ? '⏳' : ' Calculate Duration'}
      </button>
    </form>
  );
}
