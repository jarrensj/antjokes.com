"use client"
import React, { useState } from 'react';

const jokes = [
  {
    question: 'what do you call a big ant?',
    answer: 'a gi-ant',
  },
  {
    question: 'what do you call a smart ant?',
    answer: 'brilli-ant',
  },
]

const Jokes = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {jokes.map((item, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <div
            onClick={() => handleToggle(index)}
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div style={{ marginTop: '10px', marginLeft: '20px' }}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Jokes;
