import React, { useMemo } from 'react';

const taglines = [
 
  "Try summarize -Get the highlights before your friends do!",
  "MindzFlair summarize try karo, ho jaiga tension free!",
  "Bhai, MindzFlair se samajh le, sab easy ho jayega! go to summarize",
  "Fikr mat kar, MindzFlair summary se sab clear ho jaega!",
  "MindzFlair laga, time bacha, stress gaya!",
  "Chill maar, MindzFlair summarize karega sab tu bs video bta!",
  "Bhai, MindzFlair pe rely kar, pakka faida hoga!",
  "MindzFlair try kar, sab samajh aa jayega asaani se!",
  "Tension mat le, MindzFlair se playlist ka full gist milega!",
  "MindzFlair use kar, mast summary milegi, ho jaega kaam!",
  "FOMO mat ho, MindzFlair summarize karne se aage badh ja!",
  "MindzFlair pe bharosa kar, time bachayega aur tension hataega!",
  "MindzFlair lagaa, smart ban aur jaldi samajh ja!",
  "Bhai, MindzFlair try kar, full clarity milegi, pakka!",
  "MindzFlair summary se time bhi bachega, kaam bhi ho jaega!",
  "Tension-free rehna hai? MindzFlair try kar!",

  "Bro, try MindzFlair summarize — stress less, learn more!",
  "Don’t wait, try MindzFlair summarize and save your time!",
  "Try MindzFlair summarize — your shortcut to smart learning!",
  "Want it easy? Try MindzFlair summarize and get ahead!",
  "Trust me, try MindzFlair summarize and ace it with ease!",
];

export default function PlaylistStats({ data }) {
  // shuffle tag every time `data` changes
  const randomTag = useMemo(() => {
    return taglines[Math.floor(Math.random() * taglines.length)];
  }, [data]); // depend on `data`

  return (
    <div className="mt-6 text-left  bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100 
                     dark:bg-gradient-to-bl dark:from-slate-900 dark:via-gray-950 dark:to-slate-900 border text-white p-5 rounded-2xl py-6">
      <p ><strong>Title :</strong> {data.title}</p>
      <p><strong>No. of Videos :</strong> {data.videoCount}</p>
      <p><strong>Total Duration:</strong> {data.totalDuration}</p>
      <p><strong>Average Video Duration:</strong> {data.averageDuration}</p>
      <hr className="my-4" />
      <p><strong>At speed 1.25x:</strong> {data.at125x}</p>
      <p><strong>At speed 1.5x:</strong> {data.at15x}</p>
      <p><strong>At speed 1.75x:</strong> {data.at175x}</p>
      <p><strong>At speed 2x:</strong> {data.at2x}</p>
      <p className="text-green-400 flex justify-end">{randomTag}</p>
    </div>
  );
}
