'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import FixedPodcastPlayer from '@/components/FixedPodcastPlayer';

// Cette fonction simule une requête à une API
const getPodcastById = (id: string) => {
  // Simulation de données
  return {
    id,
    title: "Face à l'histoire",
    description: "Philippe Collin propose des séries documentaires historiques, portées par la parole des meilleurs historiens et truffées d'archives rares. Un regard vers le passé pour éclairer notre présent.",
    longDescription: `Philippe Collin propose des séries documentaires historiques, portées par la parole des meilleurs historiens et truffées d'archives rares. Un regard vers le passé pour éclairer notre présent.

Dans chaque épisode, nous explorons des moments clés de l'histoire à travers des témoignages, des documents d'archives et des analyses d'experts.

Une production qui met en lumière des événements historiques majeurs et leurs répercussions sur notre monde contemporain.`,
    image: '/heroimmage.png',
    category: 'Histoire',
    duration: '54 min',
    audioUrl: '/audio/podcast-sample.mp3'
  };
};

export default function PodcastPage({ params }: { params: { id: string } }) {
  const [podcast, setPodcast] = useState<any>(null);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const podcastData = getPodcastById(params.id);
    setPodcast(podcastData);
  }, [params.id]);

  if (!podcast) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Chargement du podcast...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête avec image de couverture */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={podcast.image}
            alt={podcast.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          
          {/* Bouton retour */}
          <div className="absolute top-6 left-6">
            <Link href="/podcasts" className="inline-flex items-center text-white hover:text-yellow-400 transition-colors">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour
            </Link>
          </div>

          {/* Informations du podcast */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-yellow-400 text-gray-900 text-sm font-medium mb-3">
              {podcast.category}
            </span>
            <h1 className="text-4xl font-bold text-white mb-2">{podcast.title}</h1>
            <p className="text-white/80 text-lg">{podcast.duration}</p>
          </div>
        </div>

        {/* Description et bouton de lecture */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de cet épisode</h2>
            <div className="prose prose-lg prose-yellow">
              {podcast.longDescription.split('\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Bouton de lecture */}
            <button
              onClick={() => setShowPlayer(true)}
              className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Reprendre l'écoute
            </button>
          </div>
        </div>

        {/* Lecteur fixe */}
        <FixedPodcastPlayer
          isVisible={showPlayer}
          audioUrl={podcast.audioUrl}
          title={podcast.title}
          image={podcast.image}
        />
      </div>
    </div>
  );
}
