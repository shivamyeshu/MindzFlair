'use client'
import { useState } from 'react'

export default function SummaryDisplay({ transcript, summary }) {
  const [copied, setCopied] = useState(false)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="prose max-w-full">
      <h2>Summary</h2>
      <p>{summary}</p>
      <button
        onClick={copyToClipboard}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        {copied ? 'Copied!' : 'Copy Summary'}
      </button>
    </div>
  )
}