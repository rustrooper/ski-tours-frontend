---
name: Sanek Tours
description: Авторские горнолыжные туры по России — холодная editorial-сцена, лёд и графит.
colors:
  bg-0: 'oklch(0.13 0.012 240)'
  bg-1: 'oklch(0.16 0.012 240)'
  bg-2: 'oklch(0.20 0.012 240)'
  bg-3: 'oklch(0.26 0.012 240)'
  fg-0: 'oklch(0.985 0.004 240)'
  fg-1: 'oklch(0.88 0.006 240)'
  fg-2: 'oklch(0.68 0.01 240)'
  fg-3: 'oklch(0.50 0.012 240)'
  ice: 'oklch(0.86 0.055 215)'
  ice-2: 'oklch(0.78 0.075 215)'
  steel: 'oklch(0.58 0.06 230)'
  glacier: 'oklch(0.42 0.045 230)'
  destructive: 'oklch(0.6368 0.2078 25.3313)'
  hairline: 'oklch(1 0 0 / 0.08)'
  hairline-strong: 'oklch(1 0 0 / 0.14)'
typography:
  display:
    fontFamily: 'Space Grotesk, system-ui, sans-serif'
    fontSize: 'clamp(56px, 9vw, 116px)'
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: '-0.045em'
  headline:
    fontFamily: 'Space Grotesk, system-ui, sans-serif'
    fontSize: 'clamp(40px, 6vw, 72px)'
    fontWeight: 600
    lineHeight: 1
    letterSpacing: '-0.04em'
  title:
    fontFamily: 'Space Grotesk, system-ui, sans-serif'
    fontSize: '32px'
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: '-0.03em'
  body:
    fontFamily: 'Manrope, system-ui, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: '-0.005em'
  lede:
    fontFamily: 'Manrope, system-ui, sans-serif'
    fontSize: '19px'
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: '-0.012em'
  label:
    fontFamily: 'JetBrains Mono, ui-monospace, monospace'
    fontSize: '11px'
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: '0.18em'
rounded:
  xs: '6px'
  sm: '10px'
  md: '14px'
  lg: '20px'
  xl: '28px'
  pill: '999px'
spacing:
  hairline: '1px'
  micro: '4px'
  xs: '8px'
  sm: '12px'
  md: '16px'
  lg: '24px'
  xl: '40px'
  section: '120px'
components:
  button-ice:
    backgroundColor: '{colors.ice}'
    textColor: 'oklch(0.18 0.012 240)'
    rounded: '{rounded.pill}'
    padding: '0 28px'
    height: '56px'
  button-ice-hover:
    backgroundColor: 'oklch(0.92 0.045 215)'
    textColor: 'oklch(0.18 0.012 240)'
    rounded: '{rounded.pill}'
  button-ghost-pill:
    backgroundColor: 'transparent'
    textColor: '{colors.fg-0}'
    rounded: '{rounded.pill}'
    padding: '0 28px'
    height: '56px'
  button-ghost-pill-hover:
    backgroundColor: 'oklch(1 0 0 / 0.04)'
    textColor: '{colors.fg-0}'
    rounded: '{rounded.pill}'
  button-link-cool:
    backgroundColor: 'transparent'
    textColor: '{colors.fg-0}'
    padding: '0'
  badge-chip:
    backgroundColor: 'oklch(1 0 0 / 0.06)'
    textColor: '{colors.fg-1}'
    rounded: '{rounded.pill}'
    typography: '{typography.label}'
    padding: '0 10px'
    height: '26px'
  input-pill:
    backgroundColor: 'oklch(1 0 0 / 0.06)'
    textColor: '{colors.fg-0}'
    rounded: '{rounded.pill}'
    padding: '0 24px'
    height: '56px'
  card:
    backgroundColor: '{colors.bg-2}'
    textColor: '{colors.fg-0}'
    rounded: '{rounded.md}'
    padding: '16px'
  dest-card:
    backgroundColor: '{colors.bg-2}'
    textColor: '{colors.fg-0}'
    rounded: '{rounded.lg}'
    padding: '28px'
---

# Design System: Sanek Tours

## 1. Overview

**Creative North Star: "The Frozen Atlas"**

