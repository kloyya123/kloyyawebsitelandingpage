# Component Library Registry

> Reference catalog of external UI component libraries for ideation and implementation.
> Maintained by the `component-library` skill. Use `/components` to search.

---

## Category Index

Quick cross-library lookup by category. Use `/components browse [category]` to explore.

| Category | Libraries With Components |
|----------|--------------------------|
| text-animation | spell-ui, react-bits, magic-ui, aceternity-ui, motion-primitives, cult-ui, animata, animate-ui, eldora-ui, ui-layout |
| text-display | spell-ui, magic-ui, aceternity-ui, cult-ui, animata, react-bits |
| button | spell-ui, magic-ui, aceternity-ui, cult-ui, animata, animate-ui, eldora-ui, ui-layout |
| input | spell-ui, aceternity-ui, animata, ui-layout |
| feedback | spell-ui, magic-ui, aceternity-ui, cult-ui, animata, animate-ui |
| scrolling | spell-ui, magic-ui, aceternity-ui, motion-primitives, cult-ui, animata, ui-layout |
| visual-effect | spell-ui, react-bits, magic-ui, aceternity-ui, motion-primitives, cult-ui, animata, eldora-ui, ui-layout |
| background | react-bits, magic-ui, aceternity-ui, cult-ui, animata, animate-ui, eldora-ui |
| data-display | spell-ui, magic-ui, aceternity-ui, cult-ui, animata, lukacho-ui, eldora-ui |
| card | react-bits, magic-ui, aceternity-ui, cult-ui, animata, eldora-ui |
| cursor | react-bits, magic-ui, aceternity-ui, motion-primitives, animata, lukacho-ui, ui-layout |
| interactive | react-bits, magic-ui, aceternity-ui, motion-primitives, cult-ui, animata, animate-ui, ui-layout |
| navigation | magic-ui, aceternity-ui, motion-primitives, cult-ui, animata, lukacho-ui, eldora-ui |
| layout | spell-ui, magic-ui, aceternity-ui, motion-primitives, cult-ui, animata, lukacho-ui, eldora-ui, ui-layout |
| embed | spell-ui, magic-ui |
| 3d | react-bits, aceternity-ui, cult-ui, ui-layout |

---

## spell-ui

- **URL:** https://github.com/xxtomm/spell-ui
- **Docs:** https://spell.sh/docs
- **Stack:** React, TypeScript, Tailwind CSS, Next.js
- **License:** MIT
- **Tailwind Required:** Yes
- **Description:** Copy-paste component library with animated text effects, WebGL backgrounds, and polished interactive elements. Great for landing pages and marketing sites.
- **Install:** Copy individual files from `registry/spell-ui/` or use `npx shadcn@latest add`
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| blur-reveal | Text characters start blurred and offset, then cascade into focus | [text-animation, reveal, blur, stagger] |
| special-text | Scramble effect cycling random characters before revealing final text | [text-animation, scramble, decode, hacker] |
| shimmer-text | Sweeping shimmer highlight moving across text, 20+ color variants | [text-animation, shimmer, highlight, shine] |
| highlighted-text | Sliding background highlight with CSS mix-blend-mode | [text-display, highlight, background, blend] |
| slide-up-text | Text rises from below with stagger by word, character, or line | [text-animation, slide, stagger, entrance] |
| words-stagger | Word-by-word reveal with blur, transform, and opacity | [text-animation, stagger, blur, reveal, word] |
| randomized-text | Characters or words materialize in random order | [text-animation, random, reveal, character] |
| gradient-wave-text | Apple-style flowing gradient colors across text | [text-animation, gradient, wave, apple-style] |
| signature | Handwriting animation drawing SVG text paths like a pen | [text-display, handwriting, svg, signature, draw] |
| marquee | Infinite horizontal or vertical scrolling content with edge fade | [scrolling, infinite, horizontal, vertical] |
| text-marquee | Vertical text cycler rotating words in a fixed container | [scrolling, vertical, ticker, cycle] |
| logos-carousel | Cycles through sets of logos/icons with staggered reveal | [scrolling, logos, brand, carousel, stagger] |
| rich-button | Gradient backgrounds + text shadows, 22 color variants, 3 sizes | [button, gradient, color, variant] |
| flow-button | Animated flowing dashed border around perimeter on hover | [button, border, animation, hover, dashed] |
| pop-button | 3D push-down effect on click, playful whimsical style | [button, 3d, press, playful] |
| copy-button | Click to copy with blur transition between copy icon and checkmark | [button, clipboard, copy, utility] |
| color-selector | Interactive color picker with visual circle swatches | [input, color, picker, interactive] |
| label-input | Floating label that animates above on focus, password toggle | [input, form, label, floating, password] |
| animated-checkbox | Spring-animated checkmark with strikethrough on label text | [input, checkbox, animation, spring, todo] |
| exploding-input | Particles burst out of input on each keystroke | [input, particles, animation, typing, playful] |
| badge | Compact label/tag with multiple color variants and sizes | [data-display, label, status, tag] |
| kbd | Keyboard shortcut indicators with platform symbols, optional live key response | [data-display, keyboard, shortcut, hotkey] |
| perspective-book | 3D book that rotates on hover with perspective transforms | [layout, 3d, hover, interactive, book] |
| tweet | Custom-styled Twitter/X post embed with toggle options | [embed, twitter, social, card] |
| spotify-card | Spotify track display with album art and blurred background | [embed, spotify, music, card] |
| spinner | SVG gradient rotation loading spinner, 4 sizes, 3 speeds | [feedback, loading, spinner, progress] |
| bars-spinner | 12 bars in a circle with cascading fade animation | [feedback, loading, spinner, bars] |
| light-rays | WebGL shader animated light rays from a configurable source point | [visual-effect, webgl, light, rays, shader] |
| animated-gradient | WebGL shader swirling gradient backgrounds with presets (Lava, Prism, Plasma, etc.) | [visual-effect, webgl, gradient, background, shader] |

### Implementation Notes

_None yet. Add notes here as components are adapted for this project._

---

## react-bits

