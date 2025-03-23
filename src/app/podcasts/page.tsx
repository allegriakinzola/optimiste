'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Podcast {
  id: number;
  title: string;
  description: string;
  duration: string;
  image: string;
  category: string;
}

const podcasts: Podcast[] = [
  {
    id: 1,
    title: "L'art de la résilience",
    description: "Comment transformer les obstacles en opportunités et développer une mentalité positive.",
    duration: "45 min",
    image: "/imagehero2.png",
    category: "Développement personnel"
  },
  {
    id: 2,
    title: "Entrepreneurs optimistes",
    description: "Des histoires inspirantes d'entrepreneurs qui ont réussi malgré les défis.",
    duration: "38 min",
    image: "/imagehero3.png",
    category: "Business"
  },
  {
    id: 3,
    title: "Méditation positive",
    description: "Techniques de méditation pour cultiver l'optimisme au quotidien.",
    duration: "25 min",
    image: "/imagehero4.png",
    category: "Bien-être"
  },
  {
    id: 4,
    title: "Science du bonheur",
    description: "Les dernières découvertes scientifiques sur le bonheur et l'optimisme.",
    duration: "42 min",
    image: "/imagehero2.png",
    category: "Science"
  },
  {
    id: 5,
    title: "Relations positives",
    description: "Comment construire et maintenir des relations enrichissantes.",
    duration: "35 min",
    image: "/imagehero3.png",
    category: "Relations"
  },
  {
    id: 6,
    title: "Succès et optimisme",
    description: "Le lien entre une attitude positive et la réussite professionnelle.",
    duration: "40 min",
    image: "/imagehero4.png",
    category: "Carrière"
  }
];

export default function PodcastsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(podcasts.map(podcast => podcast.category)));

  const filteredPodcasts = podcasts.filter(podcast => {
    const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         podcast.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || podcast.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête et recherche */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Découvrez nos podcasts</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Barre de recherche */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un podcast..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Filtre par catégorie */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              <option value="">Toutes les catégories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grille de podcasts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPodcasts.map(podcast => (
            <div key={podcast.id} className="bg-white rounded-2xl shadow-lg overflow-hidden podcast-card">
              <Link href={`/podcasts/${podcast.id}`} className="block">
                <div className="relative h-48">
                  <Image
                    src={podcast.image}
                    alt={podcast.title}
                    fill
                    className="card-image object-cover"
                  />
                  {/* Overlay sombre au survol */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  
                  {/* Icône de lecture centrale */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center play-button hover:bg-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Informations en bas de la carte */}
                  <div className="absolute bottom-4 left-4 right-4 transition-all duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm mb-2">
                      {podcast.category}
                    </span>
                    <p className="text-white text-sm">{podcast.duration}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300">{podcast.title}</h3>
                  <p className="text-gray-600 mb-4">{podcast.description}</p>
                  <div className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold transition-colors">
                    Voir le détail
                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredPodcasts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucun podcast ne correspond à votre recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
