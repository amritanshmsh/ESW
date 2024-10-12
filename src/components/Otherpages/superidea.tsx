import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const SuperIdeaPage: React.FC = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]); // Store refs to each text section
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // GSAP ScrollTrigger animation for each text section
    sectionRefs.current.forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true
          }
        }
      );
    });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="super-idea-page">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-50 to-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-opacity-30"></div>
        <div className="relative z-10 p-8">
          {/* Main Text */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4">
            Super Idea. <span className="text-blue-500">Big Funding.</span>
          </h1>
          <p className="text-4xl md:text-5xl font-bold text-black mb-6">
            Fuel Your Innovation with Us.
          </p>
          {/* Apply Now Button */}
          <a
            href="https://forms.gle/super-idea-apply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* What is Super Idea Section with GSAP Animations */}
      <section className="py-12 px-6 lg:px-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">What is Super Idea?</h2>
        <div className="text-center space-y-12">
          <div ref={el => (sectionRefs.current[0] = el!)} className="text-3xl font-semibold text-gray-800">
            We are not a competition.
          </div>
          <div ref={el => (sectionRefs.current[1] = el!)} className="text-3xl font-semibold text-gray-800">
            We are not a grant.
          </div>
          <div ref={el => (sectionRefs.current[2] = el!)} className="text-3xl font-semibold text-gray-800">
            Super Idea is a community for student innovators.
          </div>
          <div ref={el => (sectionRefs.current[3] = el!)} className="text-3xl font-semibold text-gray-800">
            We believe in your vision. We believe in your ideas.
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 px-6 lg:px-24 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Funding</h3>
            <p className="text-lg text-gray-700">
              We provide up to ₹10,00,000 in funding to turn your ideas into reality.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Free Office Space</h3>
            <p className="text-lg text-gray-700">
              Get access to our fully equipped offices to work on your project, free of cost.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Expert Guidance</h3>
            <p className="text-lg text-gray-700">
              Receive mentorship from industry experts to guide your project to success.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 mb-4">
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openFaqIndex === index && (
                <div className="text-gray-700 pb-4">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// FAQ Data
const faqData = [
  {
    question: 'Who can apply for the funding?',
    answer: 'Anyone with a groundbreaking idea can apply. We encourage students, entrepreneurs, and professionals from all fields.'
  },
  {
    question: 'What kind of ideas do you fund?',
    answer: 'We fund innovative projects across various sectors including technology, healthcare, environment, education, and more.'
  },
  {
    question: 'Is there a deadline for applications?',
    answer: 'Applications are accepted on a rolling basis. You can apply at any time during the year.'
  },
  {
    question: 'What happens after I apply?',
    answer: 'After reviewing your application, our team will get in touch with you for the next steps, which may include a proposal review and interview.'
  },
];

export default SuperIdeaPage;