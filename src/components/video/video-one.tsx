'use client';
import React from 'react';

const VideOne = () => {

  return (
    <div className="tp-hero-bottom-img-wrap">
      <div className="tp-hero-bottom-img">
        {/* <iframe
          width="100%"
          height="100%"
          src="https://storage.googleapis.com/classic_pating/classic%20painting.mp4?autoplay=1&mute=1&loop=1"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe> */}
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          playsInline
          controls={false} // remove if you want controls
        >
          <source src="https://storage.googleapis.com/classic_pating/classic%20painting.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideOne;