import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Journey } from './components/Journey';
import { Voices } from './components/Voices';
import { DataInsights } from './components/DataInsights';
import { Wellness } from './components/Wellness';
import { ShortsGallery } from './components/ShortsGallery';
import { MediaGallery } from './components/MediaGallery';
import { SocialMedia } from './components/SocialMedia';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ReadingProgress } from './components/ReadingProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />
      <Hero />
      <Story />
      <Journey />
      <ShortsGallery />
      <Voices />
      <DataInsights />
      <Wellness />
      <MediaGallery />
      <SocialMedia />
      <Footer />
      <ScrollToTop />
    </div>
  );
}