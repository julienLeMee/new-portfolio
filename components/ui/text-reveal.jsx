"use client";;
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export const TextRevealByWord = ({
  text,
  className,
}) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    (<div ref={targetRef} className={cn("relative z-10 h-[200vh] w-full", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-[1920px] items-center bg-transparent px-3 md:px-6 lg:px-10 py-[5rem]"
        }>
        <p
          ref={targetRef}
          className={
            "w-full md:w-3/5 flex flex-wrap text-5xl font-bold xl:text-7xl"
          }>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              (<Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>)
            );
          })}
        </p>
      </div>
    </div>)
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    (<span className="xl:lg-3 relative mr-2 lg:mr-5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={""}>
        {children}
      </motion.span>
    </span>)
  );
};

export default TextRevealByWord;
