import { motion } from 'motion/react';
import { Play, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useState } from 'react';

interface MediaItem {
  id: number;
  type: 'video' | 'image';
  title: string;
  description: string;
  thumbnail: string;
  embedUrl?: string;
  imageUrl?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    title: 'Walking Through the Alps',
    description: 'A peaceful morning hike that reminded me why I started this journey',
    thumbnail: 'https://images.unsplash.com/photo-1642633830811-9bc5c5dc5360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGpvdXJuZXl8ZW58MXx8fHwxNzY2MTYyOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    // Replace with actual YouTube embed URL: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
    embedUrl: ''
  },
  {
    id: 2,
    type: 'video',
    title: 'Stories from Barcelona',
    description: 'Meeting Sofia and hearing her journey of resilience',
    thumbnail: 'https://images.unsplash.com/photo-1715368139341-362fc0364e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHklMjBzdHJlZXR8ZW58MXx8fHwxNzY2MTMxMjM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    embedUrl: ''
  },
  {
    id: 3,
    type: 'video',
    title: 'Nature as Medicine',
    description: 'Why spending time outdoors changed everything for my mental health',
    thumbnail: 'https://images.unsplash.com/photo-1762770665765-de232b512652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBtZWRpdGF0aW9uJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzY2MTYyOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    embedUrl: ''
  },
  {
    id: 4,
    type: 'image',
    title: 'Sunrise in Lyon',
    description: 'The moment I realized I was healing',
    imageUrl: 'https://images.unsplash.com/photo-1728125771015-68c44a4819cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsaW5nJTIwbmF0dXJlJTIwc3Vuc2V0fGVufDF8fHx8MTc2NjE2Mjk5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnail: 'https://images.unsplash.com/photo-1728125771015-68c44a4819cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsaW5nJTIwbmF0dXJlJTIwc3Vuc2V0fGVufDF8fHx8MTc2NjE2Mjk5OHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    type: 'video',
    title: 'Community on the Streets',
    description: 'How people support each other in the most difficult circumstances',
    thumbnail: 'https://images.unsplash.com/photo-1745945665082-a52b4d42a7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFja2luZyUyMGV1cm9wZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjYxNjI5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    embedUrl: ''
  },
  {
    id: 6,
    type: 'image',
    title: 'The Path Forward',
    description: 'Every step is progress',
    imageUrl: 'https://images.unsplash.com/photo-1745945665082-a52b4d42a7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFja2luZyUyMGV1cm9wZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjYxNjI5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnail: 'https://images.unsplash.com/photo-1745945665082-a52b4d42a7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFja2luZyUyMGV1cm9wZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjYxNjI5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function MediaGallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <section id="media" className="py-20 px-4 bg-gradient-to-b from-sage-100 via-emerald-50 to-green-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-stone-800 mb-6">Journey in Pictures & Videos</h2>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Visual stories from the road. Raw, honest moments of struggle, beauty, and hope.
          </p>
        </motion.div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card 
                className="group bg-white/80 backdrop-blur-sm border-green-200 hover:border-green-400 hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedMedia(item)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-white" />
                      </div>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-stone-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Video Embed Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-200 shadow-xl">
            <h3 className="text-stone-800 mb-6 text-center">Featured: My Journey So Far</h3>
            <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center overflow-hidden">
              {/* Replace this div with an actual YouTube iframe embed */}
              <div className="text-center p-8">
                <Play className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-stone-600">
                  Video embed placeholder
                </p>
                <p className="text-sm text-stone-500 mt-2">
                  Replace with: &lt;iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"&gt;&lt;/iframe&gt;
                </p>
              </div>
              {/* 
              Example YouTube embed:
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              */}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for viewing media (optional enhancement) */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-stone-100">
              {selectedMedia.type === 'video' && selectedMedia.embedUrl ? (
                <iframe
                  className="w-full h-full"
                  src={selectedMedia.embedUrl}
                  title={selectedMedia.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={selectedMedia.imageUrl || selectedMedia.thumbnail}
                  alt={selectedMedia.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-stone-800 mb-2">{selectedMedia.title}</h3>
              <p className="text-stone-600">{selectedMedia.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