- **URL:** https://github.com/DavidHDev/react-bits
- **Docs:** https://reactbits.dev
- **Stack:** React, TypeScript — ships in 4 variants: JS-CSS, JS-Tailwind, TS-CSS, TS-Tailwind
- **License:** MIT
- **Tailwind Required:** **No** — CSS variants available (easiest to adapt to styled-components)
- **Description:** 110+ animated, interactive components. The CSS variant makes this the most compatible library for non-Tailwind projects. Strong in text animations, backgrounds, and cursor effects.
- **Install:** `npx jsrepo add` or copy from docs
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| ascii-text | Renders text as ASCII art characters | [text-display, ascii, generative, monospace] |
| blur-text | Text that transitions from blurred to sharp on reveal | [text-animation, blur, reveal, entrance] |
| circular-text | Text arranged in a circular path | [text-animation, circular, rotate, path] |
| decrypted-text | Text decrypts from random characters to final string | [text-animation, decrypt, scramble, reveal] |
| fuzzy-text | Text with a fuzzy/vibrating distortion effect | [text-animation, fuzzy, distortion, vibrate] |
| glitch-text | Digital glitch distortion effect on text | [text-animation, glitch, distortion, digital] |
| gradient-text | Text filled with animated gradient colors | [text-display, gradient, color, animated] |
| letter-glitch | Individual letters glitch independently | [text-animation, glitch, letters, random] |
| rotating-text | Text that rotates through words/phrases | [text-animation, rotate, cycle, transition] |
| scrambled-text | Characters scramble before resolving | [text-animation, scramble, random, decode] |
| shiny-text | Text with a sweeping shine highlight | [text-animation, shine, shimmer, highlight] |
| split-text | Text that splits apart and reassembles on scroll/trigger | [text-animation, split, entrance, stagger] |
| text-cursor | Custom text cursor with animated effects | [cursor, text, caret, animated] |
| text-pressure | Text that responds to cursor proximity with size/weight changes | [text-animation, interactive, pressure, variable-font] |
| text-rotate | Text rotation animation between values | [text-animation, rotate, cycle, flip] |
| text-type | Typewriter-style text animation | [text-animation, typewriter, typing, sequential] |
| falling-text | Text characters that fall with gravity physics | [text-animation, falling, gravity, physics] |
| faulty-terminal | Terminal-style text with glitch/error effects | [text-display, terminal, glitch, retro] |
| scroll-float | Text/elements that float with parallax on scroll | [text-animation, scroll, float, parallax] |
| scroll-reveal | Elements reveal with animation on scroll into view | [scrolling, reveal, entrance, viewport] |
| scroll-velocity | Content speed tied to scroll velocity | [scrolling, velocity, speed, parallax] |
| true-focus | Highlights the word nearest to cursor in a text block | [text-animation, interactive, focus, cursor] |
| variable-proximity | Text weight/size changes based on cursor distance | [text-animation, interactive, variable-font, cursor] |
| animated-content | Wrapper for entrance/exit animations on children | [visual-effect, animation, entrance, wrapper] |
| animated-list | List items animate in with stagger | [data-display, list, stagger, entrance] |
| bounce-cards | Cards that bounce into position with physics | [card, bounce, physics, entrance] |
| card-nav | Card-based navigation with animated transitions | [card, navigation, transition, interactive] |
| card-swap | Cards that swap positions with animation | [card, swap, shuffle, interactive] |
| carousel | Smooth scrolling carousel | [layout, carousel, slider, scroll] |
| click-spark | Spark/particle burst on click | [interactive, click, particles, spark] |
| count-up | Animated counting number | [data-display, number, counter, increment] |
| counter | Animated number counter with rolling digits | [data-display, number, counter, rolling] |
| crosshair | Crosshair cursor that follows mouse | [cursor, crosshair, tracking, pointer] |
| dock | macOS-style dock with magnification | [navigation, dock, magnify, hover] |
| elastic-slider | Slider with elastic/rubbery physics on drag | [interactive, slider, elastic, physics] |
| folder | 3D animated folder that opens to reveal content | [interactive, 3d, folder, reveal] |
| magnet | Elements that magnetically attract to cursor | [interactive, magnetic, cursor, hover] |
| pill-nav | Pill-shaped navigation with animated indicator | [navigation, pill, indicator, animated] |
| shuffle | Shuffles children with animated position swaps | [interactive, shuffle, animation, random] |
| stepper | Multi-step progress with animated transitions | [interactive, stepper, progress, wizard] |
| antigravity | Elements float upward defying gravity | [visual-effect, physics, float, antigravity] |
| aurora | Aurora borealis animated background | [background, aurora, gradient, animated] |
| balatro | Psychedelic warping pattern background | [background, warp, pattern, psychedelic] |
| ballpit | Interactive ball physics simulation | [background, interactive, physics, balls] |
| beams | Animated light beams background | [background, beams, light, animated] |
| blob-cursor | Blobby cursor that morphs and follows mouse | [cursor, blob, morph, follow] |
| color-bends | Colorful gradient bending effects | [background, gradient, color, animated] |
| curved-loop | Curved looping animation pattern | [background, curve, loop, animated] |
| dark-veil | Dark overlay with animated reveal | [background, dark, overlay, veil] |
| decay-card | Card with a decay/dissolve visual effect | [card, decay, dissolve, effect] |
| dither | Dithering shader effect | [visual-effect, dither, shader, retro] |
| dot-grid | Animated dot grid background | [background, dots, grid, animated] |
| grainient | Grainy gradient background | [background, gradient, grain, noise] |
| grid-distortion | Grid background with mouse-driven distortion | [background, grid, distortion, interactive] |
| grid-motion | Grid with animated movement patterns | [background, grid, motion, animated] |
| grid-scan | Grid with scanning line effect | [background, grid, scan, animated] |
| hyperspeed | Star Wars hyperspeed tunnel effect | [background, hyperspeed, tunnel, stars] |
| lightning | Animated lightning bolt effects | [background, lightning, electric, animated] |
| light-pillar | Vertical light pillar effects | [background, light, pillar, vertical] |
| light-rays | Animated light rays emanating outward | [background, light, rays, animated] |
| noise | Animated noise/grain texture | [background, noise, grain, texture] |
| orb | Floating glowing orb animation | [background, orb, glow, floating] |
| particles | Interactive particle field | [background, particles, interactive, floating] |
| plasma | Plasma-style animated color effect | [background, plasma, color, animated] |
| prism | Prismatic light refraction effect | [background, prism, refraction, color] |
| chroma-grid | Colorful grid with chromatic effects | [layout, grid, color, chromatic] |
| circular-gallery | Gallery arranged in a circular path | [layout, gallery, circular, 3d] |
| dome-gallery | Gallery items arranged in a dome | [layout, gallery, dome, 3d] |
| flying-posters | Posters that fly/float in 3D space | [layout, gallery, 3d, floating] |
| masonry | Masonry grid layout | [layout, masonry, grid, responsive] |
| orbit-images | Images orbiting in circular paths | [layout, gallery, orbit, animated] |
| reflective-card | Card with surface reflection effect | [card, reflection, glass, hover] |
| scroll-stack | Cards that stack as you scroll | [scrolling, stack, cards, parallax] |
| stack | Stacked card layout | [layout, stack, cards, layered] |
| electric-border | Animated electric/crackling border | [visual-effect, border, electric, animated] |
| fluid-glass | Fluid glass morphism effect | [visual-effect, glass, fluid, blur] |
| iridescence | Iridescent color-shifting surface | [visual-effect, iridescent, color-shift, holographic] |
| liquid-chrome | Liquid chrome metallic effect | [visual-effect, liquid, chrome, metallic] |
| liquid-ether | Ethereal liquid flowing effect | [visual-effect, liquid, ether, flowing] |
| metaballs | Organic metaball blending animation | [visual-effect, metaballs, organic, blend] |
| metallic-paint | Metallic paint surface effect | [visual-effect, metallic, paint, surface] |
| pixel-blast | Pixel explosion/disintegration effect | [visual-effect, pixel, explosion, disintegrate] |
| pixel-card | Card with pixelation hover effect | [card, pixel, hover, retro] |
| pixel-trail | Pixel trail following cursor | [cursor, pixel, trail, retro] |
| pixel-transition | Page/element transition with pixel effect | [visual-effect, pixel, transition, animated] |
| ribbons | Animated flowing ribbons | [background, ribbons, flowing, animated] |
| ripple-grid | Grid with ripple wave propagation | [background, grid, ripple, wave] |
| silk | Silk fabric flowing animation | [background, silk, fabric, flowing] |
| squares | Animated square pattern background | [background, squares, pattern, animated] |
| waves | Animated wave pattern | [background, waves, ocean, animated] |
| bubble-menu | Floating bubble-style menu | [navigation, bubble, menu, floating] |
| flowing-menu | Menu with fluid flowing animations | [navigation, flowing, menu, animated] |
| gooey-nav | Navigation with gooey/sticky transitions | [navigation, gooey, sticky, animated] |
| infinite-menu | Infinitely scrolling circular menu | [navigation, infinite, circular, scroll] |
| infinite-scroll | Infinite scrolling content | [scrolling, infinite, loop, continuous] |
| profile-card | Animated profile/contact card | [card, profile, social, animated] |
| spotlight-card | Card with cursor-following spotlight | [card, spotlight, cursor, hover] |
| tilted-card | Card with 3D tilt on hover | [card, tilt, 3d, hover] |
| ghost-cursor | Ghost/trailing cursor effect | [cursor, ghost, trail, follow] |
| glare-hover | Glare reflection on hover | [visual-effect, glare, hover, reflection] |
| glass-icons | Frosted glass style icons | [visual-effect, glass, icons, frosted] |
| glass-surface | Frosted glass surface effect | [visual-effect, glass, surface, blur] |
| gradient-blinds | Gradient with venetian blind reveal | [visual-effect, gradient, blinds, reveal] |
| gradual-blur | Content that gradually blurs | [visual-effect, blur, gradual, progressive] |
| image-trail | Images trailing behind cursor movement | [cursor, images, trail, follow] |
| lanyard | Animated lanyard/badge with physics | [interactive, lanyard, physics, badge] |
| laser-flow | Laser beam flow effect | [visual-effect, laser, flow, animated] |
| logo-loop | Continuously looping logo animation | [scrolling, logo, loop, brand] |
| magic-bento | Animated bento grid layout | [layout, bento, grid, animated] |
| magnet-lines | Lines that attract toward cursor | [visual-effect, magnetic, lines, cursor] |
| model-viewer | 3D model viewer component | [interactive, 3d, model, viewer] |
| splash-cursor | Splash/paint effect on cursor click | [cursor, splash, paint, click] |
| sticker-peel | Sticker peeling animation on hover | [interactive, sticker, peel, hover] |
| target-cursor | Target/aim cursor effect | [cursor, target, aim, crosshair] |
| fade-content | Content with fade entrance animation | [visual-effect, fade, entrance, animated] |

