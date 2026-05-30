# Gabriele Photography

Landing page for **Gabriele Photography**: A boutique camera shop and print studio located at 133 Hurontario Street, Collingwood, ON. Founded in 1989 by John Gabriele.

## Pages

| File | Description |
|---|---|
| `index.html` | Home — full-viewport hero with social proof bar |
| `about.html` | Our Story — problem/solution split layout with brand history |
| `services.html` | Services — alternating rows for Cameras, Printing, and Passport Photos |
| `testimonials.html` | Reviews — customer testimonial cards with star ratings |
| `contact.html` | Visit Us — directions CTA and FAQ accordion |

## Design

- **Fonts:** Cormorant Garamond (headlines, italic serif) + Syne (body, UI) via Google Fonts
- **Colors:** `#F5C400` yellow accent · `#111111` black · white background
- **Aesthetic:** editorial camera journal — refined, authoritative, minimal


## Structure

```
gabriele-photography/
├── index.html
├── about.html
├── services.html
├── testimonials.html
├── contact.html
├── styles.css       # shared design system, nav, footer, all layouts
└── script.js        # scroll animation, nav scroll state, mobile menu
```

## Features

- Fixed navigation with transparent-to-dark scroll transition on home page
- CSS-only FAQ accordion via `<details>/<summary>`
- Scroll fade-up animation via `IntersectionObserver`
- Mobile-responsive: all two-column layouts stack, carousel snap-scrolls
- `prefers-reduced-motion` support — all animations disabled when requested
- WCAG AA contrast ratios throughout
- Unsplash placeholder images (swap for production assets)

## Business

- **Address:** 133 Hurontario Street, Collingwood, ON L9Y 2M1
- **Phone:** (705) 445-9030
- **Instagram:** [@gabrielephotographycwood](https://www.instagram.com/gabrielephotographycwood)
- **Facebook:** [@GabrielePhotography1](https://www.facebook.com/GabrielePhotography1)
