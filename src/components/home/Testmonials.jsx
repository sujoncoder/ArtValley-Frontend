const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      author: "John Doe",
      role: "Art Enthusiast",
      quote:
        "Art Valley has been a revelation for me. I've discovered so many talented artists and their incredible artworks. Highly recommended!",
    },
    {
      id: 2,
      author: "Jane Smith",
      role: "Collector",
      quote:
        "As a collector, I appreciate the diverse range of artworks available on Art Valley. It's easy to navigate and find pieces that resonate with my taste.",
    },
    {
      id: 3,
      author: "David Brown",
      role: "Artist",
      quote:
        "Art Valley provided me with a platform to showcase my work to a global audience. It's been instrumental in connecting me with art enthusiasts and buyers.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <p className="text-gray-800 text-lg mb-4">{testimonial.quote}</p>
              <p className="text-gray-600">{testimonial.author}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
