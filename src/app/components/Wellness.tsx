import { motion } from 'motion/react';
import { Trees, Waves, Mountain, Sun, Wind, Footprints } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const wellnessPrinciples = [
  {
    icon: Trees,
    title: 'Time in Nature',
    description: 'Even 20 minutes among trees can calm your nervous system and quiet anxious thoughts.',
    gradient: 'from-green-200 to-green-100',
    color: 'text-green-600'
  },
  {
    icon: Footprints,
    title: 'Gentle Movement',
    description: 'Walking, stretching, or simply standing outside. You don\'t need to push hard—just move.',
    gradient: 'from-emerald-200 to-emerald-100',
    color: 'text-emerald-600'
  },
  {
    icon: Mountain,
    title: 'Small Challenges',
    description: 'Climbing a small hill reminds you that you\'re stronger than you think. Start where you are.',
    gradient: 'from-teal-200 to-teal-100',
    color: 'text-teal-600'
  },
  {
    icon: Sun,
    title: 'Morning Sunlight',
    description: 'Sunrise is free therapy. Natural light helps regulate your mood and sleep.',
    gradient: 'from-amber-200 to-amber-100',
    color: 'text-amber-600'
  },
  {
    icon: Wind,
    title: 'Breathe Deeply',
    description: 'Fresh air and conscious breathing remind your body it\'s safe. You\'re okay in this moment.',
    gradient: 'from-cyan-200 to-cyan-100',
    color: 'text-cyan-600'
  },
  {
    icon: Waves,
    title: 'Water & Sound',
    description: 'Find a river, lake, or fountain. Water sounds are naturally soothing to our nervous system.',
    gradient: 'from-blue-200 to-blue-100',
    color: 'text-blue-600'
  }
];

export function Wellness() {
  return (
    <section id="wellness" className="py-20 px-4 bg-gradient-to-b from-stone-50 via-emerald-50 to-green-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-stone-700 mb-6">Nature as Medicine</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            You don't need money or special equipment. Nature is waiting for you, 
            ready to hold you gently as you heal.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1762770665765-de232b512652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBtZWRpdGF0aW9uJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzY2MTYyOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Nature healing"
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Wellness Principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {wellnessPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/70 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-300 rounded-2xl">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${principle.gradient} rounded-full mb-4`}>
                    <principle.icon className={`w-8 h-8 ${principle.color}`} />
                  </div>
                  <h3 className="mb-3 text-stone-800">{principle.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Personal Testimony */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="mb-6 text-stone-800 text-center">Why This Works</h3>
          <div className="space-y-6 text-stone-700 leading-relaxed">
            <p>
              When you're dealing with trauma or feeling trapped in your mental health struggles, 
              traditional therapy isn't always accessible or effective on its own. Nature offers 
              something different—something ancient and instinctive.
            </p>
            <p>
              Studies show that time in nature reduces stress hormones, lowers blood pressure, 
              and helps regulate emotions. But beyond the science, there's something deeper: 
              nature reminds us we're part of something bigger. Our pain matters, but it doesn't 
              define the whole universe.
            </p>
            <p>
              Movement—especially walking—is a form of meditation. When you walk, your body 
              processes emotions and releases tension. You're literally moving through your pain, 
              one step at a time. It won't fix everything, but it helps. It really does.
            </p>
            <div className="pt-6 border-t border-green-200">
              <p className="italic text-center">
                "Start small. A walk around the block. Sitting under a tree. Watching the clouds. 
                You don't have to hike mountains or travel across Europe. Just step outside. 
                Nature will meet you where you are."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Gentle Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-green-100">
            <h3 className="text-stone-800 mb-4">Your Journey Starts Now</h3>
            <p className="text-stone-600 mb-4 leading-relaxed">
              If you're feeling stuck, overwhelmed, or trapped—please know you're not alone. 
              Healing is possible, even when it doesn't feel like it.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Take one small step today. Just one. That's enough. 💚
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}