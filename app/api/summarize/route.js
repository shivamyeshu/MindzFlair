import { NextResponse } from 'next/server'
import { YoutubeTranscript } from 'youtube-transcript'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function POST(req) {
  try {
    const { videoId } = await req.json()
    if (!videoId) {
      return NextResponse.json({ error: 'Missing videoId' }, { status: 400 })
    }

    const items = await YoutubeTranscript.fetchTranscript(videoId)
    const fullText = items.map(i => i.text).join(' ')
    console.log("Transcript:\n", fullText)

    // Split into chunks (~2000 chars)
    const CHUNK_SIZE = 2000
    const chunks = []
    for (let i = 0; i < fullText.length; i += CHUNK_SIZE) {
      chunks.push(fullText.slice(i, i + CHUNK_SIZE))
    }

    const model = genAI.getGenerativeModel({ model:"gemini-2.0-flash-exp" })
    const summaries = []

    for (const chunk of chunks) {
      const result = await model.generateContent([
        { role: 'user', parts: [{ text: `Summarize this for study:\n${chunk}` }] }
      ])
      const response = await result.response
      summaries.push(response.text())
    }

    const combined = summaries.join('\n')
    const finalRes = await model.generateContent([
      { role: 'user', parts: [{ text: `Summarize all this into one study-friendly summary:\n${combined}` }] }
    ])
    const finalSummary = (await finalRes.response).text()

    return NextResponse.json({ transcript: fullText, summary: finalSummary })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