### Implementation Notes

**Best fit for allships:** CSS variants mean no Tailwind dependency. Extract JS-CSS or TS-CSS variants directly. Background effects and text animations are particularly strong.

---

## magic-ui

- **URL:** https://github.com/magicuidesign/magicui
- **Docs:** https://magicui.design
- **Stack:** React, TypeScript, Tailwind CSS, Framer Motion
- **License:** MIT
- **Tailwind Required:** Yes
- **Description:** 70 animated components designed as the animated companion to shadcn/ui. Strong in landing page effects, text animations, and background patterns. CLI installable.
- **Install:** `npx shadcn add`
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| animated-beam | SVG beam connecting two elements with traveling glow particle | [visual-effect, beam, connection, svg] |
| animated-circular-progress-bar | Circular progress with smooth animated fill | [data-display, progress, circular, animated] |
| animated-gradient-text | Text with animated shifting gradient color | [text-animation, gradient, color, heading] |
| animated-grid-pattern | Grid background with squares that fade in/out | [background, grid, pattern, animated] |
| animated-list | List items animate in with staggered entrance | [data-display, list, stagger, entrance] |
| animated-shiny-text | Inline text with sweeping shine animation | [text-animation, shimmer, highlight, inline] |
| animated-subscribe-button | Button morphing between subscribe states | [button, animation, state-change, subscribe] |
| animated-theme-toggler | Animated toggle for light/dark theme | [interactive, toggle, theme, animation] |
| aurora-text | Text with aurora borealis gradient animation | [text-animation, gradient, aurora, glow] |
| avatar-circles | Overlapping stacked avatar row | [data-display, avatar, group, social] |
| bento-grid | Responsive bento-box grid layout | [layout, grid, bento, responsive] |
| blur-fade | Blur-to-clear fade-in animation wrapper | [visual-effect, blur, fade, entrance] |
| border-beam | Glowing beam traveling along container border | [visual-effect, border, beam, glow] |
| code-comparison | Side-by-side code diff viewer | [data-display, code, comparison, diff] |
| comic-text | Comic book / pop-art styled text | [text-display, comic, stylized, bold] |
| confetti | Canvas-based confetti celebration explosion | [feedback, celebration, particles, confetti] |
| cool-mode | Emoji/particle bursts from cursor on click | [interactive, cursor, particles, fun] |
| dock | macOS-style dock bar with hover magnification | [navigation, dock, magnify, hover] |
| dot-pattern | SVG dot pattern background | [background, pattern, dots, decorative] |
| dotted-map | World map rendered as dots with animated arcs | [data-display, map, dots, visualization] |
| file-tree | Collapsible file/folder tree view | [data-display, tree, file-system, navigation] |
| flickering-grid | Grid with randomly flickering/pulsing squares | [background, grid, flicker, generative] |
| globe | Interactive 3D WebGL globe with location arcs | [data-display, globe, 3d, interactive] |
| grid-pattern | SVG grid line background pattern | [background, pattern, grid, decorative] |
| hero-video-dialog | Thumbnail that expands into modal video player | [interactive, video, modal, hero] |
| highlighter | Animated marker-style text highlight | [text-display, highlight, annotation, animated] |
| hyper-text | Text scrambles through random chars before resolving | [text-animation, scramble, decode, hover] |
| icon-cloud | 3D floating cloud of icons/logos in sphere | [visual-effect, icons, 3d, cloud] |
| interactive-grid-pattern | Grid cells light up based on cursor proximity | [background, grid, interactive, cursor] |
| interactive-hover-button | Button with directional sliding fill on hover | [button, hover, animation, interactive] |
| iphone | iPhone device mockup frame | [layout, mockup, device, frame] |
| lens | Magnifying lens following cursor over image | [interactive, cursor, zoom, lens] |
| light-rays | Animated light ray beams | [visual-effect, light, rays, animated] |
| line-shadow-text | Text with animated drop shadow creating 3D depth | [text-display, shadow, 3d, depth] |
| magic-card | Card with radial gradient spotlight following cursor | [card, hover, gradient, cursor] |
| marquee | Infinite scrolling ticker strip | [scrolling, marquee, ticker, loop] |
| meteors | Animated shooting star trails | [visual-effect, meteors, particles, animated] |
| morphing-text | Text morphing between words via SVG filter blend | [text-animation, morph, transition, svg] |
| neon-gradient-card | Card with neon-colored gradient glow border | [card, gradient, neon, glow] |
| number-ticker | Animated rolling digit number counter | [data-display, number, counter, rolling] |
| orbiting-circles | Elements orbiting in circular paths around center | [visual-effect, orbit, circular, animated] |
| particles | Interactive particle field reacting to cursor | [background, particles, interactive, cursor] |
| pixel-image | Image with pixelation reveal transition | [visual-effect, image, pixel, reveal] |
| pointer | Custom animated cursor with spring physics | [cursor, pointer, animated, spring] |
| progressive-blur | Gradient blur overlay on content edges | [visual-effect, blur, gradient, overlay] |
| pulsating-button | Button with continuous pulsing glow animation | [button, pulse, glow, cta] |
| rainbow-button | Button with animated rainbow gradient border | [button, gradient, rainbow, animated] |
| retro-grid | Perspective-projected retro/vaporwave grid | [background, grid, retro, perspective] |
| ripple | Expanding concentric ripple circles | [visual-effect, ripple, concentric, animated] |
| ripple-button | Button spawning ripple wave from click point | [button, ripple, click, animated] |
| safari | Safari browser window mockup frame | [layout, mockup, browser, frame] |
| android | Android device mockup frame | [layout, mockup, device, frame] |
| scroll-based-velocity | Text speed tied to scroll velocity | [scrolling, velocity, parallax, text-animation] |
| scroll-progress | Progress bar tracking scroll position | [scrolling, progress, indicator, navigation] |
| shimmer-button | Button with sweeping shimmer shine animation | [button, shimmer, shine, cta] |
| shine-border | Container with rotating shine sweep on border | [visual-effect, border, shine, animated] |
| shiny-button | Button with glossy sheen on hover | [button, shiny, hover, glossy] |
| smooth-cursor | Cursor dot following with spring easing | [cursor, smooth, spring, animated] |
| sparkles-text | Text with floating sparkle particles | [text-animation, sparkles, particles, decorative] |
| spinning-text | Text arranged in continuously spinning circle | [text-animation, spinning, circular, rotating] |
| striped-pattern | SVG diagonal stripe background pattern | [background, pattern, stripes, decorative] |
| terminal | Terminal emulator with animated typing output | [data-display, terminal, code, animated] |
| text-animate | Versatile text entrance animation (fade, slide, blur per char/word) | [text-animation, entrance, versatile, motion] |
| text-reveal | Text reveals on scroll with opacity tied to progress | [text-animation, scroll, reveal, parallax] |
| tweet-card | Styled Twitter/X tweet embed card | [card, social, twitter, embed] |
| typing-animation | Typewriter effect with blinking cursor | [text-animation, typewriter, cursor, sequential] |
| video-text | Text masked/filled with playing video | [text-display, video, mask, visual-effect] |
| warp-background | Animated warping dot grid displacement | [background, warp, distortion, animated] |
| word-rotate | Cycles through words with animated transitions | [text-animation, rotate, cycle, transition] |

### Implementation Notes

_None yet. Add notes here as components are adapted for this project._

---

## aceternity-ui

