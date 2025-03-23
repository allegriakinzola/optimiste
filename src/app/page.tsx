'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AudioPlayer from "@/components/AudioPlayer";
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const handlePodcastClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPlayerVisible(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Section Découverte */}
      <div className="relative py-24 overflow-hidden">
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
          <div className="flex flex-col-reverse lg:flex lg:flex-row gap-12 items-center">
            {/* Texte */}
            <ScrollAnimation className="relative z-10 w-full lg:w-1/2">
              <span className="inline-block px-4 py-1 rounded-full bg-yellow-400 text-gray-900 text-sm font-medium mb-4">
                Nouveau
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Découvrez l'Histoire Authentique de l'Afrique
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Brisez les chaînes du récit colonial et plongez au cœur de la véritable mémoire africaine. 
                Notre média met en lumière la richesse de la culture afro en RDC et ailleurs, pour réécrire notre histoire avec fierté et vérité.
              </p>
              
              {/* Features */}
              <div className="space-y-4">
                <ScrollAnimation delay={0.2} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Réapprenons</h3>
                    <p className="text-gray-600">
                      Redécouvrez l'histoire africaine à travers des récits authentiques et documentés
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.4} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Réveillons</h3>
                    <p className="text-gray-600">
                      Éveillons les consciences et ravivons la fierté de notre héritage culturel
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.6} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Révolutionnons</h3>
                    <p className="text-gray-600">
                      Transformons notre narratif avec des intervenants de qualité et des perspectives nouvelles
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            {/* Image */}
            <ScrollAnimation delay={0.8} className="relative w-full lg:w-1/2 h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/heroimmage.png"
                alt="Africa"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay avec des cercles décoratifs */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-4 border-white/20" />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border-4 border-white/20" />
              </div>
              {/* Badge flottant */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Histoire & Culture</div>
                    <div className="text-xs text-gray-600">Nouveau podcast</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

          </div>
        </div>
      </div>

      {/* Section Actualités et Médias */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-red-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ScrollAnimation>
                <div className="absolute -left-4 -top-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -right-4 -bottom-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute left-20 -bottom-4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                
                <div className="relative text-center lg:text-left">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Restez Connecté
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-lg">
                    Suivez nos actualités, articles de blog et contenus exclusifs. 
                    Rejoignez une communauté passionnée par l'histoire et la culture africaine.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all">
                      Blog & Articles
                    </button>
                    <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all border border-gray-200">
                      Newsletter
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ScrollAnimation delay={0.2}>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/imagehero2.png"
                    alt="Image 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/imagehero3.png"
                    alt="Image 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.6}>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/imagehero3.png"
                    alt="Image 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.8}>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/imagehero2.png"
                    alt="Image 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Section Histoire et Culture */}
      <div className="relative overflow-hidden py-24 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/africa.png"
            alt="Africa Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                L'Histoire à travers les Voix
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Plongez dans la richesse des traditions orales africaines, où chaque histoire est un pont entre le passé et le présent.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <ScrollAnimation delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Traditions Orales</h3>
                <p className="text-gray-300 mb-6">
                  Découvrez les contes, mythes et légendes transmis de génération en génération.
                </p>
                <Link href="/podcasts" className="inline-flex items-center text-yellow-400 hover:text-yellow-300">
                  Explorer les histoires
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollAnimation>

            {/* Carte 2 */}
            <ScrollAnimation delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Musique & Rythmes</h3>
                <p className="text-gray-300 mb-6">
                  Explorez la diversité des rythmes et mélodies qui ont façonné l'identité africaine.
                </p>
                <Link href="/podcasts" className="inline-flex items-center text-yellow-400 hover:text-yellow-300">
                  Découvrir les sons
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollAnimation>

            {/* Carte 3 */}
            <ScrollAnimation delay={0.6}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Voix Contemporaines</h3>
                <p className="text-gray-300 mb-6">
                  Écoutez les nouvelles voix qui façonnent l'avenir du continent africain.
                </p>
                <Link href="/podcasts" className="inline-flex items-center text-yellow-400 hover:text-yellow-300">
                  Rencontrer les créateurs
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollAnimation>
          </div>

          {/* Call to Action */}
          <ScrollAnimation delay={0.8} className="mt-16 text-center">
            <button 
              onClick={() => setIsPlayerVisible(true)}
              className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-xl transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Écouter un extrait
            </button>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Épisodes Populaires */}
      <div className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Épisodes Populaires</h2>
            <p className="text-xl text-gray-600">Découvrez nos épisodes les plus appréciés par la communauté</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Episode 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform">
              <div className="relative h-48">
                <Image
                  src="/imagehero2.png"
                  alt="Episode 1"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">Épisode 12 • 45 min</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">L'Histoire Réécrite</h3>
                <p className="text-gray-600 mb-4">
                  Explorations des récits historiques africains à travers un nouveau prisme.
                </p>
                <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold">
                  Écouter maintenant
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Episode 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform">
              <div className="relative h-48">
                <Image
                  src="/imagehero3.png"
                  alt="Episode 2"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">Épisode 8 • 38 min</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Voix de la Diaspora</h3>
                <p className="text-gray-600 mb-4">
                  Témoignages inspirants de la diaspora africaine à travers le monde.
                </p>
                <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold">
                  Écouter maintenant
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Episode 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform">
              <div className="relative h-48">
                <Image
                  src="/imagehero4.png"
                  alt="Episode 3"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">Épisode 15 • 42 min</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Culture en Mouvement</h3>
                <p className="text-gray-600 mb-4">
                  L'évolution de la culture africaine contemporaine et son impact global.
                </p>
                <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold">
                  Écouter maintenant
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Commentaires */}
      <div className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vos Retours
            </h2>
            <p className="text-xl text-gray-600">
              Partagez votre expérience et vos impressions avec notre communauté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte de commentaire 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">M</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Marie K.</h3>
                  <p className="text-sm text-gray-500">Il y a 2 jours</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Une excellente plateforme qui met en valeur la richesse culturelle de l'Afrique. 
                Les podcasts sont très bien produits et informatifs."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Qualité Audio
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Contenu
                </span>
              </div>
            </div>

            {/* Carte de commentaire 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">P</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Pierre M.</h3>
                  <p className="text-sm text-gray-500">Il y a 5 jours</p>
                </div>
              </div>
              <p className="text-gray-600">
                "J'apprécie particulièrement la diversité des sujets abordés. 
                Cela permet de découvrir des aspects méconnus de la culture africaine."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Diversité
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  Culture
                </span>
              </div>
            </div>

            {/* Carte de commentaire 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">S</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Sophie L.</h3>
                  <p className="text-sm text-gray-500">Il y a 1 semaine</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Une initiative formidable qui donne la parole aux talents africains. 
                Les épisodes sont captivants et bien structurés."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  Innovation
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Qualité
                </span>
              </div>
            </div>
          </div>

          {/* Bouton Ajouter un commentaire */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Ajouter un commentaire
            </button>
          </div>
        </div>
      </div>

      {/* Section Intervenants */}
      <div className="relative overflow-hidden py-24 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/africa.png"
            alt="Africa Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-red-500/10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <ScrollAnimation>
              <span className="inline-block px-4 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium mb-4">
                Devenez Intervenant
              </span>
              <h2 className="text-4xl text-white font-bold mb-6">
                Partagez Votre Vision du Panafricanisme
              </h2>
              <p className="text-xl text-gray-300">
                Vous avez une perspective unique sur le panafricanisme ? Une histoire à partager ? 
                Des idées pour construire une Afrique plus forte et unie ? Rejoignez-nous comme intervenant.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ScrollAnimation delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expertise</h3>
                <p className="text-gray-300">
                  Partagez votre expertise sur l'histoire, la culture, l'économie ou la politique panafricaine
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Dialogue</h3>
                <p className="text-gray-300">
                  Contribuez à un dialogue constructif sur l'avenir de l'Afrique et sa place dans le monde
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.6}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Impact</h3>
                <p className="text-gray-300">
                  Inspirez la prochaine génération de leaders et penseurs panafricains
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.8} className="text-center">
            <a 
              href="https://forms.google.com/votre-formulaire" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-xl hover:bg-yellow-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              S'enregistrer comme intervenant
            </a>
            <p className="mt-4 text-sm text-gray-400">
              Nous examinerons votre candidature et vous recontacterons rapidement
            </p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Lecteur Audio */}
      <AudioPlayer
        isVisible={isPlayerVisible}
        onClose={() => setIsPlayerVisible(false)}
        audioUrl="/audio/podcast-sample.mp3"
        title="Épisode découverte"
      />
    </div>
  );
}
