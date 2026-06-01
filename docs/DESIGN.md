---
name: Core Syntax
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c9c4d8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#938ea1'
  outline-variant: '#484555'
  surface-tint: '#c9beff'
  primary: '#c9beff'
  on-primary: '#30009b'
  primary-container: '#512bd4'
  on-primary-container: '#c7bcff'
  inverse-primary: '#5f3de2'
  secondary: '#ccbeff'
  on-secondary: '#350097'
  secondary-container: '#4c15c8'
  on-secondary-container: '#bba9ff'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#525151'
  on-tertiary-container: '#c6c4c3'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e6deff'
  primary-fixed-dim: '#c9beff'
  on-primary-fixed: '#1b0063'
  on-primary-fixed-variant: '#4618ca'
  secondary-fixed: '#e7deff'
  secondary-fixed-dim: '#ccbeff'
  on-secondary-fixed: '#1e0060'
  on-secondary-fixed-variant: '#4c15c8'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is engineered for a high-performance Fullstack Developer portfolio. It projects an image of technical precision, reliability, and modern architectural thinking. The brand personality is "The Architect"—disciplined, logical, yet capable of creative problem-solving.

The visual style merges **Minimalism** with **Corporate/Modern** tech aesthetics. It leverages a "True Dark" foundation to allow code snippets and project visuals to pop. High-contrast typography and intentional use of the .NET purple accent create a focused environment that prioritizes content legibility and technical authority.

## Colors
The palette is rooted in deep blacks to ensure maximum contrast and energy efficiency on OLED displays. 

- **Primary & Secondary:** The .NET Purple spectrum is reserved for interactive elements, progress indicators, and primary call-to-actions.
- **Surface Strategy:** Use `#0F0F0F` for cards and section containers to create a subtle separation from the `#000000` canvas.
- **Accents:** Subtle purple gradients (from primary to secondary) should be applied to high-impact areas like hero headlines or primary button states.

## Typography
This design system utilizes **Inter** for all UI and prose elements to maintain a professional, neutral tone. To emphasize the developer focus, **JetBrains Mono** is introduced for labels, technology tags, and code snippets.

- **Headlines:** Use tight letter spacing and heavy weights to create a strong visual hierarchy.
- **Body:** Standardized at 16px for optimal long-form reading in project descriptions.
- **Labels:** All technical metadata (tags, dates, file paths) must use the monospaced font to signal "data" to the user.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to ensure code blocks and project grids maintain a structured, IDE-like feel.

- **Desktop (1200px+):** 12-column grid with 24px gutters.
- **Tablet (768px - 1199px):** 8-column grid with 20px gutters. Content should occupy 100% width with 40px side margins.
- **Mobile (<768px):** 4-column fluid grid. Section gaps should reduce to 64px to maintain momentum.
- **Vertical Rhythm:** Use the `stack` tokens for consistent spacing between headings, paragraphs, and components.

## Elevation & Depth
In this dark-mode system, depth is communicated through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows.

- **Level 0 (Base):** `#000000` for the main background.
- **Level 1 (Cards):** `#0F0F0F` with a 1px solid border of `#27272A`.
- **Level 2 (Dropdowns/Modals):** `#18181B` with a subtle 10% purple-tinted ambient shadow.
- **Interactions:** On hover, card borders should transition from neutral grey to the primary purple (`#512BD4`).

## Shapes
The shape language is "Soft" (0.25rem - 0.75rem). This maintains a balance between the precision of sharp edges and the modern accessibility of rounded corners.

- **Buttons & Tags:** Use `rounded-md` (4px) for a crisp, professional look.
- **Project Cards:** Use `rounded-lg` (8px) to soften the large surface areas.
- **Inputs:** Maintain `rounded-md` (4px) to align with standard developer tool interfaces.

## Components

### Navigation Bar
A fixed top-level container with a backdrop blur (12px). Use a thin bottom border (`#27272A`). Links should use `label-md` and transition to the primary purple on hover.

### Hero Section
Left-aligned layout. Headline uses `display` typography. A primary call-to-action button should feature a subtle gradient from `#512BD4` to `#6A42E5`.

### Project Cards
- **Structure:** Image/Thumbnail (top), Content area (bottom).
- **Tags:** Use `label-md` inside a small chip with a `#18181B` background and `#A1A1AA` text.
- **Action:** A "View Project" link with a trailing arrow icon that shifts right on hover.

### Skills Grid
A non-interactive grid of icons or technology names. Each item should be housed in a Level 1 container. Use monochrome icons that transition to their brand color only on hover.

### Input Fields
Dark backgrounds (`#000000`), subtle borders (`#27272A`). The focus state must use a 2px purple border with a soft outer glow of the same color.