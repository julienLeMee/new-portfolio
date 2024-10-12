import React from 'react';
import { ShinyBadge } from './ShinyBadge';
import { GradienBadge } from './GradientBadge';
import RevealBox from './RevealBox';
import BoxReveal from "@/components/ui/box-reveal";

export default function Hero() {
  return (
    <section className="flex flex-1 flex-col px-3 md:px-6 lg:px-10 h-svh justify-end pb-20 pt-[88px]">
      <div className="flex flex-col text-left mx-auto w-full max-w-[1920px] relative z-[1]">
        <p className="min-w-full pb-1 font-mono text-[13px] uppercase">[000. Where It All Starts]</p>
            <h1 className="w-full text-[40px] font-bold uppercase leading-[0.8] py-5 md:text-[88px]">
            Hi I'm Julien
            <br />
            full stack
            <br />
            web developer
            </h1>
            <p className="max-w-[920px] text-2xl font-normal leading-[1.1] md:text-[32px] md:leading-[1] md:py-8 w-full">
            I learn and improve every day to take on new challenges.
            </p>
            <div className="flex gap-4">
                <ShinyBadge />
                <GradienBadge />
            </div>


      </div>
    </section>
  );
};
