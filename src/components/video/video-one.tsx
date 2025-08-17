'use client';
import React from 'react';

const VideOne = () => {

  return (
    <div className="tp-hero-bottom-img-wrap">
      <div className="tp-hero-bottom-img">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/rKllKmHenPY?autoplay=1&mute=1&loop=1"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideOne;