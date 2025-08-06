import React from 'react';

function VideoPlayer({ videoId, onEvent }) {
  return (
    <div className="mb-4">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => onEvent('video_play')}
      ></iframe>
    </div>
  );
}

export default VideoPlayer;