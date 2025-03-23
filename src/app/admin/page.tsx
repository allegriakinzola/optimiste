'use client';

import { useState, useEffect } from 'react';
import { RiCastLine, RiUserLine, RiPlayCircleLine } from 'react-icons/ri';

interface DashboardCard {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}
  
export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalPodcasts: 12,
    totalUsers: 156,
    totalListens: 1234,
  });

  const cards: DashboardCard[] = [
    {
      title: 'Total Podcasts',
      value: stats.totalPodcasts,
      icon: <RiCastLine className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
    },
    {
      title: 'Utilisateurs',
      value: stats.totalUsers,
      icon: <RiUserLine className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-gray-700 to-gray-800',
    },
    {
      title: 'Écoutes',
      value: stats.totalListens,
      icon: <RiPlayCircleLine className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#1a1a1a]">Dashboard</h1>
        <p className="text-gray-600 mt-2">Bienvenue dans votre espace d'administration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className={`rounded-xl p-6 ${card.color} text-white shadow-lg transform transition-all duration-200 hover:scale-105`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium mb-1">{card.title}</p>
                <h3 className="text-3xl font-bold">{card.value.toLocaleString()}</h3>
              </div>
              <div className="bg-white/10 p-3 rounded-xl">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Derniers Podcasts</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-[#1a1a1a]">Podcast {i + 1}</h3>
                  <p className="text-sm text-gray-600">Il y a {i + 1} jours</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Activité Récente</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <RiUserLine className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1a1a1a]">Nouvel utilisateur inscrit</h3>
                  <p className="text-sm text-gray-600">Il y a {i + 1} heures</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
