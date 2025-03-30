
import React from 'react';
import { Star, User } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      credential: "JEE Advanced 2023, Rank 1245",
      quote: "Intellexa boosted my JEE rank by 2000+ in just 3 months! The organized study material and PYQ section were game-changers for my preparation.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      credential: "JEE Mains 2023, 99.2 percentile",
      quote: "I wish I had this pack earlier – it made my revision so easy! The mind maps and formula sheets helped me memorize complex concepts quickly.",
      rating: 5,
    },
    {
      name: "Aditya Patel",
      credential: "JEE Mains 2023, 99.7 percentile",
      quote: "Best decision ever! It saved me so much time and effort. The syllabus tracker kept me on schedule, and the test series prepared me perfectly for the real exam.",
      rating: 5,
    },
    {
      name: "Vishal Kumar",
      credential: "JEE Advanced 2023, Rank 876",
      quote: "The cheat sheets and study planner helped me organize my preparation effectively. Highly recommend for serious JEE aspirants!",
      rating: 5,
    },
    {
      name: "Ananya Singh",
      credential: "JEE Mains 2023, 99.5 percentile",
      quote: "The crash course content was perfect for my last-minute revision. Everything is well-organized and easy to follow!",
      rating: 5,
    },
    {
      name: "Rishi Kapoor",
      credential: "JEE Advanced 2023, Rank 1502",
      quote: "The formula notebook and mind maps were my saviors during revision week. Worth every rupee spent!",
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
