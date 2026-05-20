'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Icon } from '@/components/brand/Icon';
import { LogoMark } from '@/components/brand/LogoMark';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const NAV = [
  { href: '#about', label: 'О нас', num: '01' },
  { href: '#destinations', label: 'Направления', num: '02' },
  { href: '#reviews', label: 'Отзывы', num: '03' },
];

const SOCIALS: Array<{ key: string; label: string; icon: () => React.ReactElement }> = [
  { key: 'tg', label: 'Telegram', icon: () => <Icon.tg /> },
  { key: 'wa', label: 'WhatsApp', icon: () => <Icon.wa /> },
  { key: 'vk', label: 'VK', icon: () => <Icon.vk /> },
  { key: 'inst', label: 'Instagram', icon: () => <Icon.inst /> },
];

export function HeaderSection() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="border-hairline fixed inset-x-0 top-0 z-50 border-b"
      style={{
        background: 'oklch(0.13 0.012 240 / 0.4)',
        backdropFilter: 'blur(18px) saturate(160%)',
      }}
    >
      <div className="mx-auto flex h-16 w-full max-w-360 items-center justify-between px-5 md:h-17 md:px-16">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <LogoMark size={17} />
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          {NAV.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-fg-1 hover:text-fg-0 rounded-full px-4 py-2.5 transition-colors hover:bg-white/4"
            >
              {label}
            </a>
          ))}
          <Separator orientation="vertical" className="bg-hairline mx-3 h-5.5!" />
          <Button asChild variant="ice" size="pill">
            <a href="#cta">
              Подобрать тур
              <Icon.arrowRight />
            </a>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost-pill"
              size="icon-pill-sm"
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              className="md:hidden"
            >
              <Icon.menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-l-hairline bg-bg-0/95 flex w-full flex-col gap-0 px-6 pt-20 pb-9 backdrop-blur-2xl sm:max-w-md"
          >
            <SheetTitle className="sr-only">Меню</SheetTitle>
            <nav className="mt-6">
              {NAV.map(({ href, label, num }) => (
                <SheetClose asChild key={href}>
                  <a
                    href={href}
                    className="border-hairline text-fg-0 flex items-baseline gap-5 border-b py-6"
                  >
                    <span className="text-fg-2 font-mono text-[11px] tracking-widest">{num}</span>
                    <span className="font-display text-[32px] tracking-[-0.03em]">{label}</span>
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a
                  href="#cta"
                  className="border-hairline text-ice flex items-center justify-between border-b py-6"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-fg-2 font-mono text-[11px] tracking-widest">04</span>
                    <span className="font-display text-[32px] tracking-[-0.03em]">
                      Подобрать тур
                    </span>
                  </div>
                  <Icon.arrowRight />
                </a>
              </SheetClose>
            </nav>

            <div className="mt-auto">
              <div className="text-fg-3 mb-4 font-mono text-[11px] tracking-[0.18em] uppercase">
                Контакты
              </div>
              <div className="mb-3 flex gap-2.5">
                {SOCIALS.map((s) => (
                  <Button
                    key={s.key}
                    asChild
                    variant="ghost-pill"
                    size="icon-pill-sm"
                    aria-label={s.label}
                  >
                    <a href="#">{s.icon()}</a>
                  </Button>
                ))}
              </div>
              <div className="text-fg-1 text-sm">+7 (495) 000-00-00</div>
              <div className="text-fg-2 mt-1 text-[13px]">hello@sanek.tours</div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
