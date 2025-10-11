'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';

interface SocialLink {
  name: string;
  url: string;
}

interface ContactProps {
  name: string;
  projects: SocialLink[];
  companies: SocialLink[];
  socialLinks: SocialLink[];
}

export default function Contact({ name, projects, companies, socialLinks }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xdkwwkje', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div className="space-y-16">
        {/* Calendly Booking - Full Width */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">Book a Meeting</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-2xl mx-auto">
            Ready to discuss your project? Schedule a 30-minute call to explore how we can work together.
          </p>
          <div className="calendly-inline-widget"
            data-url="https://calendly.com/walkertexasaustin/30min?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=2563eb"
            style={{ minWidth: '320px', height: '700px' }}>
          </div>
        </div>

        {/* Contact Form - Full Width */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">Send a Message</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
            Prefer to start with a message? Drop me a line and I'll get back to you soon.
          </p>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-green-800 font-semibold mb-2">Message Sent!</h4>
              <p className="text-green-700">Thanks for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-green-600 hover:text-green-800 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">{name}</h3>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Projects</h4>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <li key={index}>
                  <Link href={project.url} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Companies</h4>
            <ul className="space-y-2">
              {companies.map((company, index) => (
                <li key={index}>
                  <Link href={company.url} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
