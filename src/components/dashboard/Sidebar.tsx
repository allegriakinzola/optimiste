'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import { 
  RiDashboardLine, 
  RiCastLine, 
  RiUserLine,
  RiHome2Line,
  RiLogoutBoxRLine
} from 'react-icons/ri';

interface NavItem {
  label: string;
  href: string;
  icon: IconType;
  onClick?: () => void;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: RiDashboardLine },
  { label: 'Gestion Podcasts', href: '/admin/podcasts', icon: RiCastLine },
  { label: 'Utilisateurs', href: '/admin/users', icon: RiUserLine },
  { label: 'Retour Accueil', href: '/', icon: RiHome2Line },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  const isActive = (path: string) => {
    if (path === '/') return false;
    return pathname === path;
  };

  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-[#1a1a1a] to-[#0D0D0D] fixed left-0 top-0 z-50">
      <div className="p-6 flex flex-col h-full">
        <Link 
          href="/" 
          className="block mb-8 hover:opacity-80 transition-opacity"
        >
          <h1 className="text-2xl font-bold text-yellow-400">Optimiste Admin</h1>
        </Link>

        <nav className="space-y-2 flex-grow">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 
                  rounded-lg transition-colors duration-200
                  ${active 
                    ? 'bg-yellow-400 text-[#1a1a1a]' 
                    : 'text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400'
                  }
                `}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 px-4 py-3 w-full
                   text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400
                   rounded-lg transition-colors duration-200"
        >
          <RiLogoutBoxRLine className="w-5 h-5" />
          <span>Se déconnecter</span>
        </button>
      </div>
    </aside>
  );
}
