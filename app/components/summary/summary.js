
"use client";
import { useState, useEffect } from "react";

export default function SummaryInput() {
  const [url, setUrl] = useState("");
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-06-17T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        setCountdown("Available Now!");
        clearInterval(interval);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchTranscript = async (e) => {
    e.preventDefault();
    // your existing fetch code here ...
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-300 to-pink-100 
                     dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black 
                     flex items-center justify-center p-6 transition-colors duration-500">
      <div className="w-full max-w-3xl bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-80 
                      backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-white/30 
                      dark:border-gray-700 transition-colors duration-500">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 animate-bounce-slow
                       bg-gradient-to-br from-black via-blue-500 to-slate-200
                       dark:from-black dark:via-slate-300 dark:to-blue-700
                       text-transparent bg-clip-text">
          Generate summary
        </h1>
        <h2 className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-2">
          MindzFlare's AI is cooking you the cleanest summary tool ever. 🍲
        </h2>

        {countdown !== "Available Now!" ? (
          <div className="mb-6 text-xl font-semibold text-center text-gray-700 dark:text-gray-300">
            Page available in: <span className="text-indigo-600 dark:text-indigo-400">{countdown}</span>
          </div>
        ) : (
          <>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-6 animate-fade-in
                          transition-colors duration-500">
              Paste a YouTube video URL and get its full transcript instantly.
            </p>

            <form onSubmit={fetchTranscript} className="flex flex-col gap-4 items-center w-full" noValidate>
              <input
                type="url"
                placeholder="🎥 Paste YouTube URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full md:w-4/5 p-3 text-lg rounded-xl shadow-md border border-purple-300
                           dark:border-white focus:outline-none focus:ring-4 focus:ring-gray-300
                           dark:focus:ring-gray-400 transition-all duration-200 bg-white/90
                           dark:bg-gray-800/90 dark:text-white placeholder:text-gray-500
                           dark:placeholder:text-gray-400"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition-all duration-200 ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-br from-violet-500 to-blue-400 hover:from-blue-600 hover:to-violet-500 cursor-pointer text-white"
                }`}
              >
                {loading ? "⏳" : "Fetch Transcript"}
              </button>
            </form>

            {transcript && (
              <div className="whitespace-pre-wrap mt-8 p-6 border rounded-lg bg-gray-50 text-gray-800
                              dark:bg-gray-800 dark:text-gray-200 text-left max-h-96 overflow-y-auto">
                <h3 className="font-semibold mb-3 text-xl">Transcript:</h3>
                <p>{transcript}</p>
              </div>
            )}
          </>
        )}

        <p className="mt-10 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">
          Built for students! 💜
        </p>
      </div>
      
    </main>
  );
}


// export default function SummaryInput() {
//   const [url, setUrl] = useState("");
//   const [transcript, setTranscript] = useState("");
//   const [loading, setLoading] = useState(false);

//   const fetchTranscript = async (e) => {
//     e.preventDefault();

//     // Extract YouTube video ID robustly (supports multiple formats)
//     const urlObj = new URL(url, "https://dummy-base.com"); // fallback base for relative URLs
//     let id = "";
//     if (urlObj.hostname.includes("youtube.com")) {
//       id = urlObj.searchParams.get("v");
//     } else if (urlObj.hostname === "youtu.be") {
//       id = urlObj.pathname.slice(1);
//     }

//     if (!id) {
//       alert("Invalid YouTube URL");
//       return;
//     }

//     setLoading(true);
//     setTranscript(""); // Clear previous transcript on new fetch
//     try {
//       const res = await fetch("/api/transcript", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ videoId: id }),
//       });

//       if (!res.ok) {
//         const errorText = await res.text();
//         throw new Error(`Server error: ${errorText}`);
//       }

//       const data = await res.json();

//       if (data.error) {
//         alert(data.error);
//       } else {
//         setTranscript(data.transcript);
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       alert("Network error, please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main
//       className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-300 to-pink-100
//                  dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black
//                  flex items-center justify-center p-6 transition-colors duration-500"
//     >
//       <div
//         className="w-full max-w-3xl bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-80
//                    backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-white/30
//                    dark:border-gray-700 transition-colors duration-500"
//       >
//         <h1
//           className="text-3xl md:text-4xl font-extrabold mb-4 animate-bounce-slow
//                      bg-gradient-to-br from-black via-blue-500 to-slate-500
//                      dark:from-black dark:via-slate-300 dark:to-blue-700
//                      text-transparent bg-clip-text"
//         >
//           🎬 Generate summary
//         </h1>
//         <p
//           className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-6 animate-fade-in
//                      transition-colors duration-500"
//         >
//           Paste a YouTube video URL and get complete summary .
//         </p>

//         <form
//           onSubmit={fetchTranscript}
//           className="flex flex-col gap-4 items-center w-full"
//           noValidate
//         >
//           <input
//             type="url"
//             placeholder="🎥 Paste YouTube URL"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             className="w-full md:w-4/5 p-3 text-lg rounded-xl shadow-md border border-purple-300
//                        dark:border-white focus:outline-none focus:ring-4 focus:ring-gray-300
//                        dark:focus:ring-gray-400 transition-all duration-200 bg-white/90
//                        dark:bg-gray-800/90 dark:text-white placeholder:text-gray-500
//                        dark:placeholder:text-gray-400"
//             required
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className={`px-4 py-2 text-lg font-semibold rounded-xl shadow-md curor-pointertransition-all duration-200 ${
//               loading
//                 ? "bg-gray-600 cursor-not-allowed"
//                 : 'bg-gradient-to-br text- from-gray-500 via-slate-400 to-slate-800  hover:from-violet-500 hover:to-blue-400 cursor-pointer'
//             }`}
//           >
//             {loading ? "⏳ Loading..." : "Generate summary"}
//           </button>
//         </form>

//         {transcript && (
//           <div
//             className="whitespace-pre-wrap mt-8 p-6 border rounded-lg bg-gray-50 text-gray-800
//                        dark:bg-gray-800 dark:text-gray-200 text-left max-h-96 overflow-y-auto"
//           >
//             <h3 className="font-semibold mb-3 text-xl">Transcript:</h3>
//             <p>{transcript}</p>
//           </div>
//         )}

//         <p className="mt-10 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">
//           Built for students! 💜
//         </p>
//       </div>
//     </main>
//   );
// }
