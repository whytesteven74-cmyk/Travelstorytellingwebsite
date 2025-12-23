import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function ShortsGallery() {
  // These are placeholder video IDs - replace with your actual YouTube Shorts IDs
  // To get the ID: from a YouTube Short URL like youtube.com/shorts/ABC123, the ID is "ABC123"
  const youtubeShorts = [
    'dQw4w9WgXcQ', // Replace with your actual Short ID
    'dQw4w9WgXcQ', // Replace with your actual Short ID
    'dQw4w9WgXcQ', // Replace with your actual Short ID
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 via-emerald-100 to-teal-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-stone-800 mb-6">Latest from the Journey</h2>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Short moments, honest conversations, and real experiences shared on TikTok and YouTube Shorts
          </p>
        </motion.div>

        {/* TikTok Embed Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-stone-800 mb-8 text-center">From TikTok</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* TikTok Embed 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border-2 border-emerald-200">
              <div className="aspect-[9/16] bg-gradient-to-br from-cyan-100 to-pink-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <Play className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <p className="text-stone-700 mb-2">TikTok Embed</p>
                  <p className="text-sm text-stone-500">
                    Paste TikTok embed code here
                  </p>
                </div>
                {/* 
                To embed a TikTok video:
                1. Go to your TikTok video
                2. Click Share → Embed
                3. Copy the embed code
                4. Replace this div with the <blockquote> code TikTok provides
                
                Example structure:
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@unspokentruthsuk/video/YOUR_VIDEO_ID" 
                  data-video-id="YOUR_VIDEO_ID" 
                  style={{maxWidth: '605px', minWidth: '325px'}}
                >
                  ...TikTok embed code...
                </blockquote>
                <script async src="https://www.tiktok.com/embed.js"></script>
                */}
              </div>
            </div>

            {/* TikTok Embed 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border-2 border-emerald-200">
              <div className="aspect-[9/16] bg-gradient-to-br from-cyan-100 to-pink-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <Play className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <p className="text-stone-700 mb-2">TikTok Embed</p>
                  <p className="text-sm text-stone-500">
                    Paste TikTok embed code here
                  </p>
                </div>
              </div>
            </div>

            {/* TikTok Embed 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border-2 border-emerald-200">
              <div className="aspect-[9/16] bg-gradient-to-br from-cyan-100 to-pink-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <Play className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <p className="text-stone-700 mb-2">TikTok Embed</p>
                  <p className="text-sm text-stone-500">
                    Paste TikTok embed code here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* YouTube Shorts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-stone-800 mb-8 text-center">YouTube Shorts</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {youtubeShorts.map((videoId, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border-2 border-red-200 hover:border-red-400 transition-all duration-300"
              >
                <div className="aspect-[9/16]">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube Short ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/@UnspokenTruthsUK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5" />
              Watch More on YouTube
            </a>
          </div>
        </motion.div>

        {/* Visit TikTok CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.tiktok.com/@unspokentruthsuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-cyan-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            Follow on TikTok
          </a>
        </motion.div>
      </div>
    </section>
  );
}
