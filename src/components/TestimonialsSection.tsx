
import React from 'react';
import { Star, User } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Arjun Gupta",
      credential: "JEE Mains 2025, Rank 2156",
      quote: "The Intellexa study pack was a game-changer for my JEE preparation. The chapter-wise PYQs and mindmaps helped me understand the pattern perfectly.",
    },
    {
      name: "Kavya Sharma",
      credential: "JEE Mains 2025, Rank 3487",
      quote: "Amazing study material! The instant digital delivery saved me so much time, and the study planner kept me on track throughout my preparation.",
    },
    {
      name: "Rohit Verma",
      credential: "JEE Mains 2025, Rank 4023",
      quote: "The detailed notes and formula sheets were incredibly helpful. I could revise quickly before the exam and felt confident on test day.",
    },
    {
      name: "Priya Singh",
      credential: "JEE Mains 2025, Rank 2789",
      quote: "The syllabus tracker ensured I didn't miss any important topics. The mindmaps made complex concepts so much easier to understand and remember.",
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasPartialStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} fill="#FFD700" stroke="#FFD700" className="h-6 w-6" />
      );
    }

    if (hasPartialStar) {
      stars.push(
        <div key="partial" className="relative">
          <Star className="h-6 w-6 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '80%' }}>
            <Star fill="#FFD700" stroke="#FFD700" className="h-6 w-6" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-6 w-6 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-intellexa-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Fresh 2025 JEE Success Stories</h2>
          <p className="section-subheading">
            See how our recent JEE Mains 2025 toppers achieved their dream ranks with Intellexa Study Pack.
          </p>
          
          {/* Single rating display */}
          <div className="flex items-center justify-center mt-8 mb-12">
            <div className="flex items-center">
              {renderStars(4.8)}
              <span className="ml-3 text-2xl font-bold text-gray-700">4.8/5</span>
            </div>
            <span className="ml-4 text-lg text-gray-600">Based on verified JEE 2025 results</span>
          </div>
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="bg-intellexa-blue/10 rounded-full p-2 mr-3">
                      <User className="h-6 w-6 text-intellexa-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-intellexa-dark">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.credential}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="relative -left-3 md:-left-6 top-0 mt-0 transform-none" />
          <CarouselNext className="relative -right-3 md:-right-6 top-0 mt-0 transform-none" />
        </Carousel>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700">
            Join the latest batch of successful JEE 2025 students who achieved their target ranks with Intellexa!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
