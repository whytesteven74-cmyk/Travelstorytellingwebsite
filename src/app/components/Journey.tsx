import { motion } from 'motion/react';
import { MapPin, Calendar } from 'lucide-react';

interface JourneyStop {
  id: number;
  country: string;
  city: string;
  date: string;
  description: string;
  image: string;
  latitude: number;
  longitude: number;
}

const journeyStops: JourneyStop[] = [
  {
    id: 1,
    country: 'Spain',
    city: 'Barcelona',
    date: 'March 2024',
    description: 'The journey began here. The warmth of the Mediterranean sun reminded me I was still alive, still capable of feeling something good.',
    image: 'https://images.unsplash.com/photo-1715368139341-362fc0364e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHklMjBzdHJlZXR8ZW58MXx8fHwxNzY2MTMxMjM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    latitude: 41.3851,
    longitude: 2.1734
  },
  {
    id: 2,
    country: 'France',
    city: 'Lyon',
    date: 'April 2024',
    description: 'Walking along the Rhône taught me to just keep moving. One step, then another. That\'s all healing is sometimes.',
    image: 'https://images.unsplash.com/photo-1642633830811-9bc5c5dc5360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGpvdXJuZXl8ZW58MXx8fHwxNzY2MTYyOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    latitude: 45.7640,
    longitude: 4.8357
  },
  {
    id: 3,
    country: 'Switzerland',
    city: 'Interlaken',
    date: 'May 2024',
    description: 'The mountains held me gently. Their vastness made my pain feel smaller, more manageable. Nature has a way of putting things in perspective.',
    image: 'https://images.unsplash.com/photo-1762770665765-de232b512652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBtZWRpdGF0aW9uJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzY2MTYyOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    latitude: 46.6863,
    longitude: 7.8632
  },
  {
    id: 4,
    country: 'Germany',
    city: 'Berlin',
    date: 'June 2024',
    description: 'Here I found community. People who understood without me having to explain. Sometimes just being seen is enough.',
    image: 'https://images.unsplash.com/photo-1745945665082-a52b4d42a7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFja2luZyUyMGV1cm9wZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjYxNjI5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    latitude: 52.5200,
    longitude: 13.4050
  }
];

export function Journey() {
  return (
    <section id="journey" className="py-20 px-4 bg-gradient-to-b from-stone-50 via-emerald-50 to-green-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-stone-700 mb-6">The Path I Walked</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Each place taught me something new about healing, hope, and myself.
          </p>
        </motion.div>

        <div className="space-y-16">
          {journeyStops.map((stop, index) => (
            <motion.div
              key={stop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-green-100"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={stop.image}
                    alt={`${stop.city}, ${stop.country}`}
                    className="rounded-2xl shadow-md w-full h-64 object-cover"
                  />
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-2 text-emerald-600 mb-2">
                    <MapPin className="w-5 h-5" />
                    <span>{stop.country}</span>
                  </div>
                  <h3 className="mb-2 text-stone-800">{stop.city}</h3>
                  <div className="flex items-center gap-2 text-stone-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{stop.date}</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">{stop.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center p-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl"
        >
          <p className="text-stone-700 italic leading-relaxed">
            The journey continues, one gentle step at a time... 
            And maybe, if you feel called to, you can start your own journey too.
          </p>
        </motion.div>
      </div>
    </section>
  );
}