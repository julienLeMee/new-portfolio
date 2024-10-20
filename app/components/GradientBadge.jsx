import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

export function GradienBadge() {
  return (
    <div className="z-10 my-8 flex items-center justify-center">
      <a href="/projects" className="group flex items-center">
        <AnimatedGradientText>
          🚀 <hr className="mx-1" />
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            See all my projects
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </a>
    </div>
  );
}
