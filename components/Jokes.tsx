'use client'

import React, { useState } from 'react';
import Image from 'next/image';

interface Joke {
  question: string;
  answer: string;
  image?: string;
}

const jokes: Joke[] = [
  {
    question: 'what do you call a big ant?',
    answer: 'a gi-ant',
  },
  {
    question: 'what do you call a smart ant?',
    answer: 'brilli-ant',
  },
  {
    question: 'what do you call a nice ant?',
    answer: 'pleas-ant',
  },
  {
    question: 'what do you call a fancy ant?',
    answer: 'eleg-ant',
    image: 'eleg-ant.png'
  },
  {
    question: 'what do you call an old ant?',
    answer: 'ant-ique',
  },
  {
    question: 'what do you call a trusted ant?',
    answer: 'reli-ant',
    image: ''
  },
  {
    question: 'what do you call a fast ant?',
    answer: 'inst-ant',
  },
  {
    question: 'what do you call an ant that is far away?',
    answer: 'dist-ant',
  },
  {
    question: 'what do you call a baby ant?',
    answer: 'inf-ant',
  },
  {
    question: 'what do you call a dirty ant?',
    answer: 'contamin-ant',
  },
  {
    question: 'what do you call a birthday ant?',
    answer: 'celebr-ant',
  },
  {
    question: 'what do you call a clean ant?',
    answer: 'disinfect-ant',
  },
  {
    question: 'what do you call a bossy ant?',
    answer: 'tyr-ant',
  },
  {
    question: 'what do you call a poor ant?',
    answer: 'peas-ant',
  },
  {
    question: 'what do you call a repetitive ant?',
    answer: 'redund-ant',
  },
  {
    question: 'what do you call an ant that never changes?',
    answer: 'const-ant'
  },
  {
    question: 'what do you call a different type of ant?',
    answer: 'vari-ant',
  },
  {
    question: 'what do you call an ant that fights stuff in the body?',
    answer: 'ant-ibody',
  },
  {
    question: 'what do you call an ant that is valued?',
    answer: 'import-ant',
  },
  {
    question: 'what do you call an ant that lives somewhere?',
    answer: 'habit-ant',
  },
  { 
    question: 'what do you call a shiny ant?',
    answer: 'radi-ant',
  },
  {
    question: 'what do you call an annoying ant?',
    answer: 'irrit-ant',
  }
]

const Jokes: React.FC = () => {
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
            <div style={{ marginTop: '10px', marginLeft: '20px' }}>
              {item.answer}
              { item.image ? <Image src={`/${item.image}`} alt={`image ${item.answer}`} width={250} height={250} /> : null }
              
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Jokes;
