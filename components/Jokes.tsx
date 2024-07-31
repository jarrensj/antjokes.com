'use client'

import React, { useState } from 'react';
import Image from 'next/image';

interface Joke {
  question: string;
  answer: string;
  image?: string;
  keywords?: string;
}

const jokes: Joke[] = [
  {
    question: 'what do you call a big ant?',
    answer: 'a gi-ant',
    keywords: 'big'
  },
  {
    question: 'what do you call a smart ant?',
    answer: 'brilli-ant',
    keywords: 'smart'
  },
  {
    question: 'what do you call a nice ant?',
    answer: 'pleas-ant',
    keywords: 'nice'
  },
  {
    question: 'what do you call a fancy ant?',
    answer: 'eleg-ant',
    keywords: 'fancy',
    image: 'eleg-ant.png'
  },
  {
    question: 'what do you call an old ant?',
    answer: 'ant-ique',
    keywords: 'old'
  },
  {
    question: 'what do you call a trusted ant?',
    answer: 'reli-ant',
    image: '',
    keywords: 'trusted'
  },
  {
    question: 'what do you call a fast ant?',
    answer: 'inst-ant',
    keywords: 'fast'
  },
  {
    question: 'what do you call an ant that is far away?',
    answer: 'dist-ant',
    keywords: 'far away'
  },
  {
    question: 'what do you call a baby ant?',
    answer: 'inf-ant',
    keywords: 'baby'
  },
  {
    question: 'what do you call a dirty ant?',
    answer: 'contamin-ant',
    keywords: 'dirty'
  },
  {
    question: 'what do you call a birthday ant?',
    answer: 'celebr-ant',
    keywords: 'birthday'
  },
  {
    question: 'what do you call a clean ant?',
    answer: 'disinfect-ant',
    keywords: 'clean'
  },
  {
    question: 'what do you call a bossy ant?',
    answer: 'tyr-ant',
    keywords: 'bossy'
  },
  {
    question: 'what do you call a poor ant?',
    answer: 'peas-ant',
    keywords: 'poor'
  },
  {
    question: 'what do you call a repetitive ant?',
    answer: 'redund-ant',
    keywords: 'repetitive'
  },
  {
    question: 'what do you call an ant that never changes?',
    answer: 'const-ant',
    keywords: 'never changes'
  },
  {
    question: 'what do you call a different type of ant?',
    answer: 'vari-ant',
    keywords: 'different type'
  },
  {
    question: 'what do you call an ant that fights stuff in the body?',
    answer: 'ant-ibody',
    keywords: 'fights stuff in the body'
  },
  {
    question: 'what do you call an ant that is valued?',
    answer: 'import-ant',
    keywords: 'valued'
  },
  {
    question: 'what do you call an ant that lives somewhere?',
    answer: 'habit-ant',
    keywords: 'lives somewhere'
  },
  { 
    question: 'what do you call a shiny ant?',
    answer: 'radi-ant',
    keywords: 'shiny'
  },
  {
    question: 'what do you call an annoying ant?',
    answer: 'irrit-ant',
    keywords: 'annoying'
  },
  {
    question: 'what do you call an ant that is unsure?',
    answer: 'hesit-ant',
    keywords: 'unsure'
  },
  {
    question: 'what do you call an ant that likes math?',
    answer: 'account-ant',
    keywords: 'likes math'
  },
  {
    question: 'what do you call a chill ant?',
    answer: 'nonchal-ant',
    keywords: 'chill'
  },
  {
    question: 'what do you call an ant that participates?',
    answer: 'particip-ant',
    keywords: 'that partakes'
  }
]

const Jokes: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const highlightKeywords = (text: string, keywords?: string) => {
    if (!keywords) return <span>{text}</span>;

    const regex = new RegExp(`(${keywords})`, 'i');
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === keywords.toLowerCase() ? (
            <span key={index} className="text-blue-400">{part}</span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className="p-5">
      {jokes.map((item, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div
            onClick={() => handleToggle(index)}
            className="cursor-pointer font-semibold text-lg text-gray-800 hover:text-gray-600"
          >
            {highlightKeywords(item.question, item.keywords)}
          </div>
          {activeIndex === index && (
            <div className="mt-2 ml-5 text-gray-700">
              <p>{item.answer}</p>
              {item.image && (
                <div className="mt-2 flex justify-center">
                  <Image src={`/${item.image}`} alt={`image of ${item.answer}`} width={250} height={250} />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Jokes;
