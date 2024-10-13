import TextReveal from "@/components/ui/text-reveal";

export default function RevealText() {
  return (
    <>
      <p className="px-3 md:px-6 lg:px-10 max-w-[1920px] min-w-full pb-1 font-mono text-[13px] uppercase translate-y-40">[001. Bringing ideas to life]</p>
        <div className="z-10 flex flex-col min-h-64 items-center justify-center rounded-lg bg-white dark:bg-background">
        <TextReveal text="Let's work together to create something exceptional!" />
        </div>
    </>
  );
}