Это не сайт туроператора и не «уютный» горный лендинг. Это **зимний атлас** — документальный том, в котором каждый разворот посвящён одной локации, где живёт пухляк. Атлас — потому что система держится на координатах, высотах, монохромной картографической сетке, монопространствах для метаданных и фотографии-как-доказательстве. Frozen — потому что температура читается визуально: холодный графит вместо нейтрального серого, лёд (ice) вместо «голубого акцента», тонкие линии вместо насыщенных границ.

Эстетика тяжёлая, но не громкая. Большой шрифт Space Grotesk несёт hero-выстрелы, тонкие mono-eyebrows из JetBrains Mono подписывают разделы как полевые заметки, Manrope даёт читаемое тело. Палитра пятиступенчатая в холодной зоне 215–240° hue, с выверенной низкой chroma (0.012 у нейтралей, 0.055 у льда) — это не выбор, а доктрина: всё, что отступает от холода, должно иметь причину.

Что система **явно отвергает**: пёстрый слайдер туроператора, утилитарные карточки агрегатора, glassmorphism с фиолетово-розовыми градиентами, кислотный поп-стайл Red Bull. Эти четыре antipattern взяты из PRODUCT.md и работают как стены вольера: всё, что выходит за их пределы — провал концепта.

**Key Characteristics:**

- Пятиступенчатый графит как «земля», ice (oklch 0.86 0.055 215) как единственный громкий голос.
- Большие display-заголовки (до 116px) на 0.95 line-height, чтобы строки касались друг друга.
- Mono-eyebrows с tracking 0.18em — каждая секция подписана как карта.
- Photo-treatment: зерно, виньетка, охлаждающий градиент сверху. Документально, не глянцево.
- Углы средние (md 14px / lg 20px), pills для CTA (999px). Острых углов нет.
- Тени практически отсутствуют. Глубина — через 4 ступени тонального фона.

## 2. Colors: The Cold Graphite Palette

Палитра построена в холодной зоне 215–240° hue OKLCH с агрессивно подавленной chroma у нейтралей. Один акцент (ice) несёт всю эмоциональную нагрузку.

### Primary

- **Pale Ice** (`oklch(0.86 0.055 215)`): единственный «громкий» цвет в системе. Используется на CTA первого уровня (`button-ice`), на focus-ring, на indicator-dots, на курсивных акцентных словах в hero («_пухляк_»). Появляется на ≤10% площади любого экрана — это его сила.
- **Saturated Ice** (`oklch(0.78 0.075 215)`): родственный к pale ice, но насыщеннее. Применяется на eyebrow-линиях и hover-границах. Никогда не используется как фон большой плоскости.

### Secondary

- **Steel Blue** (`oklch(0.58 0.06 230)`): средне-холодный синий, для иконок, мелких декоративных штрихов, состояний «прочитано/посещено». Редко появляется крупно.
- **Deep Glacier** (`oklch(0.42 0.045 230)`): самый тёмный из акцентов, используется на dividers внутри тёмных секций, на тонких outline-кнопках. Тише steel.

### Neutral

Четыре ступени фона + четыре ступени текста. Все имеют chroma 0.004–0.012 — не «серый», а «графит, повёрнутый в холодную сторону». Шаг светлоты ≈0.04 — достаточно, чтобы глаз ловил иерархию, но не как «карточка над карточкой».

- **Deep Graphite (bg-0)** (`oklch(0.13 0.012 240)`): самый тёмный, hero-низ, нижние scrim-градиенты. Не используется как основной фон страницы.
- **Page Graphite (bg-1)** (`oklch(0.16 0.012 240)`): основной фон страницы, body и html.
- **Surface Graphite (bg-2)** (`oklch(0.20 0.012 240)`): фон карточек, raised поверхностей.
- **Raised Graphite (bg-3)** (`oklch(0.26 0.012 240)`): самая высокая ступень — выделенные блоки, активные состояния.
- **Snow White (fg-0)** (`oklch(0.985 0.004 240)`): основной текст. Не `#fff` — слегка холодный.
- **Pale Ash (fg-1)** (`oklch(0.88 0.006 240)`): основной текст вторичного веса, lede.
- **Mid Grey (fg-2)** (`oklch(0.68 0.01 240)`): подписи, мета-данные, неактивные.
- **Dim Grey (fg-3)** (`oklch(0.50 0.012 240)`): section-numbers, placeholders, фоновые подписи.

### Tertiary (служебные)

