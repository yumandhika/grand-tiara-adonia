'use client'

import { useRef } from 'react';

const VideoPlayer = ({ src, poster, width = 640, height = 360 }) => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value;
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        controls
        className="w-full max-w-full rounded-md"
      >
        Your browser does not support the video tag.
      </video>
      <div className="controls mt-2">
        <button
          onClick={handlePlay}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Play
        </button>
        <button
          onClick={handlePause}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Pause
        </button>
        <div className="mt-2">
          <label htmlFor="volume" className="mr-2">Volume:</label>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="1"
            step="0.1"
            defaultValue="1"
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
