import React, { useState } from 'react';
import Image from 'next/image';
import style from './Buttons.module.css'

const VideoWithThumbnail = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className='video-div'>
      {!isPlaying ? (
        <div >
          <Image 
            className='video'
            src={"/images/Thumbnail.webP"}
            alt="Thumbnail" 
            width={10} 
            height={10}
            style={{ width: '100%', height: 'auto' }}
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
          style={{ width:'100%', minWidth:'200px' }}
        >
            <source src="/videos/video.webm" type="video/webm" />
            Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoWithThumbnail;
