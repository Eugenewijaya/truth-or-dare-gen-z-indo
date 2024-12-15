import { useEffect, useRef } from 'react';

export const useAudio = (url: string, loop: boolean = false) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("https://assets.mixkit.co/music/preview/mixkit-game-show-fun-942.mp3");
    audioRef.current.loop = loop;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [url, loop]);

  const play = () => audioRef.current?.play();
  const pause = () => audioRef.current?.pause();

  return { play, pause };
};