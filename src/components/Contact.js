import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && message) {
      setStatus('Message sent! Thank you.');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Please fill out all fields.');
    }
  };

  return (
    <section id="contact" className="mb-20 max-w-md mx-auto">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="email" 
          placeholder="Your email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <textarea 
          placeholder="Your message" 
          value={message} 
          onChange={e => setMessage(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          rows={4}
          required
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
        {status && <p className="mt-2 text-green-600">{status}</p>}
      </form>
    </section>
  );
}
