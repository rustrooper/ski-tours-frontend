// Sanek Tours — Mobile artboards (390 wide, key states)

function MobileFrame({ children, height = 844 }) {
  return (
    <div className="st-root" style={{ width: 390, height, position: 'relative' }}>
      {/* status bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 44,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 24px',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 14,
          color: 'var(--fg-0)',
          pointerEvents: 'none',
        }}
      >
        <span style={{ letterSpacing: '-0.02em' }}>9:41</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path
              d="M1 8 H3 V10 H1Z M5 6 H7 V10 H5Z M9 4 H11 V10 H9Z M13 2 H15 V10 H13Z"
              fill="currentColor"
            />
          </svg>
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M1 5 a6 6 0 0 1 12 0" />
          </svg>
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
            <rect x="0.5" y="1.5" width="18" height="7" rx="1.5" stroke="currentColor" />
            <rect x="2" y="3" width="14" height="4" rx="0.5" fill="currentColor" />
            <rect x="19" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor" />
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
}

function MobileHeader({ open = false, onToggle }) {
  return (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingTop: 44,
        background: open ? 'transparent' : 'oklch(0.13 0.012 240 / 0.4)',
        backdropFilter: open ? 'none' : 'blur(18px) saturate(160%)',
        borderBottom: open ? 'none' : '1px solid var(--hairline)',
      }}
    >
      <div
        style={{
          height: 56,
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <LogoMark size={15} />
        <button className="icon-btn" style={{ width: 40, height: 40 }}>
          {open ? <Icon.close /> : <Icon.menu />}
        </button>
      </div>
    </header>
  );
}

// 1) Hero — closed header
function MobileHero() {
  return (
    <MobileFrame>
      <MobileHeader />
      <Photo kind="hero" heroLight style={{ position: 'absolute', inset: 0 }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, oklch(0 0 0 / 0.55) 0%, oklch(0 0 0 / 0.15) 30%, oklch(0 0 0 / 0.2) 60%, oklch(0.13 0.012 240) 100%)',
        }}
      />

      {/* video-fallback hint, mono */}
      <div
        style={{
          position: 'absolute',
          top: 116,
          right: 20,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 12px',
          borderRadius: 999,
          background: 'oklch(0 0 0 / 0.4)',
          border: '1px solid var(--hairline-strong)',
          backdropFilter: 'blur(8px)',
          fontFamily: 'var(--font-mono)',
          fontSize: 9,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--fg-1)',
        }}
      >
        <span className="live-dot" /> POSTER · TAP TO PLAY
      </div>

      <div
        style={{
          position: 'absolute',
          left: 20,
          right: 20,
          bottom: 0,
          top: 100,
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: 40,
        }}
      >
        <div className="st-eyebrow" style={{ marginBottom: 20, fontSize: 10 }}>
          season 25 / 26
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: 60,
            lineHeight: 0.95,
            letterSpacing: '-0.045em',
            margin: 0,
            fontWeight: 600,
          }}
        >
          Туда,
          <br />
          где живёт
          <br />
          <em style={{ color: 'var(--ice)', fontWeight: 500, fontStyle: 'italic' }}>пухляк.</em>
        </h1>
        <p
          style={{
            marginTop: 18,
            fontSize: 15,
            color: 'var(--fg-1)',
            maxWidth: 320,
            lineHeight: 1.5,
          }}
        >
          Авторские горнолыжные туры по России от тех, кто сам катается.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 28 }}>
          <button className="st-btn st-btn-ice" style={{ height: 52, width: '100%', fontSize: 15 }}>
            Подобрать тур <Icon.arrowRight />
          </button>
          <button
            className="st-btn st-btn-ghost"
            style={{ height: 52, width: '100%', fontSize: 15 }}
          >
            Смотреть направления <Icon.arrowDown />
          </button>
        </div>
      </div>
    </MobileFrame>
  );
}