- **Hairline** (`oklch(1 0 0 / 0.08)`): тонкие границы и dividers. Чистый белый с прозрачностью даёт нейтральный световой шов.
- **Hairline Strong** (`oklch(1 0 0 / 0.14)`): границы интерактивных элементов в покое (ghost-pill, input-pill).
- **Terra (destructive)** (`oklch(0.6368 0.2078 25.3313)`): единственный тёплый цвет в системе. Используется ТОЛЬКО на ошибочных состояниях и live-dot (4K · LOOP запись). Никогда декоративно.

### Named Rules

**The Single Voice Rule.** Лёд (pale ice) появляется на ≤10% площади любого экрана. Его редкость — главный механизм его силы. Если на экране две ice-кнопки, одна должна стать ghost.

**The Cold Boundary Rule.** Hue любого цвета в системе должен лежать в диапазоне 215°–240° (холодная синева) ИЛИ быть сознательным исключением (terra red на ошибках). Тёплые акценты (золотой, оранжевый, охра) запрещены — они ломают весь образ.

**The No White, No Black Rule.** Никогда не используем чистый `#fff` или `#000`. Снег у нас имеет chroma 0.004 в холодную сторону. Чёрный заменён графитом bg-0. Чистые крайности выглядят как ошибка дизайнера.

## 3. Typography

**Display Font:** Space Grotesk (`400, 500, 600, 700`) — геометричный, точный, с тонкой современной графикой. Используется на всех заголовках от h4 до hero h1.
**Body Font:** Manrope (`400, 500, 600, 700`, latin + cyrillic) — гуманистический grotesk с открытыми формами. Несёт всё тело текста и lede.
**Label/Mono Font:** JetBrains Mono (`400, 500`) — для eyebrows, section-numbers, photo-labels, координат, любых «полевых заметок».

**Character:** Пара Space Grotesk + Manrope даёт editorial-журнальный ритм без сваливания в classic-serif или humanist-storytelling. Это голос дизайн-журнала про outdoor performance, а не глянцевого travel-каталога. Mono-вкрапления добавляют документальный вес — как будто мы видим карту, а не страницу.

### Hierarchy

- **Display** (Space Grotesk, weight 600, `clamp(56px, 9vw, 116px)`, line-height 0.95, letter-spacing -0.045em): hero h1 только. Строки касаются друг друга. Курсив используется единожды на одном слове-якоре («_пухляк_»).
- **Headline** (Space Grotesk, weight 600, `clamp(40px, 6vw, 72px)`, line-height 1, letter-spacing -0.04em): h2 секций. Один на секцию, без исключений.
- **Title** (Space Grotesk, weight 600, 32px, line-height 1.1, letter-spacing -0.03em): h3 подсекций, карточек-героев.
- **Subtitle** (Space Grotesk, weight 600, 22px, line-height 1.2, letter-spacing -0.02em): h4, заголовки карточек.
- **Lede** (Manrope, weight 400, 19px, line-height 1.55, letter-spacing -0.012em, color fg-1): вводный абзац под hero и под секционными h2.
- **Body** (Manrope, weight 400, 16px, line-height 1.65, color fg-1): основной текст. Максимальная длина строки — 65–75ch.
- **Label** (JetBrains Mono, weight 400, 11px, letter-spacing 0.18em, uppercase): eyebrow перед h2, section-numbers, photo-labels.
- **Photo Label** (JetBrains Mono, weight 400, 10px, letter-spacing 0.08em, uppercase, color `oklch(1 0 0 / 0.55)`): техническая мета поверх фотографий (4K · LOOP · 00:38).

### Named Rules

**The Eyebrow Bar Rule.** Перед каждым h2 идёт mono-eyebrow с горизонтальной чёрточкой 24×1px (`.st-eyebrow::before`). Это «номер главы» — структурный, не декоративный. Никогда не используем эмодзи или иконку вместо этой полоски.

**The One Italic Rule.** Курсив (italic) в display-шрифте появляется ровно один раз — на акцентном слове в hero h1 («_пухляк_»). Дальше по странице курсив запрещён, он выгорает.

**The Optical Adjust Rule.** Чем крупнее размер шрифта — тем агрессивнее отрицательный tracking. Display = -0.045em, body = -0.005em. Это не косметика, это компенсация оптической рыхлости у крупного Space Grotesk.

## 4. Elevation

