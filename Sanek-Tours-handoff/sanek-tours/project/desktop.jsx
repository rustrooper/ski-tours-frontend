// Sanek Tours — Desktop landing (full vertical artboard, 1440 wide)
// All sections live in one continuous frame so the user can scroll the whole
// design top-to-bottom in focus mode.

function DesktopHeader() {
  return (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '20px 64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'oklch(0.13 0.012 240 / 0.4)',
        backdropFilter: 'blur(18px) saturate(160%)',
        borderBottom: '1px solid var(--hairline)',
      }}
    >
      <LogoMark size={17} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 }}>
        {['О нас', 'Направления', 'Отзывы'].map((label, i) => (
          <a
            key={label}
            href="#"
            style={{
              padding: '10px 16px',
              color: 'var(--fg-1)',
              textDecoration: 'none',
              borderRadius: 999,
              transition: 'color .2s, background .2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--fg-0)';
              e.currentTarget.style.background = 'oklch(1 0 0 / 0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--fg-1)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {label}
          </a>
        ))}
        <div style={{ width: 1, height: 22, background: 'var(--hairline)', margin: '0 12px' }} />
        <button className="st-btn st-btn-ice">
          Подобрать тур <Icon.arrowRight />
        </button>
      </nav>
    </header>
  );
}

function DesktopHero() {
  return (
    <section style={{ position: 'relative', height: 920, overflow: 'hidden' }}>
      {/* "video" — full bleed mountain frame */}
      <Photo kind="hero" heroLight style={{ position: 'absolute', inset: 0 }} />
      {/* scrim for legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, oklch(0 0 0 / 0.5) 0%, oklch(0 0 0 / 0.2) 30%, oklch(0 0 0 / 0.1) 55%, oklch(0.13 0.012 240 / 0.85) 100%)',
          zIndex: 2,
        }}
      />

      {/* video frame chip top-right */}
      <div
        style={{
          position: 'absolute',
          top: 110,
          right: 64,
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 14px',
          borderRadius: 999,
          background: 'oklch(0 0 0 / 0.35)',
          border: '1px solid var(--hairline-strong)',
          backdropFilter: 'blur(8px)',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--fg-1)',
        }}
      >
        <span className="live-dot" /> 4K · LOOP · 00:38
      </div>

      {/* center content */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '120px 64px 64px',
        }}
      >
        <div className="st-eyebrow" style={{ marginBottom: 28 }}>
          season 25 / 26 · авторские туры
        </div>

        <h1 className="st-h1" style={{ maxWidth: 1180, margin: 0 }}>
          Туда, где живёт
          <br />
          <span style={{ color: 'var(--ice)', fontStyle: 'italic', fontWeight: 500 }}>пухляк.</span>
        </h1>

        <p className="st-lede" style={{ maxWidth: 540, marginTop: 32, color: 'var(--fg-1)' }}>
          Авторские горнолыжные туры по России от тех, кто сам катается. Логистика, жильё, ски-пассы
          — на нас. Ваше дело — линия и снег.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 44 }}>
          <button
            className="st-btn st-btn-ice"
            style={{ height: 56, padding: '0 28px', fontSize: 15 }}
          >
            Подобрать тур <Icon.arrowRight />
          </button>
          <button
            className="st-btn st-btn-ghost"
            style={{ height: 56, padding: '0 24px', fontSize: 15 }}
          >
            Смотреть направления <Icon.arrowDown />
          </button>
        </div>

        {/* Trust strip */}
        <div
          style={{
            marginTop: 88,
            display: 'flex',
            alignItems: 'center',
            gap: 40,
            color: 'var(--fg-2)',
            fontSize: 13,
          }}
        >
          {[
            ['12', 'регионов'],
            ['340+', 'райдеров в сезоне'],
            ['4.9', 'средняя оценка'],
          ].map(([n, l]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span className="font-display" style={{ fontSize: 28, color: 'var(--fg-0)' }}>
                {n}
              </span>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* scroll cue bottom-center */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: '0.2em',
            color: 'var(--fg-2)',
            textTransform: 'uppercase',
          }}
        >
          scroll
        </span>
        <div className="scroll-cue" />
      </div>

      {/* parallax cue — mono badge bottom-right */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          right: 64,
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.12em',
          color: 'var(--fg-2)',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ width: 28, height: 1, background: 'var(--fg-3)' }} />
        bg — parallax 0.4×
      </div>
    </section>
  );
}

