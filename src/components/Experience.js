import React from 'react';

const experiences = [
  {
    role: 'Full Stack Developer & Technology Lead',
    company: 'Envisionard Private Limited',
    location: 'Pune, India',
    dateRange: 'Jan 2021 - Dec 2024',
    description: `Architected and developed highly interactive and dynamic user interfaces using React.js.
Engineered RESTful APIs with Node.js, Express.js, and Feathers.js, creating a scalable and secure server-side infrastructure.
Designed and optimized MongoDB databases, Integrated multiple third-party APIs, including Petpooja (POS), SMS gateways, Firebase Cloud Messaging for push notifications, SendGrid for email services, and RazorPay for payment processing.`
  },
  {
    role: 'Freelancer',
    company: 'Hey Go - Goods & Passenger Transport',
    location: 'Oklahoma',
    dateRange: 'Jan 2024 - Aug 2024',
    description: `Implemented seamless Google Maps live location tracking for both drivers and passengers.
Integrated advanced geolocation services and route optimization.
Developed a robust real-time communication system using sockets.
Implemented comprehensive user authentication and authorization protocols.`
  },
  {
    role: 'Web Developer Intern',
    company: 'Engineering Sources Around You (ESAY)',
    location: 'Telugu Languages Known',
    dateRange: 'May 2019 - Jul 2019',
    description: `Expertly crafted responsive and visually appealing user interfaces using HTML5, CSS3, and Bootstrap 4.
Designed and executed efficient data handling processes by implementing POST and GET requests with AJAX.
Developed and managed the backend logic using PHP CodeIgniter, handling sessions, cookies, and ensuring secure and persistent user interactions.`
  }
];

export default function Experience() {
  return (
    <section id="experience" className="mb-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map(({ role, company, location, dateRange, description }, idx) => (
          <div key={idx} className="border border-gray-300 rounded-xl p-6 shadow-sm bg-white">
            <h3 className="text-2xl font-semibold mb-1">{role}</h3>
            <p className="font-semibold text-gray-700">{company} - {location}</p>
            <p className="italic text-gray-600 mb-4">{dateRange}</p>
            <p className="text-gray-800 whitespace-pre-line">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