- **URL:** https://github.com/aceternity
- **Docs:** https://ui.aceternity.com
- **Stack:** React, Next.js, Tailwind CSS v4, Framer Motion, TypeScript
- **License:** MIT (free components), premium blocks available
- **Tailwind Required:** Yes
- **Description:** 100+ high-impact visual components. The king of hero sections — 3D cards, spotlight effects, aurora backgrounds, parallax scrolling, WebGL effects. Many unique components not found elsewhere.
- **Install:** Copy from docs site
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| 3d-card-effect | Card with perspective tilt elevating children on hover | [card, 3d, hover, perspective] |
| 3d-globe | Interactive WebGL globe with location arcs | [visual-effect, 3d, globe, interactive] |
| 3d-marquee | Rows scrolling in alternating directions with 3D skew | [scrolling, 3d, marquee, perspective] |
| 3d-pin | Animated 3D pin expanding to reveal content on hover | [interactive, 3d, hover, tooltip] |
| animated-modal | Modal with spring-based open/close animations | [feedback, modal, animation, spring] |
| animated-testimonials | Testimonial carousel with animated transitions | [data-display, testimonial, carousel, animated] |
| animated-tooltip | Tooltip with spring physics on hover | [feedback, tooltip, hover, spring] |
| apple-cards-carousel | Cards expanding into full-screen detail views (Apple-style) | [card, carousel, expandable, apple-style] |
| ascii-art | Image-to-ASCII character art renderer | [visual-effect, ascii, generative, image] |
| aurora-background | Animated aurora/northern lights background | [background, aurora, gradient, animated] |
| background-beams | SVG beams radiating across background | [background, beams, svg, animated] |
| background-beams-with-collision | Beams with particle bursts on collision | [background, beams, particles, collision] |
| background-boxes | Grid of boxes lighting up on hover | [background, grid, hover, interactive] |
| background-gradient | Animated gradient background with blur | [background, gradient, blur, animated] |
| background-gradient-animation | Morphing animated gradient blobs | [background, gradient, morph, animated] |
| background-lines | Animated vertical lines sweeping across | [background, lines, sweep, animated] |
| background-ripple-effect | Concentric circles rippling outward | [background, ripple, concentric, animated] |
| bento-grid | Responsive bento-box grid layout | [layout, grid, bento, responsive] |
| canvas-reveal-effect | Dot-matrix canvas revealing on hover spotlight | [visual-effect, canvas, hover, reveal] |
| canvas-text | Large text rendered on canvas with particle effects | [text-display, canvas, particles, generative] |
| card-hover-effect | Cards with shared animated highlight on hover | [card, hover, spotlight, group] |
| card-spotlight | Card with radial gradient tracking cursor | [card, spotlight, cursor, gradient] |
| card-stack | Cards animating through one at a time | [card, stack, animated, cycling] |
| carousel | Horizontal carousel with drag-to-scroll snap | [interactive, carousel, slider, drag] |
| code-block | Syntax-highlighted code display with copy | [data-display, code, syntax, copy] |
| colourful-text | Rainbow/multicolor gradient on characters | [text-animation, colorful, gradient, rainbow] |
| comet-card | Card with glowing comet trail border | [card, comet, border, glow] |
| compare | Side-by-side image comparison slider | [interactive, comparison, slider, image] |
| container-cover | Container with animated overlay reveal on hover | [interactive, hover, reveal, overlay] |
| container-scroll-animation | Perspective scroll animation for product mockups | [scrolling, 3d, parallax, product] |
| container-text-flip | Text flipping between items on scroll | [text-animation, flip, scroll, transition] |
| direction-aware-hover | Card overlay sliding in from cursor entry direction | [card, hover, direction-aware, overlay] |
| dither-shader | WebGL dithering shader pixel art effect | [visual-effect, shader, dither, webgl] |
| dotted-glow-background | Dotted pattern with animated radial glow | [background, dots, glow, animated] |
| draggable-card | Freely draggable card with physics motion | [card, drag, physics, interactive] |
| encrypted-text | Text scrambling through random chars before resolving | [text-animation, scramble, decrypt, reveal] |
| evervault-card | Encrypted character grid following cursor | [card, hover, generative, encrypted] |
| expandable-card | Card expanding into larger detail view | [card, expandable, modal, shared-layout] |
| file-upload | Drag-and-drop upload zone with visual feedback | [input, upload, drag-drop, form] |
| flip-words | Vertical flip cycling through word list | [text-animation, flip, cycle, transition] |
| floating-dock | macOS-style dock with magnification | [navigation, dock, magnify, hover] |
| floating-navbar | Navigation bar floating/hiding on scroll | [navigation, navbar, sticky, animated] |
| focus-cards | Cards where hovered stays focused, others dim | [card, hover, focus, blur] |
| following-pointer | Decorative pointer following mouse | [cursor, pointer, tracking, decorative] |
| github-globe | 3D globe styled after GitHub's contribution globe | [visual-effect, 3d, globe, github] |
| glare-card | Card with glossy glare moving with cursor | [card, hover, glare, reflection] |
| glowing-effect | Animated glowing border on any element | [visual-effect, glow, border, animated] |
| glowing-stars-effect | Background of twinkling star particles | [background, stars, twinkle, particles] |
| google-gemini-effect | SVG path-drawing animation (Gemini-inspired) | [visual-effect, svg, path-drawing, scroll] |
| grid-and-dot-backgrounds | Configurable grid or dot pattern backgrounds | [background, grid, dots, pattern] |
| hero-highlight | Hero text with animated highlight/underline | [text-animation, hero, highlight, underline] |
| hero-parallax | Hero with product images parallax scrolling | [scrolling, hero, parallax, images] |
| hover-border-gradient | Expanding gradient border on hover | [button, gradient, border, hover] |
| images-slider | Full-width image slider with keyboard nav | [interactive, slider, images, gallery] |
| infinite-moving-cards | Looping horizontal card carousel | [scrolling, card, marquee, infinite] |
| keyboard | Animated 3D Mac keyboard with sound | [visual-effect, keyboard, 3d, interactive] |
| lamp-effect | Radial spotlight expanding with glow | [visual-effect, lamp, glow, spotlight] |
| layout-grid | Responsive grid with animated hover expansion | [layout, grid, masonry, animated] |
| layout-text-flip | Layout sections with flip-animating text | [text-animation, layout, flip, transition] |
| lens | Magnifying lens following cursor over image | [interactive, zoom, lens, cursor] |
| link-preview | Hoverable link with animated preview card | [interactive, preview, hover, card] |
| loader | Animated loading indicators collection | [feedback, loading, spinner, animated] |
| macbook-scroll | MacBook opening on scroll to reveal content | [scrolling, 3d, product, macbook] |
| meteors | Animated meteor/shooting star trails | [visual-effect, meteors, particles, shooting] |
| moving-border | Continuously moving gradient border | [button, border, animated, gradient] |
| multi-step-loader | Sequential labeled loading progress | [feedback, loading, steps, progress] |
| navbar-menu | Mega navigation with animated dropdown panels | [navigation, menu, dropdown, mega] |
| noise-background | Film grain noise texture overlay | [background, noise, grain, texture] |
| parallax-hero-images | Images at different parallax speeds | [scrolling, hero, parallax, depth] |
| parallax-scroll | Content with parallax at varying depths | [scrolling, parallax, depth, images] |
| pixelated-canvas | Content with chunky pixelated mosaic effect | [visual-effect, pixel, canvas, mosaic] |
| placeholders-and-vanish-input | Input with rotating placeholder and vanish-on-submit | [input, placeholder, animated, form] |
| pointer-highlight | Highlight following mouse across text | [cursor, highlight, tracking, text] |
| resizable-navbar | Navbar that resizes on scroll | [navigation, navbar, responsive, scroll] |
| scales | Animated diagonal/horizontal line patterns | [visual-effect, lines, pattern, animated] |
| shooting-stars | Shooting star animation background | [background, stars, shooting, animated] |
| sidebar | Collapsible sidebar with animations | [navigation, sidebar, collapsible, animated] |
| signup-form | Styled signup form with animated inputs | [input, form, authentication, animated] |
| sparkles | Sparkle particles around any element | [visual-effect, sparkles, particles, decorative] |
| spotlight | Radial spotlight following cursor | [visual-effect, cursor, spotlight, hover] |
| stateful-button | Button with state transitions (loading/success/error) | [button, state, loading, feedback] |
| sticky-banner | Fixed notification banner while scrolling | [feedback, banner, sticky, notification] |
| sticky-scroll-reveal | Side-by-side with content revealing on scroll | [scrolling, sticky, reveal, layout] |
| svg-mask-effect | SVG mask revealing content on mouse movement | [visual-effect, svg, mask, interactive] |
| tabs | Animated tab interface with transitions | [interactive, tabs, navigation, animated] |
| text-generate-effect | Text appearing word-by-word with generation animation | [text-animation, generate, typing, entrance] |
| text-hover-effect | Large SVG text with animated stroke on hover | [text-animation, hover, svg, stroke] |
| text-reveal-card | Card where text reveals by moving cursor | [text-animation, reveal, cursor, interactive] |
| timeline | Vertical timeline with scroll-triggered entries | [data-display, timeline, scroll, animated] |
| tracing-beam | Vertical beam tracing down page on scroll | [scrolling, beam, progress, animated] |
| typewriter-effect | Character-by-character typing with cursor | [text-animation, typewriter, typing, cursor] |
| vortex | Swirling vortex/tunnel background | [background, vortex, swirl, animated] |
| wavy-background | Animated wavy undulating background | [background, waves, undulating, animated] |
| webcam-pixel-grid | Live webcam as pixelated color grid | [visual-effect, webcam, pixel, interactive] |
| wobble-card | Card wobbling with spring motion on hover | [card, hover, wobble, physics] |
| world-map | Flat world map with animated connection arcs | [data-display, map, animated, connections] |

