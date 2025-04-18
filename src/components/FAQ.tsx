"use client";

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const FAQ = () => {
    // Sada pratimo koji FAQ je otvoren pomoću indeksa
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleOpen = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const faqData = [
        { question: "What services does VukConnect offer?", answer: "Lead Generation, Outreach, Digital Marketing" },
        { question: "What is your pricing model?", answer: "We offer competitive pricing based on the scope of work." },
        { question: "How do you handle customer data?", answer: "We prioritize privacy and follow best practices for data security." },
        { question: "What industries do you work with?", answer: "We work with various industries including tech, healthcare, and finance." },
        { question: "What industries do you work with?", answer: "We work with various industries including tech, healthcare, and finance." },
        
    ];

    return (
        <div className="faq">
            <p className="nadNaslov">
                <span style={{ color: '#0AADFF' }}>•</span>&nbsp;FAQ
            </p>
            <h2>Questions and Answers</h2>

            {faqData.map((faq, index) => (
                <div className="faq-block" key={index}>
                    <div className="pitanje" onClick={() => handleOpen(index)}>
                        <p>{faq.question}</p>
                        <FontAwesomeIcon icon={openIndex === index ? faMinus : faPlus} />
                    </div>
                    <div className={`odgovor ${openIndex === index ? 'open' : ''}`}>
                        <h3>{faq.answer}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
