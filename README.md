# Unspoken Truths UK - Healing Journey Website

A compassionate, modern web platform documenting a transformative journey across Europe, exploring homelessness, mental health, and healing through nature.

## 🌿 About

This website serves as a digital companion to the Unspoken Truths UK journey - a story of personal healing from childhood trauma while documenting the lives and stories of homeless individuals across Europe. The platform emphasizes:

- Personal healing through nature and movement
- Amplifying voices of the unheard
- Data and insights on homelessness in Europe
- Inspiration and hope for those struggling with trauma and mental health

## ✨ Features

- **Responsive Design**: Beautiful on all devices, from mobile to desktop
- **Sage Green Color Scheme**: Calming, nature-inspired palette perfect for the message
- **Smooth Animations**: Engaging Motion (Framer Motion) animations throughout
- **Social Media Integration**: TikTok, YouTube, Instagram, Facebook
- **Video Embeds**: YouTube Shorts and TikTok content integration
- **Reading Progress Indicator**: Visual feedback as visitors scroll
- **Scroll-to-Top Button**: Easy navigation for long pages
- **Accessible Navigation**: Smooth scrolling between sections

## 🎨 Design Philosophy

The website uses soft sage green variations (emerald, green, teal) with warm earth tones to create a safe, welcoming space for visitors dealing with trauma and mental health challenges. Every design choice prioritizes:

- **Calmness**: Gentle gradients and soft colors
- **Accessibility**: Clear text, good contrast, easy navigation
- **Compassion**: Language that speaks directly to those who are hurting
- **Hope**: Uplifting messaging without toxic positivity

## 🛠️ Tech Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4.1** - Styling
- **Motion (Framer Motion)** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons
- **Recharts** - Data visualization

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Hero.tsx              # Landing section
│   │   ├── Story.tsx             # Personal story
│   │   ├── Journey.tsx           # Travel timeline
│   │   ├── ShortsGallery.tsx    # TikTok & YouTube Shorts
│   │   ├── Voices.tsx            # Stories from the ground
│   │   ├── DataInsights.tsx     # Statistics & findings
│   │   ├── Wellness.tsx          # Nature & healing
│   │   ├── MediaGallery.tsx     # Photos & videos
│   │   ├── SocialMedia.tsx      # Social links
│   │   ├── Navigation.tsx        # Main navigation
│   │   ├── Footer.tsx            # Footer section
│   │   ├── ReadingProgress.tsx  # Progress bar
│   │   ├── ScrollToTop.tsx      # Back to top button
│   │   └── ui/                   # Reusable UI components
│   └── App.tsx                   # Main app component
└── styles/                       # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/unspoken-truths-uk.git
cd unspoken-truths-uk
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
# or
pnpm build
```

## 🎥 Adding Your Content

### YouTube Shorts

1. Open `/src/app/components/ShortsGallery.tsx`
2. Find the `youtubeShorts` array (line 5)
3. Replace placeholder IDs with your actual YouTube Short IDs
   - From URL `youtube.com/shorts/ABC123`, use `ABC123`

```typescript
const youtubeShorts = [
  'YOUR_FIRST_SHORT_ID',
  'YOUR_SECOND_SHORT_ID', 
  'YOUR_THIRD_SHORT_ID',
];
```

### TikTok Videos

1. Go to your TikTok video
2. Click **Share** → **Embed**
3. Copy the embed code
4. Open `/src/app/components/ShortsGallery.tsx`
5. Replace the placeholder divs with your TikTok embed code

### Social Media Links

Social media links are already configured in `/src/app/components/SocialMedia.tsx`:
- TikTok: https://www.tiktok.com/@unspokentruthsuk
- YouTube: https://www.youtube.com/@UnspokenTruthsUK
- Instagram: @unspokentruthsuk
- Facebook: Unspoken Truths UK

Update these if your handles change.

### Adding Photos

1. Replace images in `/src/app/components/MediaGallery.tsx`
2. Update the `mediaItems` array with your actual photos and descriptions

### Journey Locations

Update your travel stops in `/src/app/components/Journey.tsx`:
```typescript
const journeyStops: JourneyStop[] = [
  {
    id: 1,
    country: 'Your Country',
    city: 'Your City',
    date: 'Month Year',
    description: 'Your experience...',
    image: 'your-image-url',
    latitude: 0.0000,
    longitude: 0.0000
  },
  // Add more stops...
];
```

## 🎨 Customizing Colors

The sage green color scheme is defined using Tailwind classes. Main colors used:

- `emerald-100` to `emerald-600` - Primary sage green
- `green-100` to `green-600` - Secondary green
- `teal-100` to `teal-600` - Accent teal
- `stone-50` to `stone-900` - Text and neutrals

To adjust, search and replace color classes throughout the components.

## 📱 Sections Overview

1. **Hero** - Opening statement with call-to-action
2. **Story** - Your personal journey and mission
3. **Journey** - Geographic timeline of travels
4. **Shorts Gallery** - TikTok and YouTube Shorts embeds
5. **Voices** - Stories from people you've met
6. **Data & Insights** - Statistics and findings
7. **Wellness** - Nature as medicine philosophy
8. **Media Gallery** - Photos and longer videos
9. **Social Media** - Connect on all platforms
10. **Footer** - Contact and links

## 🤝 Contributing

This is a personal project, but if you'd like to suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

© 2024 Unspoken Truths UK. All rights reserved.

All stories and testimonials shared with consent and respect for individuals' privacy.

## 💚 Support

If you're in crisis or need support:
- **UK**: Samaritans - 116 123
- **Crisis Text Line**: Text HOME to 741741
- **Mental Health Support**: NHS 111

## 📧 Contact

- **Email**: hello@healingjourney.org
- **TikTok**: [@unspokentruthsuk](https://www.tiktok.com/@unspokentruthsuk)
- **YouTube**: [@UnspokenTruthsUK](https://www.youtube.com/@UnspokenTruthsUK)

---

*"You are not alone in your healing. Nature is waiting. Hope is real."*
