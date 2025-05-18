'use client'
import VideoInput from "../components/VideoInput"

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100 border-2">
      <h1 className="text-3xl font-bold text-black mb-6 text-center">YouTube Transcript Fetcher</h1>
      <VideoInput />
    </main>
  )
}