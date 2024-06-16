const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Virtual Gallery Tour: Impressionist Art",
      date: "June 20, 2024",
      location: "Online",
    },
    {
      id: 2,
      title: "Masterclass: Introduction to Oil Painting Techniques",
      date: "June 25, 2024",
      location: "Art Valley Studio, New York",
    },
    {
      id: 3,
      title: "Exhibition Opening: Modern Abstract Art",
      date: "July 5, 2024",
      location: "Art Valley Gallery, London",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Date:</span> {event.date}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Location:</span>{" "}
                  {event.location}
                </p>
                <div>
                  <a
                    href="#"
                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