### Implementation Notes

_None yet. Add notes here as components are adapted for this project._

---

## motion-primitives

- **URL:** https://github.com/ibelick/motion-primitives
- **Docs:** https://motion-primitives.com
- **Stack:** React, Next.js, Tailwind CSS, Framer Motion
- **License:** MIT
- **Tailwind Required:** Yes
- **Description:** Composable animation building blocks by Julien Thibeaut. These are primitives you combine into custom effects rather than finished hero sections. Smaller but extremely polished.
- **Install:** Copy from docs
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| animated-number | Smooth animated number value transitions | [text-animation, number, counter, transition] |
| animated-group | Staggers entrance animations across children | [layout, stagger, group, entrance] |
| accordion | Expandable sections with animated open/close | [interactive, accordion, expand, collapse] |
| dialog | Animated modal dialog with transitions | [interactive, modal, dialog, overlay] |
| popover | Animated floating popover from trigger | [interactive, popover, tooltip, floating] |
| disclosure | Animated show/hide content toggle | [interactive, disclosure, toggle, expand] |
| tabs | Animated tabs with sliding indicator | [navigation, tabs, indicator, transition] |
| carousel | Spring-physics-based scrolling carousel | [layout, carousel, slider, spring] |
| scroll-progress | Progress bar tracking scroll position | [scrolling, progress, indicator, bar] |
| in-view | Triggers animations when entering viewport | [scrolling, intersection, viewport, reveal] |
| blur-fade | Blur-to-clear fade-in animation wrapper | [visual-effect, blur, fade, entrance] |
| text-effect | Per-character/word entrance animations | [text-animation, characters, words, entrance] |
| text-morph | Smooth character interpolation between strings | [text-animation, morph, interpolation, transition] |
| text-shimmer | Shimmering highlight sweep across text | [text-animation, shimmer, glow, highlight] |
| text-scramble | Characters scramble before resolving | [text-animation, scramble, decode, reveal] |
| text-roll | Vertical rolling text cycling through words | [text-animation, roll, cycle, vertical] |
| text-loop | Continuously loops through text values | [text-animation, loop, cycle, rotate] |
| number-flow | Smooth rolling digit number transitions | [text-animation, number, counter, digit] |
| spinning-text | Text in circular spinning arrangement | [text-animation, circular, spin, rotate] |
| cursor | Custom animated cursor following mouse | [cursor, pointer, follow, animated] |
| spotlight | Spotlight effect following cursor | [cursor, spotlight, hover, glow] |
| magnetic | Elements magnetically attract to cursor | [cursor, magnetic, hover, attract] |
| tilt | 3D perspective tilt based on cursor position | [cursor, tilt, 3d, perspective] |
| dock | macOS-style dock with magnification | [navigation, dock, magnify, hover] |
| toolbar-dynamic | Expandable dynamic toolbar morphing between states | [navigation, toolbar, morph, expandable] |
| toolbar-expandable | Toolbar expanding to reveal actions | [navigation, toolbar, expand, actions] |
| transition-panel | Animated panel transitioning between content views | [layout, panel, transition, switch] |
| image-comparison | Before/after image slider comparison | [interactive, comparison, slider, image] |
| border-trail | Animated border tracing around element | [visual-effect, border, trail, animated] |
| glow-effect | Glowing light effect around elements | [visual-effect, glow, light, hover] |
| morphing-dialog | Dialog morphing from trigger with shared layout | [interactive, dialog, morph, shared-layout] |
| progressive-blur | Gradient blur increasing progressively | [visual-effect, blur, gradient, progressive] |
| infinite-slider | Auto-scrolling horizontal item slider | [scrolling, infinite, slider, marquee] |
| marquee | Continuous ticker-style scrolling content | [scrolling, marquee, ticker, auto-scroll] |
| sliding-number | Digits sliding up/down between values | [text-animation, number, sliding, digit] |
| hover-card | Card revealing content on hover | [card, hover, reveal, popup] |
| collapsible | Animated collapsible container | [interactive, collapse, expand, toggle] |
| draggable | Draggable elements with spring constraints | [interactive, drag, physics, gesture] |
| sortable | Animated drag-to-reorder list | [interactive, sortable, drag, reorder] |
| cursor-follow | Element smoothly following cursor | [cursor, follow, tracking, mouse] |

### Implementation Notes

_None yet. Add notes here as components are adapted for this project._

---

## cult-ui

- **URL:** https://github.com/nolly-studio/cult-ui
- **Docs:** https://www.cult-ui.com
- **Stack:** React, Next.js, Tailwind CSS, Framer Motion, shadcn-compatible
- **License:** MIT
- **Tailwind Required:** Yes
- **Description:** Components for "design engineers" — emphasizes tactile, physicality-inspired interactions. Texture effects, draggable elements, and refined micro-interactions.
- **Install:** shadcn CLI compatible
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| flyout | Animated flyout menu with smooth transitions | [navigation, flyout, menu, expand] |
| direction-aware-tabs | Tabs with indicator sliding from selection direction | [navigation, tabs, direction, indicator] |
| gradient-heading | Heading with animated gradient color fill | [text-display, gradient, heading, color] |
| typing-animation | Typewriter character-by-character text | [text-animation, typewriter, typing, sequential] |
| text-animate | General-purpose text entrance with preset effects | [text-animation, entrance, effects, preset] |
| scramble-text | Characters randomize before resolving | [text-animation, scramble, decode, random] |
| hero-video-dialog | Hero play button opening embedded video modal | [interactive, hero, video, modal] |
| bg-animated-gradient | Full-screen animated gradient background | [background, gradient, animated, color] |
| bg-noise-gradient | Noise texture over gradient background | [background, noise, gradient, texture] |
| floating-panel | Draggable/floating repositionable panel | [layout, panel, draggable, floating] |
| three-d-carousel | 3D perspective carousel with rotation | [layout, carousel, 3d, perspective] |
| image-reveal | Image revealing with clip-path animation | [visual-effect, image, reveal, clip-path] |
| blur-reveal | Content revealing from blurred to sharp | [visual-effect, blur, reveal, scroll] |
| texture-button | Button with textured/noisy background | [button, texture, noise, tactile] |
| texture-card | Card with textured grainy aesthetic | [card, texture, noise, tactile] |
| hover-video-player | Video playing on hover over thumbnail | [interactive, video, hover, player] |
| lightboard | Interactive grid of lights responding to cursor | [interactive, grid, lights, cursor] |
| sparkles | Animated sparkle particles around element | [visual-effect, sparkles, particles, decorative] |
| animated-beam | Animated beam connecting two points | [visual-effect, beam, line, connection] |
| command-menu | Keyboard-activated command palette | [interactive, command, search, palette] |
| card-stack | Cards fanning out with drag/swipe gestures | [card, stack, swipe, gesture] |
| minimal-card | Clean minimalist card with subtle hover | [card, minimal, hover, clean] |
| expandable-card | Card expanding to reveal more detail | [card, expand, detail, click] |
| gravity | Physics-based gravity for falling/bouncing elements | [visual-effect, physics, gravity, bounce] |
| shift-card | Card shifting/translating on hover for layered offset | [card, hover, shift, offset] |
| dynamic-island | iOS-style dynamic island notification | [feedback, notification, island, morph] |
| avatar-group | Overlapping avatar row expanding on hover | [data-display, avatar, group, overlap] |
| stacking-cards | Cards stacking during scroll with parallax | [card, scroll, stack, parallax] |
| side-panel | Animated off-screen drawer panel | [layout, panel, drawer, slide] |
| scroll-reveal | Elements animating in on scroll into viewport | [scrolling, reveal, entrance, viewport] |
| carousel | Horizontal scroll carousel with snap | [layout, carousel, scroll, snap] |
| popover-form | Form appearing in popover with transitions | [interactive, popover, form, input] |
| stepper | Multi-step wizard with animated transitions | [interactive, stepper, wizard, form] |
| notification | Toast/notification with entrance/exit animations | [feedback, notification, toast, alert] |
| gradient-button | Button with animated gradient border/fill | [button, gradient, animated, border] |

