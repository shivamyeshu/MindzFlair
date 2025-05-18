import { NextResponse } from 'next/server'
import { YoutubeTranscript } from 'youtube-transcript' // npm i youtube-transcript

export async function POST(req) {
  try {
    const { videoId } = await req.json()
    if (!videoId) {
      return NextResponse.json({ error: 'Missing videoId' }, { status: 400 })
    }

    // Fetch transcript from YouTube
    const items = await YoutubeTranscript.fetchTranscript(videoId)
    const fullText = items.map(i => i.text).join(' ')
    console.log('Transcript length:', fullText.length)

    return NextResponse.json({ transcript: fullText })
  } catch (e) {
    console.error('API error:', e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}