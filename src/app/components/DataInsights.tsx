import { motion } from 'motion/react';
import { Users, Heart, Home, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const stats = [
  {
    icon: Users,
    value: '700K+',
    label: 'People Without Shelter',
    description: 'Across Europe, searching for safety',
    gradient: 'from-green-200 to-green-100'
  },
  {
    icon: Heart,
    value: '1 in 3',
    label: 'Experience Trauma',
    description: 'Mental health challenges are common',
    gradient: 'from-emerald-200 to-emerald-100'
  },
  {
    icon: Home,
    value: '85%',
    label: 'Want Stable Housing',
    description: 'Seeking a place to call home',
    gradient: 'from-stone-200 to-stone-100'
  },
  {
    icon: Sparkles,
    value: 'Hope',
    label: 'Is Always Present',
    description: 'Even in the hardest moments',
    gradient: 'from-teal-200 to-teal-100'
  }
];

export function DataInsights() {
  return (
    <section id="data" className="py-20 px-4 bg-gradient-to-b from-emerald-50 via-green-50 to-stone-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-stone-700 mb-6">Understanding the Reality</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Behind every number is a person. Behind every person is a story worth knowing.
          </p>
        </motion.div>

        {/* Key Statistics - Simplified and softer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-green-100 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-full mb-4`}>
                    <stat.icon className="w-8 h-8 text-stone-600" />
                  </div>
                  <div className="text-3xl text-stone-800 mb-2">{stat.value}</div>
                  <div className="text-stone-700 mb-2">{stat.label}</div>
                  <p className="text-sm text-stone-500 leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Gentle Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100 shadow-lg"
        >
          <h3 className="text-stone-700 mb-6 text-center">What I've Learned</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🏡</span>
                <div>
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Housing is the foundation.</strong> Without stable shelter, healing from trauma becomes exponentially harder.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">💚</span>
                <div>
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Mental health matters.</strong> Most people I met were dealing with trauma, anxiety, or depression—often without access to support.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🌱</span>
                <div>
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Nature heals.</strong> Access to green spaces, even temporarily, made a visible difference in people's wellbeing.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🤝</span>
                <div>
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Community is everything.</strong> The people supporting each other on the streets showed me what true compassion looks like.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">✨</span>
                <div>
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Everyone has a story.</strong> No one chooses this life. Circumstances, trauma, and bad luck can happen to anyone.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🌅</span>
                <div>
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Hope persists.</strong> Even in the darkest situations, the human spirit finds ways to keep going.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center p-8 bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 rounded-3xl"
        >
          <p className="text-stone-700 italic leading-relaxed">
            "Data tells us the scale of the challenge. But stories remind us why it matters. 
            Both are important. Both deserve our attention."
          </p>
        </motion.div>
      </div>
    </section>
  );
}