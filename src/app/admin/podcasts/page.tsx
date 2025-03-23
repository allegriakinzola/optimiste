'use client';

import { useState } from 'react';
import { RiAddLine, RiEditLine, RiDeleteBinLine } from 'react-icons/ri';

interface Podcast {
  id: number;
  title: string;
  description: string;
  duration: number;
  createdAt: string;
  imageUrl?: string;
}

export default function PodcastsManagement() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([
    // Données de test
    {
      id: 1,
      title: "Comment rester optimiste",
      description: "Un podcast sur le pouvoir de l'optimisme",
      duration: 1800,
      createdAt: "2025-03-23",
      imageUrl: "/podcast1.jpg"
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-[#1a1a1a]">Gestion des Podcasts</h1>
        <button className="bg-yellow-400 text-[#1a1a1a] px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-yellow-500 transition-all duration-300 font-medium">
          <RiAddLine className="w-5 h-5" />
          Nouveau Podcast
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#1a1a1a]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Titre
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Durée
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Date de création
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {podcasts.map((podcast) => (
                <tr key={podcast.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {podcast.imageUrl && (
                        <img
                          src={podcast.imageUrl}
                          alt={podcast.title}
                          className="w-12 h-12 rounded-xl mr-4 object-cover"
                        />
                      )}
                      <div className="text-sm font-medium text-[#1a1a1a]">
                        {podcast.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600 truncate max-w-xs">
                      {podcast.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {Math.floor(podcast.duration / 60)}:{(podcast.duration % 60)
                        .toString()
                        .padStart(2, '0')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">
                      {new Date(podcast.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-4">
                      <button className="text-yellow-400 hover:text-yellow-500 transition-colors duration-200">
                        <RiEditLine className="w-5 h-5" />
                      </button>
                      <button className="text-red-500 hover:text-red-700 transition-colors duration-200">
                        <RiDeleteBinLine className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
