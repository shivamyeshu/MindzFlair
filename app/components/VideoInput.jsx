'use client'
import { useState } from 'react'

export default function VideoInput() {
  const [url, setUrl] = useState('')
  const [transcript, setTranscript] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchTranscript = async () => {
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
        body: JSON.stringify({ videoId: id })
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
      alert('Network error')
    }
  }

  return (
    <div className="flex border-2 bg-black flex-col gap-3 max-w-xl mx-auto p-4">
      <input
        type="text"
        placeholder="Paste YouTube URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={fetchTranscript}
        disabled={loading}
        className="bg-blue-600 text-white p-2 rounded"
      >
        {loading ? 'Loading...' : 'Fetch Transcript'}
      </button>

      {transcript && (
        <div className="whitespace-pre-wrap mt-4 p-4 border rounded bg-gray-50 text-gray-800">
          <h3 className="font-semibold mb-2">Transcript:</h3>
          <p>{transcript}</p>
        </div>
      )}
    </div>
  )
}