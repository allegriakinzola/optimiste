'use client';

import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';

// Données des documentaires
const documentaires = [
  {
    id: 1,
    title: "L'Héritage des Royaumes Africains",
    description: "Un voyage à travers les dynasties historiques qui ont façonné l'Afrique",
    thumbnail: "/imagehero2.png",
    duration: "52:14",
    youtubeUrl: "https://youtube.com/watch?v=xxxxx1",
    views: "125K"
  },
  {
    id: 2,
    title: "Les Gardiens de la Tradition",
    description: "À la rencontre des gardiens des savoirs ancestraux africains",
    thumbnail: "/imagehero3.png",
    duration: "45:30",
    youtubeUrl: "https://youtube.com/watch?v=xxxxx2",
    views: "98K"
  },
  {
    id: 3,
    title: "Renaissance Africaine",
    description: "L'émergence d'une nouvelle génération d'innovateurs africains",
    thumbnail: "/imagehero4.png",
    duration: "38:45",
    youtubeUrl: "https://youtube.com/watch?v=xxxxx3",
    views: "156K"
  },
  {
    id: 4,
    title: "Les Routes du Commerce",
    description: "L'histoire des grandes routes commerciales qui ont relié l'Afrique au monde",
    thumbnail: "/bacgroundimage.jpg",
    duration: "49:20",
    youtubeUrl: "https://youtube.com/watch?v=xxxxx4",
    views: "112K"
  }
];

export default function Documentaires() {
  return (
    <div className="relative min-h-screen py-24">
      {/* Background avec dégradé */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-[70%] bg-white"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[30%]">
          <Image
            src="/bacgroundimage.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/80 to-white"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* En-tête */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-yellow-400 text-gray-900 text-sm font-medium mb-4">
              Documentaires
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Documentaires
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre collection de documentaires sur l'histoire et la culture africaine. 
              Chaque film est une fenêtre ouverte sur la richesse du continent.
            </p>
          </div>
        </ScrollAnimation>

        {/* Grille de documentaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {documentaires.map((doc, index) => (
            <ScrollAnimation key={doc.id} delay={index * 0.2}>
              <a
                href={doc.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                  <div className="relative aspect-video">
                    <Image
                      src={doc.thumbnail}
                      alt={doc.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      {doc.duration}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      {doc.views}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600">
                      {doc.description}
                    </p>
                    <div className="mt-4 flex items-center text-yellow-600">
                      <span className="font-medium">Regarder sur YouTube</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
