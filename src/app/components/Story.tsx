import { motion } from 'motion/react';
import { Heart, Footprints, Sunrise } from 'lucide-react';

export function Story() {
  return (
    <section id="story" className="py-20 px-4 bg-gradient-to-b from-emerald-50 via-green-50 to-stone-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-stone-700 mb-6">My Story</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            A journey that began with pain transformed into a path of hope, 
            connection, and gentle healing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1728125771015-68c44a4819cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsaW5nJTIwbmF0dXJlJTIwc3Vuc2V0fGVufDF8fHx8MTc2NjE2Mjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Healing journey"
              className="rounded-3xl shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-stone-700 leading-relaxed">
              I know what it feels like to be trapped. Childhood trauma left wounds that felt 
              impossible to heal. Traditional paths didn't work for me, so I chose something different—
              walking, moving, being in nature.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Along the way, I met incredible people who shared their stories with me. 
              People who were also navigating pain, finding their own paths to healing. 
              Their courage inspired me to share this journey with you.
            </p>
            <p className="text-stone-700 leading-relaxed">
              If you're reading this and feeling stuck, please know—there is hope. 
              Healing doesn't always look the way we expect. Sometimes it's as simple 
              as taking a walk outside, breathing fresh air, and remembering you're not alone.
            </p>
          </motion.div>
        </div>

        {/* Three Pillars - Softer approach */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-green-100"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-200 to-green-100 rounded-full mb-6">
              <Heart className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="mb-3 text-green-700">Gentle Healing</h3>
            <p className="text-stone-600 leading-relaxed">
              Finding peace through nature, movement, and self-compassion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-emerald-100"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-full mb-6">
              <Footprints className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="mb-3 text-emerald-700">Shared Stories</h3>
            <p className="text-stone-600 leading-relaxed">
              Listening to and learning from others on similar journeys
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-stone-200"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-stone-200 to-stone-100 rounded-full mb-6">
              <Sunrise className="w-10 h-10 text-stone-600" />
            </div>
            <h3 className="mb-3 text-stone-700">New Beginnings</h3>
            <p className="text-stone-600 leading-relaxed">
              Every day is a fresh start, a chance to try again
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}