import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white dark:bg-background py-10 px-4">
      <div className="container">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Salut, je suis Julien Le Mée,
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
          Développeur web full stack
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl">
          Passionné par l'amélioration constante de mes compétences, j'apprends et me perfectionne chaque jour pour relever de nouveaux défis.
        </p>
      </div>
    </section>
  );
};
