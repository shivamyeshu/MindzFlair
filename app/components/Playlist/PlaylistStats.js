export default function PlaylistStats({ data }) {
  
  return (
    <div className="mt-6 text-left">
      <p><strong>Title of playlist:</strong> {data.title}</p>
      <p><strong>No. of Videos in playlist:</strong> {data.videoCount}</p>
      <p><strong>Total Playlist Duration:</strong> {data.totalDuration}</p>
      <p><strong>Average Video Duration:</strong> {data.averageDuration}</p>
      <hr className="my-4 " />
      <p><strong>At speed 1.25x:</strong> {data.at125x}</p>
      <p><strong>At speed 1.5x:</strong> {data.at15x}</p>
      <p><strong>At speed 1.75x:</strong> {data.at175x}</p>
      <p><strong>At speed 2x:</strong> {data.at2x}</p>
      <p className=" text-green-600 flex  justify-end "> Bro Try video summarizer, jldi ho jaiga</p>
    </div>
  );
}
