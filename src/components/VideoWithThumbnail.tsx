import React, { useState } from 'react';
import Image from 'next/image';
import style from './Buttons.module.css'

const VideoWithThumbnail = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'60px' }}>
      {!isPlaying ? (
        <div style={{ position: 'relative', width: '100%', display:'flex', justifyContent:'center', alignItems:'center' }}>
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
          style={{ width:'98%', minWidth:'200px' }}
        >
            <source src="/videos/video.webm" type="video/webm" />
            Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoWithThumbnail;
