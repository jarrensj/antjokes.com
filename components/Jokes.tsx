'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Joke {
  question: string;
  answer: string;
  image?: string;
  keywords?: string;
}

const Jokes: React.FC = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('/api/jokes');
      const data = await response.json();
      setJokes(data);
    };
    fetchJokes();
  }, []);

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
