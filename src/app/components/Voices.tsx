import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface Story {
  id: number;
  name: string;
  age: number;
  location: string;
  quote: string;
  story: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: 'Andreas',
    age: 43,
    location: 'Berlin, Germany',
    quote: 'I used to think I had lost everything. But I found myself again.',
    story: 'Once a software engineer, now finding purpose in helping others navigate life on the streets. His kindness reminds me that our circumstances don\'t define our worth.'
  },
  {
    id: 2,
    name: 'Marie',
    age: 67,
    location: 'Lyon, France',
    quote: 'Every person I meet is fighting their own battle. We\'re all just doing our best.',
    story: 'A former nurse whose gentle care extends to everyone she meets. She taught me that compassion costs nothing and means everything.'
  },
  {
    id: 3,
    name: 'Jakub',
    age: 29,
    location: 'Prague, Czech Republic',
    quote: 'The sunrise reminds me I made it through another night. That\'s enough.',
    story: 'Escaped trauma at 16. Now he helps other young people find safer paths. His resilience gives me hope on difficult days.'
  },
  {
    id: 4,
    name: 'Sofia',
    age: 38,
    location: 'Barcelona, Spain',
    quote: 'My children see me trying. That\'s what matters.',
    story: 'A single mother navigating impossible challenges with grace. Her strength is a reminder that love persists through everything.'
  },
  {
    id: 5,
    name: 'Thomas',
    age: 55,
    location: 'Amsterdam, Netherlands',
    quote: 'Music brought me back to life when I thought I was lost forever.',
    story: 'Clean from addiction for 3 years. His guitar melodies fill the streets with beauty. Art heals in ways words cannot.'
  },
  {
    id: 6,
    name: 'Elena',
    age: 31,
    location: 'Vienna, Austria',
    quote: 'I\'m learning it\'s okay to not be okay. Healing isn\'t linear.',
    story: 'Navigating PTSD while advocating for better mental health support. Her courage to keep going inspires everyone around her.'
  }
];

export function Voices() {
  return (
    <section id="voices" className="py-20 px-4 bg-gradient-to-b from-teal-100 via-emerald-100 to-green-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-stone-800 mb-6">Beautiful Souls I've Met</h2>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            These people taught me about strength, kindness, and what it really means to be human.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/70 backdrop-blur-sm border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <Heart className="w-8 h-8 text-emerald-500 mb-4" />
                  <blockquote className="text-stone-700 italic mb-4 leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  <div className="mb-3">
                    <p className="text-stone-800">
                      {story.name}, {story.age}
                    </p>
                    <p className="text-sm text-stone-500">{story.location}</p>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{story.story}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center p-8 bg-gradient-to-r from-emerald-200 to-green-200 rounded-3xl border-2 border-emerald-300"
        >
          <p className="text-stone-800 mb-3 leading-relaxed font-medium">
            Every person here shared their story with trust and openness.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Their vulnerability is a gift. I hope their words touch your heart the way they touched mine.
          </p>
        </motion.div>
      </div>
    </section>
  );
}