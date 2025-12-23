import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Journey } from './components/Journey';
import { Voices } from './components/Voices';
import { DataInsights } from './components/DataInsights';
import { Wellness } from './components/Wellness';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Story />
      <Journey />
      <Voices />
      <DataInsights />
      <Wellness />
      <Footer />
    </div>
  );
}
