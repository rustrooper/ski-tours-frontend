import { Icon } from '@/components/brand/Icon';
import { LogoMark } from '@/components/brand/LogoMark';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type FooterItem = { label: string; href: string };
type FooterColumn = { title: string; items: FooterItem[] };

const COLUMNS: FooterColumn[] = [
  {
    title: 'Навигация',
    items: [
      { label: 'О нас', href: '#about' },
      { label: 'Направления', href: '#destinations' },
      { label: 'Отзывы', href: '#reviews' },
      { label: 'Подобрать тур', href: '#cta' },
    ],
  },
  {
    title: 'Курорты',
    items: [
      { label: 'Шерегеш', href: '#' },
      { label: 'Кировск', href: '#' },
      { label: 'Домбай', href: '#' },
      { label: 'Ещё 4 · 25–26', href: '#' },
    ],
  },
  {
    title: 'Контакты',
    items: [
      { label: '+7 (495) 000-00-00', href: 'tel:+74950000000' },
      { label: 'hello@sanek.tours', href: 'mailto:hello@sanek.tours' },
      { label: 'Telegram @saneksupport', href: 'https://t.me/saneksupport' },
      { label: 'WhatsApp +7 985 ...', href: 'https://wa.me/79850000000' },
    ],
  },
];

const SOCIALS: Array<{ key: string; label: string; icon: () => React.ReactElement }> = [
  { key: 'tg', label: 'Telegram', icon: () => <Icon.tg /> },
  { key: 'wa', label: 'WhatsApp', icon: () => <Icon.wa /> },
  { key: 'vk', label: 'VK', icon: () => <Icon.vk /> },
  { key: 'inst', label: 'Instagram', icon: () => <Icon.inst /> },
];

export function FooterSection() {
  return (
    <footer className="border-hairline bg-bg-0 border-t px-5 pt-16 pb-8 md:px-16 md:pt-20">
      <div className="mx-auto w-full max-w-360">
        <div className="mb-12 grid grid-cols-2 gap-12 md:mb-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <LogoMark size={17} />
            <p className="text-fg-2 mt-4 max-w-70 text-[13px] leading-relaxed">
              Авторские горнолыжные туры по России. От тех, кто сам катается — для тех, кто хочет
              начать.
            </p>
            <div className="mt-6 flex gap-2">
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
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="section-num mb-4">{col.title}</div>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="text-fg-1 hover:text-fg-0 text-sm no-underline transition-colors duration-150"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-hairline" />

        <div className="text-fg-2 flex flex-col gap-4 pt-7 text-xs md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Sanek Tours · ИНН 0000000000 · ОГРНИП 000000000000000
          </span>
          <div className="flex flex-wrap gap-6">
            <a
              href="#"
              className="text-fg-2 hover:text-fg-0 no-underline transition-colors duration-150"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-fg-2 hover:text-fg-0 no-underline transition-colors duration-150"
            >
              Договор-оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
