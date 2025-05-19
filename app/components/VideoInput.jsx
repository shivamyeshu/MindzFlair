'use client'
import { useState } from 'react'

export default function VideoInput() {
  const [url, setUrl] = useState('')
  const [transcript, setTranscript] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchTranscript = async (e) => {
    e.preventDefault()

    const id = url.split('v=')[1]?.split('&')[0]
    if (!id) {
      alert('Invalid YouTube URL')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/transcript', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoId: id }),
      })
      let data
      try {
        data = await res.json()
      } catch {
        const text = await res.text()
        console.error('Invalid JSON response:', text)
        alert('Invalid response from server')
        setLoading(false)
        return
      }
      setLoading(false)
      if (data.error) {
        alert(data.error)
      } else {
        setTranscript(data.transcript)
      }
    } catch (err) {
      setLoading(false)
      console.error('Fetch error:', err)
      alert('Network error please try again in different location')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-300 to-pink-100 
                     dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black 
                     flex items-center justify-center p-6 transition-colors duration-500">
      <div className="w-full max-w-3xl bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-80 
                      backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-white/30 
                      dark:border-gray-700 transition-colors duration-500">
        <h1
          className="text-3xl md:text-2 font-extrabold mb-4 animate-bounce-slow transition-colors duration-500 
                     bg-gradient-to-br from-black via-blue-500 to-slate-500 dark:from-black dark:via-slate-300 dark:to-blue-700 
                     text-transparent bg-clip-text"
        >
          🎬 Transcript Fetcher
        </h1>
        <p className="text-sm md:text-sm  text-gray-700 dark:text-gray-300 mb-6 animate-fade-in transition-colors duration-500">
          Paste a YouTube video URL and get its transcript instantly of full video.
        </p>

        <form onSubmit={fetchTranscript} className="flex flex-col gap-4 items-center w-full">
          <input
            type="text"
            placeholder="🎥 Paste YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full md:w-4/5 p-3 text-lg rounded-xl shadow-md border border-purple-300 dark:border-white
                       focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-400
                       transition-all duration-200 bg-white/90 dark:bg-gray-800/90 dark:text-white
                       placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 text-lg font-semibold rounded-xl shadow-md curor-pointertransition-all duration-200 ${
              loading
                ? 'bg-black cursor-not-allowed '
                : 'bg-gradient-to-br text- from-gray-500 via-slate-400 to-slate-800  hover:from-violet-500 hover:to-blue-400 cursor-pointer'
            }`}
          >
            {loading ? '⏳' : 'Fetch Transcript'}
          </button>
        </form>

        {transcript && (
          <div className="whitespace-pre-wrap mt-8 p-6 border rounded-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-200 text-left max-h-96 overflow-y-auto">
            <h3 className="font-semibold mb-3 text-xl">Transcript:</h3>
            <p>{transcript}</p>
          </div>
        )}

        <p className="mt-10 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">
          MindzFlare — Made for students who want more, in less time.
        </p>
      </div>
    </main>
  )
}
