import React, { useState } from 'react';
import Image from 'next/image';
import style from './Buttons.module.css'

const VideoWithThumbnail = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      {!isPlaying ? (
        <div style={{ position: 'relative', width: '100%' }}>
          <Image 
            className='video'
            src={"/images/Thumbnail.jpg"}
            alt="Thumbnail" 
            width={897} 
            height={505} 
          />
          <button className={style.playBtn} onClick={playVideo}>
            <Image src={"/images/Play.svg"} alt='play' width={88} height={88} />
          </button>
        </div>
      ) : (
        <video 
          controls
          autoPlay
          className='video'
        >
            <source src="/videos/video.webm" type="video/webm" />
            Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoWithThumbnail;