### Implementation Notes

_None yet. Add notes here as components are adapted for this project._

---

## animata

- **URL:** https://github.com/codse/animata
- **Docs:** https://animata.design
- **Stack:** React, Tailwind CSS, Framer Motion (optional), Lucide Icons
- **License:** MIT
- **Tailwind Required:** Yes
- **Description:** 75+ micro-interactions and small delightful effects. The "sprinkle on top" library — card hovers, text reveals, loading states, scroll animations. Complements bigger hero-section libraries.
- **Install:** Copy from docs
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| counter | Animated counting number to target value | [text-animation, counter, number, increment] |
| text-reveal | Text revealing character/word by word | [text-animation, reveal, sequential, entrance] |
| wave-reveal | Text characters animate in with wave motion | [text-animation, wave, characters, entrance] |
| typing-text | Typewriter effect with blinking cursor | [text-animation, typewriter, cursor, sequential] |
| scramble-text | Characters randomize before settling | [text-animation, scramble, random, decode] |
| staggered-text | Text elements with staggered delay timing | [text-animation, stagger, delay, entrance] |
| flip-text | Text characters flip/rotate in from top or bottom | [text-animation, flip, rotate, entrance] |
| ticker-text | Scrolling ticker/marquee text | [text-animation, ticker, scroll, marquee] |
| gradient-text | Text with animated gradient color fill | [text-display, gradient, color, animated] |
| blur-text | Text transitioning from blurred to sharp | [text-animation, blur, focus, reveal] |
| sliding-text | Text sliding in from a direction | [text-animation, slide, entrance, direction] |
| bouncing-text | Characters bouncing into place with spring physics | [text-animation, bounce, spring, characters] |
| swipe-button | Swipe-to-confirm button interaction | [button, swipe, confirm, gesture] |
| magnetic-button | Button magnetically pulling toward cursor | [button, magnetic, cursor, hover] |
| animated-subscribe-button | Subscribe button animating between states | [button, subscribe, state, animated] |
| glitch-button | Button with digital glitch distortion | [button, glitch, distortion, effect] |
| shimmer-button | Button with sweeping shimmer highlight | [button, shimmer, shine, highlight] |
| pulse-button | Button with pulsing glow ring animation | [button, pulse, glow, ring] |
| flip-card | Card flipping to reveal back side | [card, flip, 3d, reveal] |
| tilt-card | Card tilting in 3D following cursor | [card, tilt, 3d, cursor] |
| spotlight-card | Card with spotlight gradient following cursor | [card, spotlight, cursor, gradient] |
| stack-card | Cards in stacked deck formation | [card, stack, deck, layered] |
| hover-reveal-card | Card revealing hidden content on hover | [card, hover, reveal, content] |
| glassmorphism-card | Frosted glass card aesthetic | [card, glass, frosted, blur] |
| expanding-card | Card expanding to fill area with detail | [card, expand, detail, zoom] |
| rotating-card | Continuously rotating or interactive card | [card, rotate, spin, 3d] |
| glow-card | Card with glowing border/background | [card, glow, border, light] |
| dot-pattern | Repeating dot grid background | [background, dots, grid, pattern] |
| grid-pattern | Repeating line grid background | [background, grid, lines, pattern] |
| flickering-grid | Grid with randomly twinkling cells | [background, grid, flicker, animated] |
| gradient-background | Smoothly animated gradient background | [background, gradient, animated, color] |
| moving-gradient | Continuously shifting gradient background | [background, gradient, moving, animated] |
| particle-background | Floating particle animation | [background, particles, floating, animated] |
| wave-background | Animated wave/sine pattern | [background, wave, animated, pattern] |
| aurora-background | Northern lights animated background | [background, aurora, lights, animated] |
| noise-background | Static or animated noise grain texture | [background, noise, grain, texture] |
| starfield | Animated flying-through-space starfield | [background, stars, space, animated] |
| ripple-background | Concentric ripple animation from a point | [background, ripple, concentric, animated] |
| github-contributions | GitHub-style contribution heatmap grid | [data-display, github, heatmap, grid] |
| progress-bar | Animated progress bar fill | [data-display, progress, bar, fill] |
| circular-progress | Circular ring progress indicator | [data-display, progress, circular, ring] |
| activity-graph | Activity sparkline visualization | [data-display, graph, activity, sparkline] |
| pricing-card | Animated pricing plan card | [card, pricing, plan, features] |
| testimonial-card | User testimonial/review card | [card, testimonial, review, social-proof] |
| stat-card | Statistic card with animated number | [card, statistic, number, animated] |
| notification-badge | Animated notification count badge | [feedback, badge, count, notification] |
| stacked-list | List items stacking/overlapping | [data-display, list, stack, overlap] |
| animated-list | List items animating in with stagger | [data-display, list, stagger, entrance] |
| reorderable-list | Drag-to-reorder with smooth transitions | [interactive, list, drag, reorder] |
| animated-input | Text input with animated label transitions | [input, text, label, animated] |
| otp-input | One-time password individual digit cells | [input, otp, code, verification] |
| search-input | Search input with animated expand/focus | [input, search, expand, focus] |
| tags-input | Input for adding/removing tag tokens | [input, tags, tokens, multi] |
| animated-tooltip | Tooltip with smooth entrance/exit | [feedback, tooltip, hover, popup] |
| toast-notification | Toast popup with auto-dismiss | [feedback, toast, notification, popup] |
| bento-grid | Bento box grid layout | [layout, bento, grid, masonry] |
| accordion | Expandable/collapsible sections | [interactive, accordion, expand, collapse] |
| tabs | Tabbed navigation with animated indicator | [navigation, tabs, switch, indicator] |
| modal | Animated modal/dialog overlay | [interactive, modal, dialog, overlay] |
| drawer | Off-screen drawer panel sliding in | [layout, drawer, panel, slide] |
| scroll-progress | Scroll progress indicator bar | [scrolling, progress, indicator, bar] |
| parallax | Parallax scrolling for layered depth | [scrolling, parallax, depth, layers] |
| reveal-on-scroll | Elements animate in on scroll into view | [scrolling, reveal, viewport, entrance] |
| infinite-scroll | Continuously repeating content (marquee) | [scrolling, infinite, marquee, loop] |
| horizontal-scroll | Horizontal scrolling section | [scrolling, horizontal, section, overflow] |
| follow-cursor | Element following mouse cursor | [cursor, follow, tracking, mouse] |
| spotlight-cursor | Spotlight centered on cursor | [cursor, spotlight, light, hover] |
| trail-cursor | Particles trailing behind cursor | [cursor, trail, particles, follow] |
| image-comparison | Before/after image slider | [interactive, image, comparison, slider] |
| image-zoom | Image zooming on hover or click | [interactive, image, zoom, magnify] |
| image-carousel | Image slideshow with transitions | [layout, carousel, image, slideshow] |
| image-grid | Animated image grid with hover effects | [layout, grid, image, hover] |
| skeleton | Loading placeholder skeleton | [feedback, skeleton, loading, placeholder] |
| spinner | Animated loading spinner | [feedback, spinner, loading, rotate] |
| shimmer-loader | Shimmer loading placeholder animation | [feedback, shimmer, loading, placeholder] |