const DESTINATIONS = [
  {
    kind: 'sheregesh',
    name: 'Шерегеш',
    region: 'Кемеровская область',
    tag: 'Powder · Resort',
    src: 'img/sheregesh.png',
    pos: '50% 40%',
    desc: 'Самый снежный и тусовочный курорт России. Гигантский пухляк, длинный сезон, лес для фрирайда.',
    stats: ['Декабрь — Май', 'до 4 м снега', '15 трасс'],
  },
  {
    kind: 'hibiny',
    name: 'Кировск',
    region: 'Хибины, Мурманская обл.',
    tag: 'Freeride · Arctic',
    src: 'img/kirovsk.png',
    pos: '50% 35%',
    desc: 'Бескомпромиссный фрирайд и суровый заполярный драйв. Север, тишина, северное сияние.',
    stats: ['Январь — Июнь', '67° с.ш.', 'хели-ски опция'],
  },
  {
    kind: 'dombay',
    name: 'Домбай',
    region: 'Кавказ, Карачаево-Черкесия',
    tag: 'Classic · Panorama',
    src: 'img/dombay.png',
    pos: '50% 45%',
    desc: 'Кавказская классика с панорамами на 360°. Демократичные цены, тёплый юг и широкие склоны.',
    stats: ['Декабрь — Апрель', '3 200 м', 'панорама 360°'],
  },
];

