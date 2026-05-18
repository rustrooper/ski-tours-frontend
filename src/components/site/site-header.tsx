import Link from 'next/link';
import { MountainSnow } from 'lucide-react';

import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#about', label: 'О нас' },
  { href: '#tours', label: 'Туры' },
  { href: '#instructors', label: 'Наши инструкторы' },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md supports-[backdrop-filter]:bg-black/20">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-white transition-opacity hover:opacity-80"
        >
          <MountainSnow className="size-6" />
          <span className="text-lg font-semibold tracking-tight">Ski Tours</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <Button asChild size="default">
          <a href="#order">Заказать тур</a>
        </Button>
      </div>
    </header>
  );
}
