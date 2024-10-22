import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqsData = [
    {
      question: "What is MechFinder?",
      answer: "MechFinder is an app that connects users with local service providers like plumbers, electricians, and painters.",
    },
    {
      question: "How do I find a service provider?",
      answer: "You can browse nearby service providers, view their profiles, and post your service needs on MechFinder.",
    },
    {
      question: "Is there a premium feature?",
      answer: "Yes, with the premium feature, you can unlock contact details of service providers and have unlimited interactions.",
    },
    {
      question: "Can I register my shop?",
      answer: "Yes, service providers can register their shops to increase visibility and get more customers.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our support team via the 'Contact Us' section in the app or visit our website for more details.",
    },
    {
      question: "What benefits does the premium version offer?",
      answer: "The premium version of MechFinder allows unlimited interactions with service providers, access to their contact information, and priority listing on search results.",
    },
    {
      question: "Is there a subscription for premium services?",
      answer: "Yes, MechFinder offers a subscription-based premium service. Once subscribed, you will get access to premium features like priority listing and contact unlock.",
    },
    {
      question: "Can I use the website to post queries or find service providers?",
      answer: "Yes, MechFinder has a fully functional website where users can browse service providers, post queries, and access their profiles.",
    },
    {
      question: "How can I upgrade to premium?",
      answer: "You can upgrade to premium through the app's settings page or the website. Simply choose your preferred plan and follow the instructions to complete the upgrade.",
    },
  ];

  return (
    <div className="faqs-section " style={styles.container}>
      <h2
        className=' font-Poppins font-semibold'
        style={styles.heading}
      >
        Frequently Asked Questions
      </h2>
      {faqsData.map((faq, index) => (
        <div key={index} style={styles.faqItem}>
          <div
            style={styles.question}
            className=' font-Poppins font-semibold'
            onClick={() => toggleFaq(index)}
          >
            {faq.question}
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div
            style={{
              ...styles.answerContainer,
              height: activeIndex === index ? 'auto' : '0',
              padding: activeIndex === index ? '15px 10px' : '0 10px',
            }}
          >
            <div
              style={styles.answer}
              className=' font-Poppins font-regular'
            >
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// CSS styles with better padding and animations
const styles = {
  container: {
    width: '90%', // Full width container
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#4f46e5',
    fontSize: '24px',
  },
  faqItem: {
    marginBottom: '15px',
    borderBottom: '1px solid #ddd',
  },
  question: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '18px',
    color: '#007BFF',
    fontFamily: 'Poppins',
    padding: '15px 10px',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
  answerContainer: {
    overflow: 'hidden',
    height: '0',
    transition: 'all 0.5s ease-in-out', // Smooth transition
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
  },
  answer: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default Faqs;
