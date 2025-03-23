'use client';

import { useState, useRef, useEffect } from 'react';

interface FixedPodcastPlayerProps {
  audioUrl: string;
  title: string;
  image: string;
  isVisible: boolean;
}

const FixedPodcastPlayer = ({ audioUrl, title, image, isVisible }: FixedPodcastPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
        setIsLoading(false);
        setError(null);
      };

      const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        if (audio) {
          audio.currentTime = 0;
        }
      };

      const handleError = (e: any) => {
        console.error('Erreur audio:', e);
        setIsLoading(false);
        setIsPlaying(false);
        setError("Impossible de lire l'audio. Veuillez réessayer plus tard.");
      };

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };

      const handleCanPlayThrough = () => {
        setIsLoading(false);
        setError(null);
      };

      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleError);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('canplaythrough', handleCanPlayThrough);

      // Préchargement de l'audio
      audio.load();

      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      };
    }
  }, [audioUrl]);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        setIsLoading(true);
        setError(null);
        
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            await playPromise;
            setIsPlaying(true);
          }
        }
      } catch (error) {
        console.error('Erreur de lecture:', error);
        setIsPlaying(false);
        setError("Impossible de lire l'audio. Veuillez vérifier votre connexion internet.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    if (!isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="h-1 bg-gray-200">
        <div
          className="h-full bg-yellow-400 transition-all duration-300"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-3">
        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg mb-2 text-sm">
            {error}
          </div>
        )}
        <div className="flex items-center gap-4">
          {/* Image et titre */}
          <div className="flex items-center gap-3 flex-1">
            <div className="relative w-12 h-12 rounded overflow-hidden">
              <img src={image} alt={title} className="object-cover w-full h-full" />
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-900">{title}</h3>
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          {/* Contrôles de lecture */}
          <div className="flex items-center gap-6">
            {/* Retour 10s */}
            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = Math.max(0, currentTime - 10);
                }
              }}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z" />
              </svg>
            </button>

            {/* Lecture/Pause */}
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isLoading ? 'bg-gray-200' : 'bg-yellow-400 hover:bg-yellow-500'
              }`}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>

            {/* Avance 10s */}
            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = Math.min(duration, currentTime + 10);
                }
              }}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z" />
              </svg>
            </button>
          </div>

          {/* Barre de progression */}
          <div className="hidden md:block flex-1 mx-4">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleTimeChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
              style={{
                background: `linear-gradient(to right, #facc15 0%, #facc15 ${(currentTime / duration) * 100}%, #e5e7eb ${(currentTime / duration) * 100}%, #e5e7eb 100%)`
              }}
            />
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioUrl}
        preload="auto"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default FixedPodcastPlayer;