function DesktopDestinations() {
  return (
    <section style={{ padding: '160px 64px 140px', background: 'var(--bg-1)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 80,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span className="section-num">02 / Направления</span>
          </div>
          <h2 className="st-h2" style={{ maxWidth: 880, margin: 0 }}>
            Курорты, которые
            <br />
            мы <em style={{ color: 'var(--ice)', fontWeight: 500, fontStyle: 'italic' }}>
              знаем
            </em>{' '}
            лично.
          </h2>
        </div>
        <p className="st-lede" style={{ maxWidth: 380, margin: 0 }}>
          Каждое направление — наш базовый лагерь. Мы катаемся там сами и знаем, где лежит самый
          мягкий пухляк, а какой подъёмник простоит весь день.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {DESTINATIONS.map((d, i) => (
          <article key={d.name} className="dest-card" style={{ height: 580 }}>
            <Photo
              kind={d.kind}
              src={d.src}
              objectPosition={d.pos}
              style={{ position: 'absolute', inset: 0 }}
            />
            <div className="scrim" />
            <div className="body">
              <div
                style={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  right: 24,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <span className="chip">{d.tag}</span>
                <span
                  className="font-mono"
                  style={{ fontSize: 11, color: 'var(--fg-1)', opacity: 0.7 }}
                >
                  0{i + 1}
                </span>
              </div>

              <span
                className="font-mono"
                style={{
                  fontSize: 11,
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
                  fontSize: 56,
                  lineHeight: 0.95,
                  margin: '8px 0 14px',
                  letterSpacing: '-0.04em',
                }}
              >
                {d.name}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--fg-1)',
                  margin: 0,
                  maxWidth: 320,
                  lineHeight: 1.5,
                }}
              >
                {d.desc}
              </p>

              {/* hover reveal: stats + button */}
              <div className="reveal" style={{ marginTop: 20 }}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
                  {d.stats.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                <button className="st-btn st-btn-ice">
                  Подробнее <Icon.arrowUpRight />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom row — "more coming" placeholder */}
      <div
        style={{
          marginTop: 32,
          padding: '28px 32px',
          border: '1px dashed var(--hairline-strong)',
          borderRadius: 'var(--r-lg)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <span
            className="font-mono"
            style={{ fontSize: 11, color: 'var(--fg-2)', letterSpacing: '0.1em' }}
          >
            COMING / 25–26
          </span>
          <div
            style={{ display: 'flex', gap: 24, marginTop: 10, color: 'var(--fg-0)', fontSize: 16 }}
          >
            <span>Камчатка</span>
            <span>·</span>
            <span>Архыз</span>
            <span>·</span>
            <span>Терскол</span>
            <span>·</span>
            <span>Красная Поляна</span>
          </div>
        </div>
        <button className="st-btn st-btn-link">
          Все направления <Icon.arrowUpRight />
        </button>
      </div>
    </section>
  );
}

function DesktopAbout() {
  return (
    <section
      style={{ padding: '140px 64px 140px', background: 'var(--bg-0)', position: 'relative' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.05fr',
          gap: 96,
          alignItems: 'flex-start',
        }}
      >
        {/* Left — text */}
        <div style={{ position: 'sticky', top: 120 }}>
          <span className="section-num" style={{ marginBottom: 24, display: 'block' }}>
            01 / О нас
          </span>
          <h2 className="st-h2" style={{ margin: 0, marginBottom: 36, maxWidth: 540 }}>
            Россия — рай
            <br />
            для райдера.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 480 }}>
            <p className="st-body">
              Найти идеальный склон, мягкий пухляк и работающий подъёмник без «сюрпризов» может
              только местный эксперт. Мы стали теми, кто закрыл вопрос «куда поехать» для сотен
              райдеров.
            </p>

            <div>
              <h4 className="st-h4" style={{ margin: '0 0 10px', color: 'var(--ice)' }}>
                Мы — не агрегатор.
              </h4>
              <p className="st-body">
                Мы команда фанатов, которые живут горами. Лично объездили все популярные и дикие
                курорты от Кольского до Камчатки. Отбираем только лучшее: трассы, жильё в шаговой
                доступности от подъёмника, никакого скрытого подвоха.
              </p>
            </div>

            <div>
              <h4 className="st-h4" style={{ margin: '0 0 10px' }}>
                Философия — просто катайся.
              </h4>
              <p className="st-body">
                Всю логистику — трансферы, проживание, ски-пассы, и даже компанию для катания — мы
                берём на себя.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 18, paddingTop: 12 }}>
              <button className="st-btn st-btn-ghost">
                Познакомиться с командой <Icon.arrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Right — carousel */}
        <div>
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--r-lg)',
              overflow: 'hidden',
              aspectRatio: '4/5',
            }}
          >
            <Photo
              kind="about1"
              label="PHOTO · TEAM TRIP — KAMCHATKA '25"
              style={{ position: 'absolute', inset: 0 }}
            />
            {/* nav controls */}
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                right: 24,
                display: 'flex',
                gap: 8,
                zIndex: 4,
              }}
            >
              <button className="icon-btn">
                <Icon.chevL />
              </button>
              <button className="icon-btn">
                <Icon.chevR />
              </button>
            </div>
            {/* index */}
            <div
              style={{
                position: 'absolute',
                top: 24,
                left: 24,
                zIndex: 4,
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--fg-0)',
                padding: '6px 12px',
                background: 'oklch(0 0 0 / 0.4)',
                borderRadius: 999,
                border: '1px solid var(--hairline)',
                letterSpacing: '0.08em',
              }}
            >
              02 / 06
            </div>
          </div>

          {/* thumbnails */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 8,
              marginTop: 12,
            }}
          >
            {['hibiny', 'about1', 'sheregesh', 'about2', 'dombay', 'hero'].map((k, i) => (
              <div
                key={i}
                style={{
                  aspectRatio: '1/1',
                  borderRadius: 'var(--r-sm)',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  outline: i === 1 ? '2px solid var(--ice)' : '1px solid var(--hairline)',
                  outlineOffset: i === 1 ? -2 : -1,
                  opacity: i === 1 ? 1 : 0.55,
                  transition: 'opacity .2s',
                }}
              >
                <Photo kind={k} style={{ position: 'absolute', inset: 0 }} />
              </div>
            ))}
          </div>

          {/* stat strip below */}
          <div
            style={{
              marginTop: 40,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
              borderTop: '1px solid var(--hairline)',
              borderBottom: '1px solid var(--hairline)',
            }}
          >
            {[
              ['7', 'лет в горах'],
              ['12', 'регионов'],
              ['840', 'дней на склоне'],
            ].map(([n, l], i) => (
              <div
                key={l}
                style={{
                  padding: '24px 0',
                  borderLeft: i > 0 ? '1px solid var(--hairline)' : 'none',
                  paddingLeft: i > 0 ? 24 : 0,
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: 44, letterSpacing: '-0.04em', color: 'var(--fg-0)' }}
                >
                  {n}
                </div>
                <div className="st-small" style={{ marginTop: 4 }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: 'Александр М.',
    initials: 'АМ',
    dest: 'Шерегеш · Февраль 25',
    text: 'Ребята вписали меня в группу за три дня до вылета — и не подвели ни на секунду. Жильё в 200 метрах от Е, ски-пасс на руках, нашли мне попутчиков моего уровня. На третий день поймали пухляк по пояс. Возвращаюсь.',
  },
  {
    name: 'Дарья К.',
    initials: 'ДК',
    dest: 'Кировск · Январь 25',
    text: 'Ехала на Хибины первый раз и боялась организационных моментов. Sanek закрыли всё: трансфер из Мурманска, тёплая база, гид с локациями, ратрак для туристов. Сияние поймали на четвёртый день. До сих пор отхожу.',
  },
  {
    name: 'Никита В.',
    initials: 'НВ',
    dest: 'Домбай · Март 25',
    text: 'Бюджет был небольшой, но получили максимум. Канатка, склоны, виды — всё, как обещали. Отдельно — местный шашлык и баня после катания. Ребята реально знают курорт изнутри, а не по картинкам с сайта.',
  },
];

function DesktopReviews() {
  return (
    <section style={{ padding: '140px 64px 140px', background: 'var(--bg-1)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 64,
        }}
      >
        <div>
          <span className="section-num" style={{ marginBottom: 24, display: 'block' }}>
            03 / Отзывы
          </span>
          <h2 className="st-h2" style={{ margin: 0, maxWidth: 700 }}>
            Что говорят те, кто
            <br />
            уже съездил.
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            className="font-mono"
            style={{ fontSize: 11, color: 'var(--fg-2)', letterSpacing: '0.1em', marginRight: 8 }}
          >
            01 / 12
          </span>
          <button className="icon-btn">
            <Icon.chevL />
          </button>
          <button className="icon-btn">
            <Icon.chevR />
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {REVIEWS.map((r, i) => (
          <article
            key={r.name}
            style={{
              position: 'relative',
              background: 'var(--bg-2)',
              border: '1px solid var(--hairline)',
              borderRadius: 'var(--r-lg)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              minHeight: 360,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="quote-mark">“</span>
              <span className="chip">{r.dest}</span>
            </div>
            <p
              style={{
                flex: 1,
                color: 'var(--fg-0)',
                fontSize: 16,
                lineHeight: 1.65,
                margin: 0,
                letterSpacing: '-0.005em',
              }}
            >
              {r.text}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                paddingTop: 16,
                borderTop: '1px solid var(--hairline)',
              }}
            >
              <div className="avatar">{r.initials}</div>
              <div>
                <div style={{ fontSize: 14, color: 'var(--fg-0)', fontWeight: 600 }}>{r.name}</div>
                <div className="st-small">★★★★★</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* dots */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
        <div className="dots">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`d ${i === 0 ? 'on' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopCTA() {
  return (
    <section style={{ position: 'relative', height: 620, overflow: 'hidden' }}>
      <Photo kind="cta" style={{ position: 'absolute', inset: 0 }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, oklch(0.13 0.012 240 / 0.65) 0%, oklch(0 0 0 / 0.5) 50%, oklch(0.13 0.012 240 / 0.9) 100%)',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 64px',
        }}
      >
        <span className="st-eyebrow" style={{ marginBottom: 28 }}>
          04 / подбор
        </span>
        <h2 className="st-h2" style={{ margin: 0, maxWidth: 900 }}>
          Подобрать тур.
        </h2>
        <p className="st-lede" style={{ marginTop: 24, maxWidth: 540 }}>
          Оставьте номер телефона — менеджер расскажет подробнее о предстоящем путешествии.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 44, width: '100%', maxWidth: 560 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input className="st-input" placeholder="+7 ___ ___ __ __" />
            <span
              style={{
                position: 'absolute',
                left: 24,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--fg-3)',
                fontSize: 16,
                pointerEvents: 'none',
                display: 'none',
              }}
            >
              +7 ___ ___ __ __
            </span>
          </div>
          <button
            className="st-btn st-btn-ice"
            style={{ height: 56, padding: '0 32px', fontSize: 15 }}
          >
            Подобрать <Icon.arrowRight />
          </button>
        </div>

        <div
          style={{
            marginTop: 22,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: 'var(--fg-2)',
          }}
        >
          <Icon.shield />
          <span className="st-small">
            Нажимая «Подобрать», вы соглашаетесь с{' '}
            <a
              href="#"
              style={{
                color: 'var(--fg-1)',
                textDecoration: 'underline',
                textDecorationColor: 'var(--hairline-strong)',
              }}
            >
              политикой обработки персональных данных
            </a>
            .
          </span>
        </div>

        {/* secondary contact options */}
        <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 16 }}>
          <span className="st-small">или напишите в мессенджер:</span>
          <a href="#" className="icon-btn" style={{ width: 40, height: 40 }}>
            <Icon.tg />
          </a>
          <a href="#" className="icon-btn" style={{ width: 40, height: 40 }}>
            <Icon.wa />
          </a>
        </div>
      </div>
    </section>
  );
}

function DesktopFooter() {
  return (
    <footer
      style={{
        background: 'var(--bg-0)',
        padding: '80px 64px 32px',
        borderTop: '1px solid var(--hairline)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 64,
        }}
      >
        <div>
          <LogoMark size={17} />
          <p className="st-small" style={{ marginTop: 18, maxWidth: 280, lineHeight: 1.6 }}>
            Авторские горнолыжные туры по России. От тех, кто сам катается — для тех, кто хочет
            начать.
          </p>
          <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
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
        </div>

        {[
          { title: 'Навигация', items: ['О нас', 'Направления', 'Отзывы', 'Подобрать тур'] },
          { title: 'Курорты', items: ['Шерегеш', 'Кировск', 'Домбай', 'Скоро: 4'] },
          {
            title: 'Контакты',
            items: [
              '+7 (495) 000-00-00',
              'hello@sanek.tours',
              'Telegram @saneksupport',
              'WhatsApp +7 985 ...',
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <div className="section-num" style={{ marginBottom: 18 }}>
              {col.title}
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {col.items.map((it) => (
                <li key={it}>
                  <a
                    href="#"
                    style={{ color: 'var(--fg-1)', textDecoration: 'none', fontSize: 14 }}
                  >
                    {it}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 28,
          borderTop: '1px solid var(--hairline)',
          color: 'var(--fg-2)',
          fontSize: 12,
        }}
      >
        <span>© 2025 Sanek Tours · ИНН 0000000000 · ОГРНИП 000000000000000</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>
            Политика конфиденциальности
          </a>
          <a href="#" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>
            Договор-оферта
          </a>
        </div>
      </div>
    </footer>
  );
}

function Desktop() {
  return (
    <div className="st-root" style={{ width: 1440, position: 'relative' }}>
      <DesktopHeader />
      <DesktopHero />
      <DesktopDestinations />
      <DesktopAbout />
      <DesktopReviews />
      <DesktopCTA />
      <DesktopFooter />
    </div>
  );
}

Object.assign(window, { Desktop });
