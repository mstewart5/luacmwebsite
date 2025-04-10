'use client'

import { useState } from 'react';
import { FiMail, FiMap, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
const MailIcon = FiMail as unknown as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const MapIcon = FiMapPin as unknown as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const InstagramIcon = FaInstagram as unknown as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const DiscordIcon = FaDiscord as unknown as React.ComponentType<React.SVGProps<SVGSVGElement>>;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

	console.log(formData);

	try {
	  const res = await fetch("/api/send-email", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	  });

	  /*if (res.status === 200) {
		alert('Sent!');
	  } else {
		alert('Failed!');
	  }*/
	} catch (ex) {
	  console.error(ex);
	}

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
    
  
  };

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-black">Contact Us</h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Have questions about ACM or want to get involved? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Change md:grid-cols-1 to md:grid-cols-2 if you renable the email form*/}
        <div className="grid md:grid-cols-1 gap-16 w-full justify-center">
          {/* Contact Form */}
{/*
          <div className="bg-[#f2f0ef] p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-black">Send Us a Message</h2>
            
            {submitMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-black">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
                >
                  <option value="" className="text-black">Select a subject</option>
                  <option value="Membership" className="text-black">Membership</option>
                  <option value="Events" className="text-black">Events</option>
                  <option value="Sponsorship" className="text-black">Sponsorship</option>
                  <option value="Other" className="text-black">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-black">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black hover:bg-opacity-80 transition duration-300 
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
			</div>
  */}
          
          {/* Contact Information */}
          <div className="justify-center justify-self-center">
            <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black bg-opacity-10 flex items-center justify-center">
                  <MapIcon className="h-6 w-6 text-black" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-black">Location</h3>
                  <p className="mt-1 text-black">
                    MAES 201<br />
                    Lamar University<br />
                    Beaumont, TX 77705
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black bg-opacity-10 flex items-center justify-center">
                  <MailIcon className="h-6 w-6 text-black" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-black">Email</h3>
                  <p className="mt-1 text-black"><a href="mailto:acm@lamar.edu" className="underline">acm@lamar.edu</a></p>
                  <p className="mt-1 text-black text-sm">We'll respond as soon as possible</p>
                </div>
              </div>
              
              
              <div className="pt-8">
                <h3 className="text-lg font-medium mb-4 text-black">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/lamar_acm/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
	                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-black bg-opacity-10 flex items-center justify-center">
                      <InstagramIcon className="h-8 w-8 text-black hover:scale-110 transition-transforms" />
                    </div>
                  </a>
                  <a href="https://discord.com/invite/vtDGFcb" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black">
				    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-black bg-opacity-10 flex items-center justify-center">
                      <DiscordIcon className="h-8 w-8 text-black hover:scale-110 transition-transforms" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
