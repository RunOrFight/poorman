import { forwardRef } from 'react';

interface IAudioProps {
  src: string;
}

const Audio = forwardRef<HTMLAudioElement, IAudioProps>(({ src }, ref) => {
  return (
    <audio ref={ref}>
      <source src={src} type="audio/mpeg" />
    </audio>
  );
});

export default Audio;