### Implementation Notes

_None yet. Add notes here as components are adapted for this project._

---

## animate-ui

- **URL:** https://github.com/Animate-UI/animate-ui
- **Docs:** https://animate-ui.com
- **Stack:** React, TypeScript, Tailwind CSS, Framer Motion, Shadcn CLI
- **License:** MIT
- **Tailwind Required:** Yes
- **Description:** Animation-focused library built for shadcn's CLI system. Standout: Radix-specific animation wrappers that add smooth animations to Radix primitives. Also includes backgrounds, buttons, and text effects.
- **Install:** `npx shadcn add`
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| counting-number | Animated number counting to target | [text-animation, number, counter, animated] |
| gradient-text | Text with animated gradient fill | [text-animation, gradient, color, animated] |
| highlight-text | Text with animated highlight marker | [text-animation, highlight, marker, animated] |
| morphing-text | Text morphing between different strings | [text-animation, morph, transition, interpolation] |
| rolling-text | Text rolling vertically through values | [text-animation, roll, vertical, cycle] |
| rotating-text | Text rotating through words | [text-animation, rotate, cycle, transition] |
| scrolling-number | Number with scroll-style digit transitions | [text-animation, number, scroll, digit] |
| shimmering-text | Shimmer highlight sweeping across text | [text-animation, shimmer, highlight, sweep] |
| sliding-number | Digits sliding between values | [text-animation, number, sliding, digit] |
| splitting-text | Text splitting apart with animation | [text-animation, split, entrance, stagger] |
| typing-text | Typewriter effect with cursor | [text-animation, typewriter, cursor, typing] |
| bubble-background | Floating bubble animation background | [background, bubble, floating, animated] |
| fireworks-background | Fireworks explosion background | [background, fireworks, particles, celebration] |
| gradient-background | Animated gradient background | [background, gradient, animated, color] |
| gravity-stars-background | Stars falling with gravity effect | [background, stars, gravity, animated] |
| hexagon-background | Hexagonal grid pattern background | [background, hexagon, grid, pattern] |
| hole-background | Background with expanding hole reveal | [background, hole, reveal, animated] |
| stars-background | Animated starfield background | [background, stars, space, animated] |
| button | Animated button with entrance effects | [button, animation, entrance, click] |
| copy-button | Copy-to-clipboard with state animation | [button, clipboard, copy, utility] |
| flip-button | Button flipping between states | [button, flip, state, animated] |
| github-stars-button | Animated GitHub star count button | [button, github, stars, social] |
| icon-button | Button with animated icon transitions | [button, icon, animation, transition] |
| liquid-button | Button with liquid/fluid morph effect | [button, liquid, morph, fluid] |
| ripple-button | Button with ripple on click | [button, ripple, click, animated] |
| theme-toggler-button | Animated dark/light theme toggle | [button, theme, toggle, animated] |
| animated-accordion | Radix accordion with smooth animations | [interactive, accordion, radix, animated] |
| animated-alert-dialog | Radix alert dialog with transitions | [feedback, alert, radix, animated] |
| animated-checkbox | Radix checkbox with animation | [input, checkbox, radix, animated] |
| animated-collapsible | Radix collapsible with animation | [interactive, collapsible, radix, animated] |
| animated-dialog | Radix dialog with animated transitions | [interactive, dialog, radix, animated] |
| animated-popover | Radix popover with animation | [interactive, popover, radix, animated] |
| animated-progress | Radix progress with animation | [feedback, progress, radix, animated] |
| animated-switch | Radix switch with animation | [input, switch, radix, animated] |
| animated-tabs | Radix tabs with animated transitions | [navigation, tabs, radix, animated] |
| animated-toggle | Radix toggle with animation | [interactive, toggle, radix, animated] |
| animated-toggle-group | Radix toggle group with animation | [interactive, toggle-group, radix, animated] |
| animated-tooltip | Radix tooltip with animation | [feedback, tooltip, radix, animated] |
| avatar-group | Animated avatar group component | [data-display, avatar, group, animated] |
| code-tabs | Animated code tab switcher | [data-display, code, tabs, animated] |
| cursor | Custom animated cursor component | [cursor, pointer, animated, custom] |
| tabs | Animated tab interface | [navigation, tabs, animated, indicator] |
| tooltip | Enhanced animated tooltip | [feedback, tooltip, hover, animated] |
| auto-height | Smooth auto-height transition wrapper | [interactive, height, transition, smooth] |
| blur-effect | Blur entrance/exit animation | [visual-effect, blur, entrance, animated] |
| click-effect | Visual effect on click interaction | [interactive, click, effect, particles] |
| fade-effect | Fade entrance/exit animation | [visual-effect, fade, entrance, animated] |
| highlight-effect | Highlight animation effect | [visual-effect, highlight, animated, marker] |
| image-zoom-effect | Image zoom on hover/click | [interactive, image, zoom, hover] |
| magnetic-effect | Magnetic cursor attraction | [interactive, magnetic, cursor, hover] |
| particles-effect | Particle animation effects | [visual-effect, particles, animated, decorative] |
| shine-effect | Shine sweep animation | [visual-effect, shine, sweep, animated] |
| slide-effect | Slide entrance/exit animation | [visual-effect, slide, entrance, animated] |
| tilt-effect | 3D tilt on hover | [interactive, tilt, 3d, hover] |
| zoom-effect | Zoom in/out animation | [visual-effect, zoom, scale, animated] |
| flip-card | Card flipping to reveal back | [card, flip, 3d, reveal] |
| management-bar | Animated management/action bar | [navigation, bar, actions, animated] |
| motion-carousel | Animated carousel with motion | [layout, carousel, motion, animated] |
| notification-list | Animated notification list | [feedback, notification, list, animated] |
| pin-list | Animated pinned items list | [data-display, pin, list, animated] |
| playful-todolist | Animated interactive todo list | [interactive, todo, list, playful] |
| radial-intro | Radial reveal intro animation | [visual-effect, radial, intro, reveal] |
| radial-menu | Circular radial menu | [navigation, radial, circular, menu] |
| radial-nav | Radial navigation component | [navigation, radial, circular, nav] |
| share-button | Animated share button with options | [button, share, social, animated] |
| user-presence-avatar | Avatar showing online/presence status | [data-display, avatar, presence, status] |

### Implementation Notes

_None yet. Add notes here as components are adapted for this project._

---

## lukacho-ui

- **URL:** https://github.com/lukahukur
- **Docs:** https://ui.lukacho.com
- **Stack:** React, Next.js, Tailwind CSS, Framer Motion
- **License:** MIT
- **Tailwind Required:** Yes
- **Description:** Smaller library focused on product UI elements. The mock browser frame and animated grid background are standouts for project showcases.
- **Install:** Copy from docs
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| accordion | Expandable/collapsible content sections | [interactive, accordion, expand, collapse] |
| account | User account interface component | [data-display, account, profile, user] |
| animated-chart | Interactive chart with motion effects | [data-display, chart, animated, visualization] |
| animated-grid-background | Grid pattern background with animations | [background, grid, animated, pattern] |
| animated-pricing | Dynamic pricing table with animations | [data-display, pricing, animated, table] |
| background-grid-beam | Grid with beam light effect | [background, grid, beam, light] |
| background-lights | Lighting effects for backgrounds | [background, lights, glow, animated] |
| copy-to-clipboard | Text copying utility component | [interactive, clipboard, copy, utility] |
| custom-cursor | Personalized cursor styling | [cursor, custom, pointer, styled] |
| dropdown-menu | Expandable menu navigation | [navigation, dropdown, menu, interactive] |
| feedback | User feedback/review component | [interactive, feedback, review, form] |
| figma-cursor | Figma-style collaborative cursor | [cursor, figma, collaborative, pointer] |
| image-swiper | Image carousel/slider | [layout, carousel, image, swipe] |
| link | Enhanced navigation link | [navigation, link, animated, interactive] |
| marquee | Scrolling text/content animation | [scrolling, marquee, ticker, loop] |
| mock-browser | Browser window mockup display | [layout, mockup, browser, frame] |
| pricing | Pricing table/comparison layout | [data-display, pricing, table, comparison] |
| side-menu-button | Navigation menu trigger button | [navigation, menu, button, trigger] |
| skeleton | Loading placeholder component | [feedback, skeleton, loading, placeholder] |
| tab-list | Tabbed content interface | [navigation, tabs, list, interactive] |

