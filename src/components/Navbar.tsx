'use client';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg min-w-full fixed top-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex justify-between h-full">
          <div className="min-w-full flex items-center justify-between h-full" >
            <div className="flex-shrink-0 flex items-center h-full">
              <Link href="/" className="flex items-center h-full font-boldoni">
                <Image
                  src="/logo.png"
                  alt="Optimiste Logo"
                  width={100}
                  height={100}
                  className="mr-2"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
              Accueil
              </Link>
              <Link href="/podcasts" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
              podcasts
              </Link>
              <Link href="/documentaires" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                Documentaires
              </Link>
              <Link href="/contact" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                Contact
              </Link>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