Система **почти не использует тени.** Глубина создаётся через тональное наслоение четырёх ступеней графита (bg-0 → bg-3), плюс тонкие световые швы (hairline / hairline-strong) на границах. Это намеренный editorial-выбор: тени выглядят как «приложение», слои — как разворот журнала.

### Shadow Vocabulary

Тени есть только в двух местах:

- **Ice CTA Inset+Glow** (`box-shadow: 0 1px 0 oklch(1 0 0 / 0.4) inset, 0 8px 24px oklch(0.86 0.055 215 / 0.18)`): даёт ice-кнопке внутреннее «свечение сверху» (как блик на льду) и наружный охлаждающий halo. Применяется ТОЛЬКО на primary CTA.
- **Ice CTA Hover Halo** (`box-shadow: 0 0 0 1px oklch(0.86 0.055 215 / 0.4), 0 8px 32px oklch(0.86 0.055 215 / 0.18)`): расширенный halo на hover-состоянии. Не появляется в покое.

### Named Rules

**The Tonal Depth Rule.** Слои создаются разностью светлоты фона (Δ ≈ 0.04 OKLCH), не тенями. Карточка над фоном страницы — это bg-2 (0.20) поверх bg-1 (0.16), а не drop-shadow.

**The Hairline Seam Rule.** Граница между слоями — `1px solid oklch(1 0 0 / 0.08)` (hairline). Никаких 2px borders, никаких насыщенных rgb-границ. Граница — это «световой шов», не «обвод».

**The No Layered Cards Rule.** Карточки не вкладываются. Если возникает желание положить карточку в карточку — структура неправильная, нужно пересобрать иерархию.

## 5. Components

Компоненты — **tactile & confident**: точные формы, читаемая физика (translate-y на нажатии, halo на hover у ice-кнопки), но без SaaS-«нажимаемости» и без скевоморфизма. Каждая интеракция — это микро-подтверждение «я нажал», не презентация.

### Buttons

- **Shape:** primary и ghost-варианты — `pill` (rounded-full, 999px). Default/small варианты — `md` радиус (14px).
- **Primary (ice):** `bg-ice`, текст `oklch(0.18 0.012 240)` (тёмный графит), height 56px, padding 0 28px, font-weight 600, letter-spacing -0.01em. Несёт inset+halo тень. Hover: фон → `oklch(0.92 0.045 215)` (светлее на 0.06), `translate-y(-1px)`, halo расширяется.
- **Ghost Pill:** transparent bg, текст fg-0, border 1px hairline-strong. Hover: border → fg-1, фон → `oklch(1 0 0 / 0.04)`. Используется как secondary CTA рядом с ice.
- **Link Cool:** inline-link, текст fg-0 weight 600, без padding и радиуса. Hover: цвет → ice. Active: не нажимается визуально (`active:translate-y-0`). Для секционных ссылок-указателей.
- **Disabled:** `opacity 0.5`, `pointer-events: none`. Без изменения цвета — низкое opacity само читается как «выключено» на тёмном фоне.

### Chips

- **Style:** `rounded-full`, `bg-white/6`, border 1px hairline, text fg-1, mono 10px, letter-spacing 0.08em, uppercase. Height 26px.
- **С backdrop-blur:** чип поверх фото может использовать `backdrop-blur-md` плюс полупрозрачный фон `oklch(0 0 0 / 0.35)` для читаемости. **Только** на фото-подложке.
- **Live-dot вариант:** содержит маленькую red-точку (terra, 6px) с halo и текст «4K · LOOP · 00:38». Один такой чип на экран.

### Cards / Containers

- **Базовая карточка:** `rounded-xl` (14px), `bg-card` (bg-2), `ring-1` foreground/10. Padding 16px (size=default) или 12px (size=sm). Никаких drop-shadows.
- **Destination card (signature):** `rounded-lg` (20px), full-bleed фото с overflow-hidden. Scrim-градиент сверху-вниз от прозрачного до `oklch(0 0 0 / 0.8)`. Body внутри `padding 28px`, контент прижат к низу (justify-end). Hover: фото `scale(1.06)` за 0.8s cubic-bezier(0.2,0.7,0.3,1), reveal-блок проявляется (opacity 0→1, translate-y 8→0).
- **Photo container (signature):** имеет встроенные `::before` (двойной radial-gradient — холодный сверху, тёплый акцент справа-сверху), `.grain` overlay (repeating-linear-gradient белым 1%), `.vignette` (radial-gradient от центра в чёрный 55%). Это унифицирует любые фотографии в один визуальный тон.

