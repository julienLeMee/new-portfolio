import React from 'react';
import { ShinyBadge } from './ShinyBadge';
import { GradienBadge } from './GradientBadge';
import RevealBox from './RevealBox';
import BoxReveal from "@/components/ui/box-reveal";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-background py-10 px-4">
      <div className="container">
        {/* <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
          Julien Le Mée
        </h1>
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
          Développeur web full stack
        </h3>

        <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl">
          Passionné par l'amélioration constante de mes compétences, j'apprends et me perfectionne chaque jour pour relever de nouveaux défis.
        </p> */}

        <div className="max-w-[850px] m-auto">
                <RevealBox />
        </div>

        <BoxReveal boxColor={"#637E40"} duration={0.5}>
            <div className="flex gap-4">
                <ShinyBadge />
                <GradienBadge />
            </div>
        </BoxReveal>

      </div>
    </section>
  );
};
