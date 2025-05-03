
import React from 'react';
import { Star, User } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rohan Mehta",
      credential: "JEE Advanced 2023, Rank 1245",
      quote: "The Intellexa study pack completely transformed my JEE preparation. The chapter-wise PYQs and mindmaps were incredibly helpful for quick revision.",
      rating: 5,
    },
    {
      name: "Ananya Singh",
      credential: "JEE Mains 2023, 99.6 percentile",
      quote: "I received instant digital delivery of all materials which saved me precious time. The study planner kept me organized throughout my preparation journey.",
      rating: 5,
    },
    {
      name: "Vikram Sharma",
      credential: "JEE Advanced 2023, Rank 1879",
      quote: "The syllabus tracker and chapter-wise questions helped me identify my weak areas quickly. Definitely worth the investment!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      credential: "JEE Mains 2023, 99.5 percentile",
      quote: "The detailed notes were comprehensive yet concise. I especially loved how everything was delivered instantly after purchase.",
      rating: 5,
    },
    {
      name: "Arjun Kapoor",
      credential: "JEE Advanced 2023, Rank 2143",
      quote: "The 40-day crash course in the Premium Pack was a game-changer for my last-minute preparation. The mentorship from IITians gave me valuable insights.",
      rating: 5,
    },
    {
      name: "Neha Verma",
      credential: "JEE Mains 2023, 99.7 percentile",
      quote: "The mindmaps and DPPs helped me strengthen my concepts. The test series accurately simulated the actual exam environment.",
      rating: 5,
    },
    {
      name: "Sahil Kumar",
      credential: "JEE Advanced 2023, Rank 2867",
      quote: "Having over 500 questions per chapter helped me practice thoroughly. The syllabus tracker ensured I didn't miss any important topics.",
      rating: 5,
    },
    {
      name: "Ishita Jain",
      credential: "JEE Mains 2023, 99.6 percentile",
      quote: "The instant digital delivery was a relief as I could start studying immediately. The short notes were perfect for quick revisions before the exam.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-intellexa-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Real Success Stories</h2>
          <p className="section-subheading">
            Don't just take our word for it. Here's what our JEE students have to say about Intellexa Study Pack.
          </p>
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} fill="#FFD700" stroke="#FFD700" className="h-5 w-5" />
                    ))}
                  </div>
                  
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
            Join thousands of successful JEE students who transformed their preparation with Intellexa!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