### Inputs

- **Default (compact):** `h-8`, `rounded-lg` (14px), border input, padding 0 10px, text-base/sm.
- **Pill (hero-форма):** `h-14`, `rounded-full`, `bg-white/6`, border hairline-strong, padding 0 24px, text fg-0, placeholder fg-3. Focus: border → ice, фон → `bg-white/10`, ring-4 `ice/20`.
- **Error:** border `destructive`, ring 3px `destructive/20`. Никогда не используем красный заполненный фон — только outline + ring.

### Navigation

- **Header:** прозрачный над hero (полагается на scrim hero снизу), графит bg-1 на остальных секциях. Sticky на скролле, но без shadow — пограничный hairline снизу.
- **Logo Mark:** Space Grotesk weight 600, letter-spacing -0.025em, gap 9px между знаком и текстом.
- **Nav links:** body font, weight 400, fg-1. Hover: fg-0. Active (текущая страница): fg-0 + 1px ice underline 2px ниже baseline.

### Signature: Scroll Cue

В hero снизу — вертикальная линия 1×56px, градиент от прозрачного до fg-1, с маленьким glowing-ice кружком 5px в основании (`box-shadow: 0 0 12px ice`). Над ней mono-надпись «scroll». Это не «иконка стрелки», это «маяк» — концептуально точнее для The Frozen Atlas.

## 6. Do's and Don'ts

### Do:

- **Do** держать pale ice (`oklch(0.86 0.055 215)`) на ≤10% площади каждого экрана. The Single Voice Rule.
- **Do** разделять секции через тональное наслоение фонов (bg-1 → bg-2 → bg-3), не через drop-shadows.
- **Do** ставить mono-eyebrow с 24×1px чёрточкой перед каждым h2 — это «номер главы» атласа.
- **Do** использовать `clamp()` для display-шрифтов: `clamp(56px, 9vw, 116px)`. Жёсткие 96px — это ошибка.
- **Do** на тёмном фоне всегда `border-color: oklch(1 0 0 / 0.08)` (hairline) или `0.14` (strong). Никаких полных белых границ.
- **Do** держать body line-length ≤ 65–75ch. На широких экранах тело текста не должно растягиваться.
- **Do** делать прозрачные интерактивные элементы поверх фото с `backdrop-blur-md` + `oklch(0 0 0 / 0.35)`. Это единственное оправданное применение blur.
- **Do** прописывать `prefers-reduced-motion` на каждой scroll-driven и framer-motion анимации.

### Don't:

- **Don't** использовать `#fff` или `#000`. Снег у нас в холодную сторону (`oklch(0.985 0.004 240)`), чёрный — это графит bg-0. The No White, No Black Rule.
- **Don't** добавлять gradient text (`background-clip: text` с градиентом). Эмфаза через размер и вес, не через цвет в тексте.
- **Don't** делать `border-left` или `border-right` ≥2px как цветной акцент. Side-stripe borders запрещены absolute-bans.
- **Don't** строить раздел из одинаковых карточек icon+heading+text. Identical card grid — это SaaS-template, мы из него вышли.
- **Don't** ставить hero-metric template (большая цифра + мелкая подпись + второстепенные stats + gradient accent). Это маркер AI-slop.
- **Don't** использовать glassmorphism как декоративный паттерн. Blur — только функционально (поверх фото для читаемости).
- **Don't** добавлять тёплые акценты (золото, оранжевый, охра) — это ломает The Cold Boundary Rule. Terra red только для ошибочных состояний.
- **Don't** ставить «СКИДКА!», «осталось 3 места», «бронируй сейчас», скидочные таймеры, эмодзи в заголовках. Анти-референс PRODUCT.md: типовые российские туроператоры.
- **Don't** делать дизайн в стиле Booking.com / Trivago — плотные карточки-результаты с жёлтыми CTA. Это утилита без образа, мы — образ.
- **Don't** копировать кислотный энергичный визуал Red Bull. Целевой райдер взрослый, ему не нужно кричать «#stoked».
- **Don't** вкладывать карточки в карточки. Если это происходит — иерархия сломана.
- **Don't** использовать модалки как первое решение. Inline / progressive раскрытие почти всегда лучше.
- **Don't** использовать em dash (—) или `--` внутри UI-текста. Только запятая, двоеточие, точка с запятой, точка, скобки.
