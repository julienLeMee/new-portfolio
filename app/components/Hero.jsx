import React from 'react';
import { ShinyBadge } from './ShinyBadge';
import { GradienBadge } from './GradientBadge';
import RevealBox from './RevealBox';
import BoxReveal from "@/components/ui/box-reveal";

export default function Hero() {
  return (
    <section className="flex flex-1 flex-col px-3 md:px-6 lg:px-10 h-svh justify-end pb-4 pt-[88px]">
      <div className="flex flex-col text-left mx-auto w-full max-w-[1920px] relative z-[1]">
        <p className="min-w-full pb-1 font-mono text-[13px] uppercase">[000. Where It All Starts]</p>
            <h1 className="w-full text-[40px] font-bold uppercase leading-[0.8] py-5 md:text-[88px]">
            Hi I'm Julien
            <br />
            full stack
            <br />
            web developer
            </h1>
            <div className="flex w-full flex-col md:flex-row md:border-b md:border-t md:border-solid md:border-[--color-rose]">
                <p className="text-2xl font-normal leading-[1.1] md:text-[32px] md:leading-[1] border-y border-solid border-[--color-rose] py-5 md:border-y-0 md:border-r md:py-8 w-full">
                I learn and improve every day to take on new challenges.
                </p>
                <div className="flex w-full flex-row items-center justify-stretch gap-x-2 py-5 md:w-auto md:pl-10 md:pr-8">
                    <button className="relative inline-flex items-center justify-center rounded-lg font-mono font-medium uppercase transition-all duration-200 bg-[--color-rose] text-black md:hover:bg-white text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30 w-full md:w-auto">first button</button>
                    <button className="relative inline-flex items-center justify-center rounded-lg font-mono font-medium uppercase transition-all duration-200 border border-solid border-[--color-rose] bg-transparent backdrop-blur-[10px] md:hover:bg-[--color-rose] md:hover:text-black text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30 w-full md:w-auto">second button</button>
                </div>
            </div>

      </div>
        <div className="flex gap-4">
            <ShinyBadge />
            <GradienBadge />
        </div>
    </section>
  );
};
