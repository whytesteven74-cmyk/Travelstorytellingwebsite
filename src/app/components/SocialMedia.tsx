import { motion } from 'motion/react';
import { Instagram, Youtube, Facebook, Mail, MessageCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const socialLinks = [
  {
    name: 'TikTok',
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    handle: '@unspokentruthsuk',
    url: 'https://www.tiktok.com/@unspokentruthsuk',
    description: 'Raw, honest moments from the journey',
    gradient: 'from-cyan-400 to-pink-500',
    bgGradient: 'from-cyan-100 to-pink-100'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    handle: '@UnspokenTruthsUK',
    url: 'https://www.youtube.com/@UnspokenTruthsUK',
    description: 'Video stories & shorts from the road',
    gradient: 'from-red-500 to-red-600',
    bgGradient: 'from-red-100 to-red-200'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    handle: '@unspokentruthsuk',
    url: 'https://instagram.com/unspokentruthsuk',
    description: 'Daily moments & updates',
    gradient: 'from-pink-400 to-purple-400',
    bgGradient: 'from-pink-100 to-purple-100'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    handle: 'Unspoken Truths UK',
    url: 'https://facebook.com/unspokentruthsuk',
    description: 'Community & longer updates',
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-100 to-blue-200'
  }
];

export function SocialMedia() {
  return (
    <section id="connect" className="py-20 px-4 bg-gradient-to-b from-emerald-100 via-green-100 to-sage-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-stone-800 mb-6">Let's Stay Connected</h2>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Follow along on this journey. Share your own story. 
            Together, we can build a community of healing and hope.
          </p>
        </motion.div>

        {/* Social Media Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-white/80 backdrop-blur-sm border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${social.bgGradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {typeof social.icon === 'function' ? (
                        <div className={`bg-gradient-to-br ${social.gradient} bg-clip-text`} style={{ color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                          <social.icon />
                        </div>
                      ) : (
                        <social.icon className="w-8 h-8" style={{ 
                          background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent'
                        }} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-stone-800 mb-1">{social.name}</h3>
                      <p className="text-green-600 mb-1">{social.handle}</p>
                      <p className="text-sm text-stone-600">{social.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>

        {/* Newsletter/Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white mb-3">Share Your Story With Me</h3>
              <p className="text-green-50 leading-relaxed mb-4">
                If you're on your own healing journey, or if you have a story to share, 
                I'd love to hear from you. Every voice matters.
              </p>
              <a 
                href="mailto:hello@healingjourney.org"
                className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full hover:bg-green-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}