// Design system reference — tokens, type scale, components

function Swatch({ value, name, role, light = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div
        style={{
          width: '100%',
          aspectRatio: '1.4/1',
          borderRadius: 'var(--r-md)',
          background: value,
          border: '1px solid var(--hairline)',
        }}
      />
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg-0)' }}>{name}</div>
        <div className="font-mono" style={{ fontSize: 10, color: 'var(--fg-2)', marginTop: 2 }}>
          {role}
        </div>
        <div className="font-mono" style={{ fontSize: 10, color: 'var(--fg-3)', marginTop: 1 }}>
          {value}
        </div>
      </div>
    </div>
  );
}

function TypeRow({ cls, label, sample, meta }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '180px 1fr 180px',
        gap: 24,
        padding: '24px 0',
        borderTop: '1px solid var(--hairline)',
        alignItems: 'baseline',
      }}
    >
      <div>
        <div style={{ fontSize: 13, color: 'var(--fg-0)', fontWeight: 600 }}>{label}</div>
        <div className="font-mono" style={{ fontSize: 10, color: 'var(--fg-2)', marginTop: 4 }}>
          {meta}
        </div>
      </div>
      <div className={cls} style={{ color: 'var(--fg-0)' }}>
        {sample}
      </div>
      <div className="font-mono" style={{ fontSize: 10, color: 'var(--fg-3)' }}>
        .{cls}
      </div>
    </div>
  );
}