### Implementation Notes

_None yet. Add notes here as components are adapted for this project._

---

## number-flow

- **URL:** https://github.com/barvian/number-flow
- **Docs:** https://number-flow.barvian.me
- **Stack:** React (also Vue, vanilla JS) — zero dependencies
- **License:** MIT
- **Tailwind Required:** **No**
- **Description:** Single-purpose animated number component. Digit-by-digit rolling transitions when values change. Supports currency, locale, and custom timing. Zero dependencies makes it trivial to add anywhere.
- **Install:** `npm install @number-flow/react`
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| number-flow | Animated digit-by-digit rolling number transitions with currency/locale support | [text-animation, number, counter, rolling, zero-deps] |

### Implementation Notes

**Best fit for allships:** Zero dependencies, no Tailwind needed. Drop-in for any metrics, prices, or counters.

---

## eldora-ui

- **URL:** https://github.com/karthikmudunuri/eldoraui
- **Docs:** https://eldoraui.site/docs
- **Stack:** React, TypeScript, Tailwind CSS, Framer Motion, Next.js
- **License:** MIT
- **Tailwind Required:** Yes
- **Description:** Design engineer component library with strong device mockups (iPhone 17, MacBook, Safari, iPad) and unique animated backgrounds (Hacker, Novatrix, Photon Beam). Good complement to other libraries for text animations and polished UI blocks.
- **Install:** Copy from docs or CLI
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| animated-badge | Badge with animated entrance/highlight effect | [data-display, badge, animated, entrance] |
| animated-frameworks | Animated framework/tech logo showcase | [visual-effect, logos, animated, showcase] |
| animated-list | List items with staggered entrance animations | [data-display, list, stagger, entrance] |
| animated-shiny-button | Button with sweeping shine animation | [button, shine, shimmer, cta] |
| blur-in-text | Text fading in from blur | [text-animation, blur, fade, entrance] |
| browser | Generic browser window mockup frame | [layout, mockup, browser, frame] |
| card-flip-hover | Card that flips to reveal back on hover | [card, flip, 3d, hover] |
| clerk-otp | Animated OTP/verification code input | [input, otp, code, animated] |
| cobe-globe | Interactive 3D globe using Cobe library | [visual-effect, globe, 3d, interactive] |
| dock-text | macOS-style dock with text labels | [navigation, dock, text, hover] |
| fade-text | Text with fade entrance animation | [text-animation, fade, entrance, subtle] |
| font-weight-text | Text animating through font weight changes | [text-animation, weight, variable-font, interactive] |
| github-inline-comments | GitHub-style inline comment component | [data-display, github, comments, code] |
| gradual-spacing-text | Text with gradually increasing letter spacing | [text-animation, spacing, gradual, entrance] |
| grid | Animated grid background pattern | [background, grid, animated, pattern] |
| hacker-background | Matrix/hacker-style falling characters background | [background, hacker, matrix, characters] |
| ipad | iPad device mockup frame | [layout, mockup, device, ipad] |
| iphone-17-pro | iPhone 17 Pro device mockup frame | [layout, mockup, device, iphone] |
| letter-pull-up-text | Letters pulling up into position | [text-animation, pull-up, letters, entrance] |
| live-button | Button with live/pulsing indicator dot | [button, live, pulse, status] |
| logo-timeline | Animated timeline of logos/brands | [data-display, timeline, logos, animated] |
| macbook-pro | MacBook Pro device mockup frame | [layout, mockup, device, macbook] |
| map | Animated map visualization | [data-display, map, animated, visualization] |
| multi-direction-slide-text | Text sliding in from multiple directions | [text-animation, slide, multi-direction, entrance] |
| novatrix-background | Colorful abstract animated background | [background, abstract, colorful, animated] |
| photon-beam | Animated photon/light beam effect | [visual-effect, beam, light, photon] |
| safari | Safari browser window mockup | [layout, mockup, browser, safari] |
| scale-letter-text | Letters scaling up into position | [text-animation, scale, letters, entrance] |
| separate-away-text | Text characters separating apart | [text-animation, separate, spread, exit] |
| terminal | Terminal/command-line display component | [data-display, terminal, code, monospace] |
| testimonial-slider | Animated testimonial carousel | [data-display, testimonial, carousel, slider] |
| wavy-text | Text with wavy motion animation | [text-animation, wave, motion, playful] |
| word-pull-up-text | Words pulling up into position sequentially | [text-animation, pull-up, words, stagger] |

### Implementation Notes

_None yet. Add notes here as components are adapted for this project._

---

## ui-layout

- **URL:** https://github.com/ui-layouts/uilayouts
- **Docs:** https://ui-layout.com
- **Stack:** React, TypeScript, Tailwind CSS, Framer Motion, **GSAP**, Three.js (R3F)
- **License:** MIT
- **Tailwind Required:** Yes
- **Description:** The only library combining GSAP + Framer Motion + Three.js. Experimental/creative components including R3F 3D blob effects, image mouse trails, and clip-path animations. Smaller but unique pieces not found elsewhere.
- **Install:** Copy from docs
- **Added:** 2026-03-06

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| r3f-blob-effect | Three.js 3D blob with interactive distortion | [visual-effect, 3d, blob, threejs, interactive] |
| image-ripple-effect | Image with ripple distortion on interaction | [visual-effect, image, ripple, distortion] |
| image-mousetrail | Images trailing behind cursor movement | [cursor, images, trail, follow] |
| image-reveal | Image revealing with clip-path/wipe animation | [visual-effect, image, reveal, clip-path] |
| sparkles | Animated sparkle particle effects | [visual-effect, sparkles, particles, decorative] |
| timeline-animation | Scroll-driven timeline with GSAP animations | [scrolling, timeline, gsap, animated] |
| clip-path-image | Image with animated clip-path masking | [visual-effect, image, clip-path, mask] |
| file-upload | Animated drag-and-drop file upload zone | [input, upload, drag-drop, animated] |
| password-input | Password input with strength/visibility features | [input, password, form, security] |
| range-slider | Animated range slider input | [input, slider, range, interactive] |
| tags-input | Tag/chip input for adding multiple values | [input, tags, tokens, multi] |
| embla-carousel | Carousel built on Embla with animations | [layout, carousel, slider, embla] |
| buttons | Collection of animated button variants | [button, collection, animated, variants] |
| drag-items | Draggable elements with physics constraints | [interactive, drag, physics, reorder] |
| motion-number | Animated number with motion transitions | [text-animation, number, counter, motion] |

### Implementation Notes

**Unique value:** Only library with GSAP integration — useful for scroll-driven animations that need precise timeline control. R3F blob effect requires Three.js/React Three Fiber.

---

## Discovery Tools

These are not component libraries but useful for finding components across libraries.

### 21st.dev

- **URL:** https://21st.dev
- **GitHub:** https://github.com/serafimcloud/21st
- **What:** Community registry for shadcn-based React components. Search across Aceternity, Magic UI, Lukacho, and more in one place. Install via `npx shadcn`.

---

<!-- TEMPLATE: Copy this section when adding a new library

## library-name

- **URL:** https://github.com/...
- **Docs:** https://...
- **Stack:** React, TypeScript, ...
- **License:** ...
- **Tailwind Required:** Yes/No
- **Description:** ...
- **Install:** ...
- **Added:** YYYY-MM-DD

### Components

| Component | Description | Tags |
|-----------|-------------|------|
| name | description | [tag1, tag2, tag3] |

### Implementation Notes

_None yet. Add notes here as components are adapted for this project._

-->
