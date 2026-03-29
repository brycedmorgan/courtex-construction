# CourTex Construction - Premium Marketing Website

Built with the **Kinetic Precision** design system - a sophisticated approach to athletic court construction branding that moves beyond typical industry templates.

## 🎯 Design Philosophy: "Kinetic Precision"

This design system embodies the intersection of **High-End Editorial** (think Vogue meets Nike Lab) with the precision engineering of professional athletic courts.

### Key Design Principles:

- **Intentional Asymmetry** - Breaking template conventions with sophisticated layouts
- **Action Green (#cbf749)** - High-impact accent color used sparingly for maximum effect  
- **Obsidian-green black (#05170c)** - Rich surface color with more depth than neutral black
- **"No-line" rule** - Using tonal shifts instead of 1px borders for elegant separation
- **Extreme typography contrast** - Space Grotesk display + Inter precision fonts

## 🛠 Technical Stack

- **11ty** - Static site generator for optimal performance
- **Nunjucks** - Templating engine for maintainable markup
- **Vanilla CSS** - Custom properties for theming, no frameworks
- **Progressive Enhancement** - Vanilla JS for interactive effects
- **Vercel Ready** - Optimized for deployment

## ✨ Interactive Effects (Implemented)

All signature GullStack interactive elements are included:

1. **Rotating gradient hero** - Background animation cycling brand colors
2. **Gradient shimmer buttons** - Light sweep animation on CTAs  
3. **Hover lift cards** - translateY + box-shadow + border scale animations
4. **Image zoom breaks** - Slow 8s scale transforms on hover
5. **Scroll fade-in** - IntersectionObserver with staggered delays
6. **Trusted-by marquee** - Seamless scrolling client logos
7. **Nav scroll effect** - Shadow appears on scroll
8. **Step number pulse** - Box-shadow animation on process steps
9. **FAQ accordion** - Native `<details>` with rotating plus icons
10. **Mobile nav toggle** - Smooth slide-in mobile navigation

## 📱 Mobile-First & Accessible

- Responsive breakpoint at 768px
- Touch-friendly 44x44px tap targets  
- `prefers-reduced-motion` support
- Semantic HTML with proper heading hierarchy
- Visible focus states and keyboard navigation
- Screen reader optimized

## 🔍 SEO & AEO Optimized

- **Schema markup** - Organization, FAQ, and breadcrumb schemas
- **Dynamic sitemap** - Auto-generated from collections
- **Meta optimization** - Unique titles/descriptions under character limits
- **brand-facts.json** - Machine-readable brand data for LLM crawlers
- **Canonical URLs** - Proper canonicalization on every page
- **robots.txt** - Search engine guidance

## 🎨 Content Strategy

Built using **StoryBrand Framework**:
- Customer is the hero, CourTex is the guide
- Problem-focused messaging (uneven surfaces, premature wear, contractor mistakes)
- Clear 3-step process (Quote → Design & Build → Enjoy)
- Bold CTAs throughout
- Internal problem solutions (frustration → confidence, risk → security)

## 📁 File Structure

```
courtex-site/
├── .eleventy.js          # 11ty configuration
├── package.json          # Dependencies and scripts
├── src/
│   ├── _includes/        # Shared templates
│   │   ├── base.njk     # Main layout (uses {{ content | safe }})
│   │   ├── nav.njk      # Navigation with mobile toggle
│   │   └── footer.njk   # Footer with GullStack credit
│   ├── _data/           # Site configuration
│   │   └── site.json    # Global site variables
│   ├── css/             # Kinetic Precision styles
│   │   └── style.css    # Complete design system
│   ├── js/              # Interactive functionality
│   │   └── main.js      # Scroll observers, nav toggle, animations
│   ├── images/          # Optimized assets
│   ├── index.njk        # Homepage (StoryBrand structure)
│   ├── services.njk     # Services overview
│   ├── sitemap.njk      # Dynamic sitemap generation
│   ├── robots.txt       # Search engine directives
│   └── brand-facts.json # Machine-readable brand data
└── _site/               # Generated static files
```

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Development server with hot reload
npm run serve  # Available at http://localhost:8083

# Production build
npm run build
```

## 🌟 Quality Standards Met

✅ **All interactive effects working**  
✅ **Real Courtex content and imagery**  
✅ **Mobile navigation tested**  
✅ **FAQ accordion functionality**  
✅ **Scroll-based animations**  
✅ **Schema markup implemented**  
✅ **Performance optimized**  
✅ **Accessibility compliant**  
✅ **StoryBrand messaging framework**  
✅ **GullStack signature interactions**

## 🎯 Conversion Optimization

- **Multiple CTAs** - Phone and quote buttons in nav + throughout content
- **Social proof** - Client testimonials and trusted-by marquee  
- **Risk reversal** - Free quote positioning
- **Comparison table** - Clear differentiation vs. competitors
- **Process clarity** - Simple 3-step approach reduces friction
- **Mobile CTAs** - Tap-to-call optimized for mobile

## 📋 Content Sections

**Homepage Structure:**
1. Hero with dual CTAs
2. Trusted-by marquee  
3. Problem identification (3 pain points)
4. Features grid (6 core benefits)
5. Image break
6. Process steps (3-step numbered)
7. Comparison table (vs. competitors)
8. Image break  
9. Customer testimonials
10. FAQ accordion (6 questions)
11. Image break
12. Email capture CTA

**Services page** showcases individual service categories with dedicated CTAs.

## 🏆 Results

This implementation transforms CourTex from a typical construction website to a **premium athletic performance brand** that commands higher prices and attracts quality clients. The Kinetic Precision design system positions them as the Nike Lab of court construction.

---

*Built with precision by GullStack - Premium Marketing Sites*