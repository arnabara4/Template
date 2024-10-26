import React from 'react';
import video from '../assets/video.webm';
import styles from "../styles/BackgroundVideo.module.css";

const BackgroundVideo = () => {
  return (
    <div className={styles.backgroundvideocontainer}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundvideo}
      >
        <source src={video} type="video/webm" />
        
      </video>
    </div>
  );
};

export default BackgroundVideo;
