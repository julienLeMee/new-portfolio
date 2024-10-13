import React from 'react';
import RevealBox from './RevealBox';
import BoxReveal from "@/components/ui/box-reveal";

export default function Hero() {
  return (
    <section className="flex flex-1 flex-col px-3 md:px-6 lg:px-10 h-svh justify-end pb-24 pt-[88px]">
      <div className="flex flex-col text-left mx-auto w-full max-w-[1920px] relative z-[1]">
        <p className="min-w-full pb-1 font-mono text-[13px] uppercase">[000. Where It All Starts]</p>
            <h1 className="w-full text-[40px] font-bold uppercase leading-[0.8] py-5 md:text-[88px]">
            Hi I'm Julien
            <br />
            full stack
            <br />
            web developer
            </h1>
            <div className="flex w-full flex-col md:flex-row md:border-b md:border-t md:border-solid md:border-[--color-pink]">
                <div className="text-2xl font-normal leading-[1.1] md:text-[32px] md:leading-[1] border-y border-solid border-[--color-pink] py-5 md:border-y-0 md:border-r md:py-8 w-full">
                    <p className="w-full lg:max-w-[70%]">
                    I learn and improve every day to take on new challenges.
                    </p>
                </div>
                <div className="flex w-full flex-row items-center justify-stretch gap-x-2 py-5 md:w-auto md:pl-10 md:pr-8">
                    <button className="relative w-max inline-flex items-center justify-center rounded-lg font-mono font-medium uppercase transition-all duration-200 bg-[--color-pink] text-black md:hover:bg-white text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30">first button</button>
                    <button className="relative w-max inline-flex items-center justify-center rounded-lg font-mono font-medium uppercase transition-all duration-200 border border-solid border-[--color-pink] bg-transparent backdrop-blur-[10px] md:hover:bg-[--color-pink] md:hover:text-black text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30">second button</button>
                </div>
            </div>
      </div>
    </section>
  );
};
