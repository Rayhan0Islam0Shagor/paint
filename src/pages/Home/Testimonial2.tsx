'use client';

import Container from '@/components/Container';
import { MoveLeft, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const testimonials = [
  {
    img: '/assets/testimonial.png',
    text: 'Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.',
    name: 'Holly Davidson',
  },
  {
    img: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl nec velit tempor venenatis sed vitae odio.',
    name: 'John Smith',
  },
  {
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    text: 'Phasellus gravida semper nisi. Nullam vel sem. In hac habitasse platea dictumst.',
    name: 'Sarah Lee',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

const Testimonial2 = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const next = () => {
    setIndex(([prevIndex]) => [
      (prevIndex + 1) % testimonials.length,
      1, // direction right
    ]);
  };

  const prev = () => {
    setIndex(([prevIndex]) => [
      (prevIndex - 1 + testimonials.length) % testimonials.length,
      -1, // direction left
    ]);
  };

  const { img, text, name } = testimonials[index];

  return (
    <div className="absolute w-full -bottom-[350px] md:-bottom-[200px] z-20 overflow-hidden px-4">
      <Container className="relative max-w-[1650px] bg-white py-12 px-7 md:px-14 w-full rounded-[100px]">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="shrink-0 size-full md:max-w-[472px] max-h-[272px] max-w-[272px] md:max-h-[472px] rounded-full overflow-hidden">
            <motion.img
              key={img}
              src={img}
              alt="testimonial"
              className="size-full object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Text */}
          <div className="flex-1 overflow-hidden text-center md:text-start flex flex-col items-center md:items-start justify-center space-y-6">
            <h4 className="text-3xl md:text-[50px] font-bold text-foreground">
              What our <br className="md:hidden" /> customers thought?
            </h4>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="space-y-2"
              >
                <p>{text}</p>
                <span className="text-2xl font-bold">{name}</span>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4">
              <button onClick={prev} className="cursor-pointer">
                <MoveLeft className="text-foreground" />
              </button>
              <button onClick={next} className="cursor-pointer">
                <MoveRight className="text-website-yellow" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial2;
