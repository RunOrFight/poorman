import { useEffect, useRef } from 'react';
import { sound_menu_main } from '../assets';

const Music = ({ children }: any) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current?.play();
    };

    // Add a click event listener to trigger audio playback
    document.addEventListener('click', playAudio);
    if (audioRef.current?.volume) {
      audioRef.current.volume = 0.03;
    }

    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={sound_menu_main} type="audio/mpeg" />
      </audio>
      {children}
    </>
  );
};

export default Music;