function System() {
  return (
    <div className="st-root" style={{ width: 1440, padding: '64px 64px 96px' }}>
      {/* Title */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 56,
        }}
      >
        <div>
          <span className="section-num">design system · v0.1</span>
          <h1 className="st-h2" style={{ margin: '16px 0 0' }}>
            Sanek Tours / system.
          </h1>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 24,
            color: 'var(--fg-2)',
            fontSize: 12,
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span>tailwind · shadcn/ui</span>
          <span>next.js 15</span>
          <span>dark base</span>
        </div>
      </div>

      {/* ── COLORS ──────────────────────────── */}
      <section style={{ marginBottom: 80 }}>
        <h3 className="st-h3" style={{ marginBottom: 28 }}>
          01 / Палитра
        </h3>

        <div style={{ marginBottom: 28 }}>
          <div className="section-num" style={{ marginBottom: 12 }}>
            Surface — глубокий графит
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <Swatch name="bg-0" role="page void" value="oklch(0.13 0.012 240)" />
            <Swatch name="bg-1" role="primary surface" value="oklch(0.16 0.012 240)" />
            <Swatch name="bg-2" role="elevated card" value="oklch(0.20 0.012 240)" />
            <Swatch name="bg-3" role="hairline / divider" value="oklch(0.26 0.012 240)" />
          </div>
        </div>

        <div style={{ marginBottom: 28 }}>
          <div className="section-num" style={{ marginBottom: 12 }}>
            Foreground — снежные белые с холодным тоном
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <Swatch name="fg-0" role="primary text" value="oklch(0.985 0.004 240)" />
            <Swatch name="fg-1" role="secondary" value="oklch(0.88 0.006 240)" />
            <Swatch name="fg-2" role="muted" value="oklch(0.68 0.010 240)" />
            <Swatch name="fg-3" role="placeholder" value="oklch(0.50 0.012 240)" />
          </div>
        </div>

        <div>
          <div className="section-num" style={{ marginBottom: 12 }}>
            Accent — ice & steel
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <Swatch name="ice" role="primary CTA fill" value="oklch(0.86 0.055 215)" />
            <Swatch name="ice-2" role="hover / hilite" value="oklch(0.78 0.075 215)" />
            <Swatch name="steel" role="secondary accent" value="oklch(0.58 0.060 230)" />
            <Swatch name="glacier" role="deep accent" value="oklch(0.42 0.045 230)" />
          </div>
        </div>
      </section>

      {/* ── TYPE ──────────────────────────── */}
      <section style={{ marginBottom: 80 }}>
        <h3 className="st-h3" style={{ marginBottom: 28 }}>
          02 / Типографика
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 24 }}>
          <div
            style={{
              padding: 24,
              border: '1px solid var(--hairline)',
              borderRadius: 'var(--r-md)',
            }}
          >
            <div className="section-num" style={{ marginBottom: 14 }}>
              Display · Space Grotesk
            </div>
            <div
              className="font-display"
              style={{ fontSize: 64, fontWeight: 600, letterSpacing: '-0.045em', lineHeight: 0.95 }}
            >
              Аа Яя Gg
            </div>
            <div className="st-small" style={{ marginTop: 14 }}>
              Weights 400 / 500 / 600 · –4.5% tracking · ss01
            </div>
          </div>
          <div
            style={{
              padding: 24,
              border: '1px solid var(--hairline)',
              borderRadius: 'var(--r-md)',
            }}
          >
            <div className="section-num" style={{ marginBottom: 14 }}>
              Body · Manrope
            </div>
            <div
              style={{ fontFamily: 'var(--font-body)', fontSize: 32, letterSpacing: '-0.015em' }}
            >
              Свежий морозный воздух, тишина гор.
            </div>
            <div className="st-small" style={{ marginTop: 14 }}>
              Weights 400 / 500 / 600 / 700 · –1% tracking
            </div>
          </div>
        </div>

        <div>
          <TypeRow
            cls="st-h1"
            label="Display H1"
            meta="116/0.95 · -4.5%"
            sample="Туда, где живёт пухляк."
          />
          <TypeRow
            cls="st-h2"
            label="Heading H2"
            meta="72/1.0 · -4%"
            sample="Курорты, которые мы знаем."
          />
          <TypeRow
            cls="st-h3"
            label="Heading H3"
            meta="32/1.1 · -3%"
            sample="Что говорят те, кто уже съездил"
          />
          <TypeRow
            cls="st-h4"
            label="Heading H4"
            meta="22/1.2 · -2%"
            sample="Наша философия — просто катайся."
          />
          <TypeRow
            cls="st-lede"
            label="Lede"
            meta="19/1.55 — Manrope"
            sample="Авторские горнолыжные туры по России от тех, кто сам катается."
          />
          <TypeRow
            cls="st-body"
            label="Body"
            meta="16/1.65 — Manrope"
            sample="Лично объездили все популярные и дикие курорты от Кольского до Камчатки."
          />
          <TypeRow
            cls="st-small"
            label="Small"
            meta="13/1.5 — Manrope"
            sample="Нажимая «Подобрать», вы соглашаетесь с политикой."
          />
          <TypeRow
            cls="font-mono"
            label="Mono · eyebrow"
            meta="11/0.18em — JB Mono"
            sample="SEASON 25 / 26 · AUTHORED TRIPS"
          />
        </div>
      </section>

      {/* ── COMPONENTS ──────────────────────────── */}
      <section style={{ marginBottom: 80 }}>
        <h3 className="st-h3" style={{ marginBottom: 28 }}>
          03 / Компоненты · состояния
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            marginBottom: 32,
          }}
        >
          {/* Buttons */}
          <div
            style={{
              padding: 28,
              background: 'var(--bg-2)',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--hairline)',
            }}
          >
            <div className="section-num" style={{ marginBottom: 18 }}>
              Button · Primary (ice)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <button className="st-btn st-btn-ice">
                Подобрать тур <Icon.arrowRight />
              </button>
              <button
                className="st-btn st-btn-ice"
                style={{ background: 'oklch(0.92 0.045 215)', boxShadow: 'var(--glow-ice)' }}
              >
                Подобрать тур <Icon.arrowRight />
              </button>
              <button
                className="st-btn st-btn-ice"
                disabled
                style={{ opacity: 0.4, cursor: 'not-allowed' }}
              >
                Подобрать тур <Icon.arrowRight />
              </button>
              <div
                className="font-mono"
                style={{ fontSize: 10, color: 'var(--fg-2)', marginTop: 4 }}
              >
                default · hover · disabled
              </div>
            </div>
          </div>

          <div
            style={{
              padding: 28,
              background: 'var(--bg-2)',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--hairline)',
            }}
          >
            <div className="section-num" style={{ marginBottom: 18 }}>
              Button · Ghost / Link
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                alignItems: 'flex-start',
              }}
            >
              <button className="st-btn st-btn-ghost">
                Смотреть направления <Icon.arrowDown />
              </button>
              <button
                className="st-btn st-btn-ghost"
                style={{ borderColor: 'var(--fg-1)', background: 'oklch(1 0 0 / 0.04)' }}
              >
                Смотреть направления <Icon.arrowDown />
              </button>
              <button className="st-btn st-btn-link">
                Все направления <Icon.arrowUpRight />
              </button>
            </div>
          </div>

          <div
            style={{
              padding: 28,
              background: 'var(--bg-2)',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--hairline)',
            }}
          >
            <div className="section-num" style={{ marginBottom: 18 }}>
              Input · Pill
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input className="st-input" placeholder="+7 ___ ___ __ __" />
              <input
                className="st-input"
                defaultValue="+7 925 134 76 22"
                style={{
                  borderColor: 'var(--ice)',
                  boxShadow: '0 0 0 4px oklch(0.86 0.055 215 / 0.18)',
                }}
              />
              <div className="font-mono" style={{ fontSize: 10, color: 'var(--fg-2)' }}>
                default · focus
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 20 }}>
          {/* Card preview */}
          <div
            style={{
              padding: 28,
              background: 'var(--bg-2)',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--hairline)',
            }}
          >
            <div className="section-num" style={{ marginBottom: 18 }}>
              Card · Destination (hover)
            </div>
            <div className="dest-card" style={{ height: 280 }}>
              <Photo
                kind="sheregesh"
                src="img/sheregesh.png"
                objectPosition="50% 40%"
                style={{ position: 'absolute', inset: 0, transform: 'scale(1.06)' }}
              />
              <div className="scrim" />
              <div className="body" style={{ padding: 20 }}>
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    right: 16,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span className="chip">Powder · Resort</span>
                  <span className="font-mono" style={{ fontSize: 10, opacity: 0.7 }}>
                    01
                  </span>
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: 32, lineHeight: 1, margin: 0, letterSpacing: '-0.04em' }}
                >
                  Шерегеш
                </h3>
                <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
                  <span className="chip">Декабрь — Май</span>
                  <span className="chip">до 4 м снега</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chips / pills */}
          <div
            style={{
              padding: 28,
              background: 'var(--bg-2)',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--hairline)',
            }}
          >
            <div className="section-num" style={{ marginBottom: 18 }}>
              Chips & icons
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
              <span className="chip">Powder</span>
              <span className="chip">Freeride</span>
              <span className="chip">Resort</span>
              <span className="chip">до 4 м снега</span>
              <span className="chip">67° с.ш.</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="icon-btn">
                <Icon.chevL />
              </button>
              <button className="icon-btn">
                <Icon.chevR />
              </button>
              <button className="icon-btn">
                <Icon.tg />
              </button>
              <button className="icon-btn">
                <Icon.wa />
              </button>
            </div>
          </div>

          {/* Spacing / radii */}
          <div
            style={{
              padding: 28,
              background: 'var(--bg-2)',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--hairline)',
            }}
          >
            <div className="section-num" style={{ marginBottom: 18 }}>
              Radii · spacing
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 24, alignItems: 'flex-end' }}>
              {[
                ['xs', 6],
                ['sm', 10],
                ['md', 14],
                ['lg', 20],
                ['xl', 28],
              ].map(([n, r]) => (
                <div key={n} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: r,
                      background: 'var(--bg-3)',
                      border: '1px solid var(--hairline-strong)',
                    }}
                  />
                  <div
                    className="font-mono"
                    style={{ fontSize: 9, marginTop: 6, color: 'var(--fg-2)' }}
                  >
                    {n} {r}px
                  </div>
                </div>
              ))}
            </div>
            <div
              className="font-mono"
              style={{ fontSize: 10, color: 'var(--fg-2)', lineHeight: 1.7 }}
            >
              section pad ↦ 140 / 64
              <br />
              card pad ↦ 28 / 24
              <br />
              grid gap ↦ 20
            </div>
          </div>
        </div>
      </section>

      {/* ── HOVER / STATES ──────────────────────────── */}
      <section style={{ marginBottom: 80 }}>
        <h3 className="st-h3" style={{ marginBottom: 28 }}>
          04 / Hover / Active
        </h3>
        <div
          style={{
            padding: 32,
            background: 'var(--bg-2)',
            borderRadius: 'var(--r-md)',
            border: '1px solid var(--hairline)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
          }}
        >
          {[
            { h: 'Card · destination', l: 'фон zoom 1.06×, reveal статов и CTA, лёгкий glow' },
            {
              h: 'Button · ice (primary)',
              l: 'translateY(-1px), box-shadow glow, фон → ice hover',
            },
            { h: 'Button · ghost', l: 'border-color → fg-1, фон → oklch(1 0 0 / 0.04)' },
            { h: 'Nav link', l: 'фон → oklch(1 0 0 / 0.04), pill radius 999' },
            { h: 'Icon button', l: 'фон → oklch(1 0 0 / 0.10), border → fg-1' },
            { h: 'Input · focus', l: 'border ice + glow ring 4px @ 0.18 alpha' },
            { h: 'Footer link', l: 'color fg-1 → fg-0, underline appears' },
            { h: 'Carousel arrow', l: 'тот же icon-btn pattern, swipe enabled mobile' },
          ].map(({ h, l }) => (
            <div key={h}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span className="st-dot" />
                <span style={{ fontSize: 13, fontWeight: 600 }}>{h}</span>
              </div>
              <div className="st-small" style={{ lineHeight: 1.5 }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ANIMATIONS ──────────────────────────── */}
      <section>
        <h3 className="st-h3" style={{ marginBottom: 28 }}>
          05 / Анимация
        </h3>
        <div
          style={{
            padding: 36,
            background: 'var(--bg-2)',
            borderRadius: 'var(--r-md)',
            border: '1px solid var(--hairline)',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 36,
          }}
        >
          {[
            {
              h: 'Parallax — Hero bg',
              sub: '0.4× от скролла, only on >= md',
              code: 'transform: translate3d(0, calc(var(--scroll) * 0.4), 0)',
            },
            {
              h: 'Parallax — Destination cards',
              sub: 'фон карточки 0.85×, scrim неподвижен',
              code: '.dest-card .photo { translate3d 0.85 }',
            },
            {
              h: 'Fade + slide-in',
              sub: 'IntersectionObserver, 24px вверх, 0.5s easeOut',
              code: 'opacity 0→1, translateY 24→0, cubic-bezier(.2,.7,.3,1)',
            },
            {
              h: 'Hover · card zoom',
              sub: 'photo scale 1→1.06 за 0.8s',
              code: 'transition: transform .8s cubic-bezier(.2,.7,.3,1)',
            },
          ].map(({ h, sub, code }) => (
            <div key={h}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
                <span
                  className="font-display"
                  style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em' }}
                >
                  {h}
                </span>
                <span className="st-small">{sub}</span>
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: 11,
                  color: 'var(--ice-2)',
                  background: 'var(--bg-0)',
                  padding: '10px 14px',
                  borderRadius: 'var(--r-sm)',
                  border: '1px solid var(--hairline)',
                  marginTop: 8,
                }}
              >
                {code}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { System });
