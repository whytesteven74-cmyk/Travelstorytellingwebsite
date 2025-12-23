import { Heart, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-emerald-100 via-green-100 to-teal-100 py-16 px-4 border-t-4 border-emerald-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-stone-700 mb-4">A Message of Hope</h3>
            <p className="text-stone-600 mb-4 leading-relaxed">
              This journey is for anyone feeling lost, stuck, or struggling. 
              You deserve healing. You deserve peace. You deserve to know you're not alone.
            </p>
            <div className="flex items-center gap-2 text-stone-600">
              <Heart className="w-4 h-4 text-green-500" />
              <span>Made with love and hope</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-stone-700 mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#story" className="text-stone-600 hover:text-green-600 transition-colors">
                  My Story
                </a>
              </li>
              <li>
                <a href="#journey" className="text-stone-600 hover:text-green-600 transition-colors">
                  The Journey
                </a>
              </li>
              <li>
                <a href="#voices" className="text-stone-600 hover:text-green-600 transition-colors">
                  Stories of Hope
                </a>
              </li>
              <li>
                <a href="#data" className="text-stone-600 hover:text-green-600 transition-colors">
                  Understanding the Reality
                </a>
              </li>
              <li>
                <a href="#wellness" className="text-stone-600 hover:text-green-600 transition-colors">
                  Nature as Medicine
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-stone-700 mb-4">Connect</h3>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Want to share your story or journey? I'd love to hear from you.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-stone-600">
                <Mail className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm text-stone-500">Reach out</p>
                  <a href="mailto:hello@healingjourney.org" className="hover:text-green-600 transition-colors">
                    hello@healingjourney.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2 text-stone-600">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm text-stone-500">Currently wandering</p>
                  <p>Somewhere in Europe 🌍</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-green-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-stone-500 text-sm">
              © {currentYear} Healing Journey. All stories shared with consent and respect.
            </p>
            <p className="text-stone-500 text-sm">
              If you're in crisis, please reach out for professional help. You matter. 💚
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}