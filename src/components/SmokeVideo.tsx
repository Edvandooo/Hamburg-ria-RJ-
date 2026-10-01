import React, { useRef, useEffect } from 'react';

export const SmokeVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Garante reprodução automática contínua e suave em todos os navegadores
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85; // Movimento cinematográfico suave
      videoRef.current.play().catch(() => {
        // Fallback silencioso para políticas restritivas de autoplay
      });
    }
  }, []);

  return (
    <div 
      className="absolute inset-x-0 top-0 h-[65%] sm:h-[70%] md:h-[72%] z-[5] pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.3) 65%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.3) 65%, transparent 100%)',
      }}
    >
      <video
        ref={videoRef}
        src="/smoke.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-top opacity-80 sm:opacity-90 mix-blend-screen filter contrast-140 brightness-135 pointer-events-none select-none"
        style={{
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};
