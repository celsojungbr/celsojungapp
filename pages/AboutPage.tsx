
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-serif tracking-tight text-gray-900 dark:text-white">About Celso Jung</h1>
      </div>
      <div className="mt-12 space-y-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-serif">
        <img
          src="https://picsum.photos/id/237/400/400"
          alt="Celso Jung"
          className="mx-auto rounded-full w-48 h-48 object-cover shadow-lg"
        />
        <p>
          Celso Jung is an author of inspirational works that unite themes such as spirituality, innovation, and personal transformation. His official website, celsojung.com.br, is the space dedicated to disseminating his books, reflections, and messages of purpose.
        </p>
        <p>
          With a background in both technology and spiritual studies, Celso brings a unique perspective to the challenges of modern life. He believes that true innovation starts from within and that by aligning our inner purpose with our external actions, we can create a more fulfilling life and a better world.
        </p>
        <p>
          His writing is characterized by its clarity, depth, and practical wisdom. He has been recognized with multiple awards for his ability to make complex topics accessible and engaging for a wide audience. Through his books and online presence, he has inspired thousands of readers to embark on their own journeys of self-discovery and growth.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
