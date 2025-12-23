import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById('story');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100 via-green-50 to-teal-50">
      {/* Soft Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-300 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block mb-4">
            <span className="text-sm tracking-widest text-emerald-600 uppercase font-semibold">A Journey of Hope</span>
          </div>
          
          <h1 className="text-stone-900 mb-6 leading-relaxed">
            You Are Not Alone in Your Healing
          </h1>
          
          <p className="text-stone-700 text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            If you're feeling trapped by trauma or struggling with mental health, 
            this is a gentle reminder that healing is possible. Nature is waiting. 
            Hope is real.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={scrollToContent}
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white border-0 rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
            >
              Begin the Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-emerald-500 text-stone-800 hover:bg-emerald-50 rounded-full px-8"
            >
              Read Stories of Hope
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={scrollToContent}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-emerald-600" />
      </motion.div>
    </section>
  );
}