// 2) Burger open — full-screen overlay
function MobileBurger() {
  return (
    <MobileFrame>
      {/* dark backdrop with subtle ridge */}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-0)' }} />
      <Photo kind="hero" style={{ position: 'absolute', inset: 0, opacity: 0.18 }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, oklch(0.13 0.012 240 / 0.95) 0%, oklch(0.13 0.012 240 / 0.85) 100%)',
        }}
      />
      <MobileHeader open />

      <div
        style={{
          position: 'absolute',
          top: 110,
          left: 24,
          right: 24,
          bottom: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <nav style={{ marginTop: 24 }}>
          {[
            ['01', 'О нас'],
            ['02', 'Направления'],
            ['03', 'Отзывы'],
            ['04', 'Подобрать тур'],
          ].map(([num, label], i) => (
            <a
              key={label}
              href="#"
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 20,
                padding: '24px 0',
                textDecoration: 'none',
                borderBottom: '1px solid var(--hairline)',
                color: i === 3 ? 'var(--ice)' : 'var(--fg-0)',
              }}
            >
              <span
                className="font-mono"
                style={{ fontSize: 11, color: 'var(--fg-2)', letterSpacing: '0.1em' }}
              >
                {num}
              </span>
              <span className="font-display" style={{ fontSize: 32, letterSpacing: '-0.03em' }}>
                {label}
              </span>
              {i === 3 && (
                <span style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                  <Icon.arrowRight />
                </span>
              )}
            </a>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingBottom: 36 }}>
          <div className="section-num" style={{ marginBottom: 16 }}>
            Контакты
          </div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
            <a href="#" className="icon-btn" style={{ width: 40, height: 40 }}>
              <Icon.tg />
            </a>
            <a href="#" className="icon-btn" style={{ width: 40, height: 40 }}>
              <Icon.wa />
            </a>
            <a href="#" className="icon-btn" style={{ width: 40, height: 40 }}>
              <Icon.vk />
            </a>
            <a href="#" className="icon-btn" style={{ width: 40, height: 40 }}>
              <Icon.inst />
            </a>
          </div>
          <div style={{ color: 'var(--fg-1)', fontSize: 14 }}>+7 (495) 000-00-00</div>
          <div className="st-small" style={{ marginTop: 4 }}>
            hello@sanek.tours
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

// 3) Destinations stacked
function MobileDest() {
  return (
    <MobileFrame height={1080}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-1)' }} />
      <MobileHeader />

      <div style={{ position: 'absolute', top: 116, left: 20, right: 20 }}>
        <div className="section-num" style={{ marginBottom: 14 }}>
          02 / Направления
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: 40,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            margin: 0,
            fontWeight: 600,
          }}
        >
          Курорты, которые
          <br />
          мы <em style={{ color: 'var(--ice)', fontWeight: 500, fontStyle: 'italic' }}>знаем</em>
          <br />
          лично.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 36 }}>
          {DESTINATIONS.map((d, i) => (
            <article key={d.name} className="dest-card" style={{ height: 200 }}>
              <Photo
                kind={d.kind}
                src={d.src}
                objectPosition={d.pos}
                style={{ position: 'absolute', inset: 0 }}
              />
              <div className="scrim" />
              <div className="body" style={{ padding: 20, height: '100%' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    right: 16,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span className="chip" style={{ fontSize: 9 }}>
                    {d.tag}
                  </span>
                  <span
                    className="font-mono"
                    style={{ fontSize: 10, color: 'var(--fg-1)', opacity: 0.7 }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 9,
                    color: 'var(--fg-2)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {d.region}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 30,
                    lineHeight: 1,
                    margin: '4px 0 0',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {d.name}
                </h3>
                <div style={{ position: 'absolute', right: 20, bottom: 20 }}>
                  <button
                    className="icon-btn"
                    style={{
                      width: 36,
                      height: 36,
                      background: 'var(--ice)',
                      borderColor: 'var(--ice)',
                      color: 'oklch(0.18 0.012 240)',
                    }}
                  >
                    <Icon.arrowUpRight />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* dots indicator (carousel hint) */}
      <div
        style={{
          position: 'absolute',
          bottom: 30,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div className="dots">
          <span className="d on" />
          <span className="d" />
          <span className="d" />
        </div>
      </div>
    </MobileFrame>
  );
}

// 4) CTA form
function MobileCTA() {
  return (
    <MobileFrame>
      <Photo kind="cta" style={{ position: 'absolute', inset: 0 }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, oklch(0.13 0.012 240 / 0.7) 0%, oklch(0 0 0 / 0.4) 50%, oklch(0.13 0.012 240 / 0.95) 100%)',
        }}
      />
      <MobileHeader />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          paddingTop: 100,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '100px 20px 40px',
          zIndex: 10,
        }}
      >
        <div className="st-eyebrow" style={{ marginBottom: 20, fontSize: 10 }}>
          04 / подбор
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: 48,
            lineHeight: 0.95,
            letterSpacing: '-0.045em',
            margin: 0,
            fontWeight: 600,
          }}
        >
          Подобрать
          <br />
          тур.
        </h2>
        <p style={{ marginTop: 18, fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.5 }}>
          Оставьте номер — менеджер расскажет подробнее о предстоящем путешествии.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 28 }}>
          <input className="st-input" placeholder="+7 ___ ___ __ __" />
          <button className="st-btn st-btn-ice" style={{ height: 56, fontSize: 15 }}>
            Подобрать <Icon.arrowRight />
          </button>
        </div>

        <div
          style={{
            marginTop: 16,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            color: 'var(--fg-2)',
          }}
        >
          <span style={{ marginTop: 2 }}>
            <Icon.shield />
          </span>
          <span className="st-small">
            Нажимая «Подобрать», вы соглашаетесь с{' '}
            <a href="#" style={{ color: 'var(--fg-1)', textDecoration: 'underline' }}>
              политикой обработки персональных данных
            </a>
            .
          </span>
        </div>

        <div
          style={{
            marginTop: 32,
            paddingTop: 24,
            borderTop: '1px solid var(--hairline)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <span className="st-small">или напишите в мессенджер:</span>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="#" className="st-btn st-btn-ghost" style={{ flex: 1, height: 48 }}>
              <Icon.tg /> Telegram
            </a>
            <a href="#" className="st-btn st-btn-ghost" style={{ flex: 1, height: 48 }}>
              <Icon.wa /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

// 5) About + reviews mobile
function MobileAbout() {
  return (
    <MobileFrame height={1100}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-0)' }} />
      <MobileHeader />

      <div style={{ position: 'absolute', top: 116, left: 20, right: 20, paddingBottom: 40 }}>
        <div className="section-num" style={{ marginBottom: 14 }}>
          01 / О нас
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: 40,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            margin: 0,
            fontWeight: 600,
          }}
        >
          Россия — рай
          <br />
          для райдера.
        </h2>

        {/* carousel first on mobile */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--r-lg)',
            overflow: 'hidden',
            aspectRatio: '4/5',
            marginTop: 28,
          }}
        >
          <Photo
            kind="about1"
            label="PHOTO · KAMCHATKA '25"
            style={{ position: 'absolute', inset: 0 }}
          />
          <div style={{ position: 'absolute', bottom: 16, right: 16, display: 'flex', gap: 8 }}>
            <button className="icon-btn" style={{ width: 38, height: 38 }}>
              <Icon.chevL />
            </button>
            <button className="icon-btn" style={{ width: 38, height: 38 }}>
              <Icon.chevR />
            </button>
          </div>
          <div
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--fg-0)',
              padding: '4px 10px',
              background: 'oklch(0 0 0 / 0.4)',
              borderRadius: 999,
            }}
          >
            02 / 06
          </div>
        </div>

        {/* dots */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14, marginBottom: 28 }}>
          <div className="dots">
            <span className="d" />
            <span className="d on" />
            <span className="d" />
            <span className="d" />
            <span className="d" />
            <span className="d" />
          </div>
        </div>

        <p className="st-body" style={{ margin: 0 }}>
          Найти идеальный склон, мягкий пухляк и работающий подъёмник без «сюрпризов» может только
          местный эксперт.
        </p>

        <h4 className="st-h4" style={{ margin: '24px 0 8px', color: 'var(--ice)', fontSize: 18 }}>
          Мы — не агрегатор.
        </h4>
        <p className="st-body" style={{ margin: 0 }}>
          Мы команда фанатов, которые живут горами. Лично объездили все курорты от Кольского до
          Камчатки.
        </p>

        {/* stat grid */}
        <div
          style={{
            marginTop: 32,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid var(--hairline)',
            borderBottom: '1px solid var(--hairline)',
          }}
        >
          {[
            ['7', 'лет'],
            ['12', 'регионов'],
            ['840', 'дней'],
          ].map(([n, l], i) => (
            <div
              key={l}
              style={{
                padding: '20px 0',
                borderLeft: i > 0 ? '1px solid var(--hairline)' : 'none',
                paddingLeft: i > 0 ? 16 : 0,
              }}
            >
              <div className="font-display" style={{ fontSize: 32, letterSpacing: '-0.04em' }}>
                {n}
              </div>
              <div className="st-small" style={{ marginTop: 2, fontSize: 11 }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileFrame>
  );
}

Object.assign(window, { MobileHero, MobileBurger, MobileDest, MobileCTA, MobileAbout });
