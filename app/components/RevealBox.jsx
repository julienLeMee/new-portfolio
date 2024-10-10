import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";

export default function RevealBox() {
  return (
    <div className="w-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#637E40"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Julien Le Mée<span className="text-[#637E40]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#637E40"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
            Développeur web full stack
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#637E40"} duration={0.5}>
        <div className="mt-6">
          <p>
          Passionné par l'amélioration constante de mes compétences, j'apprends et me perfectionne chaque jour pour relever de nouveaux défis.
            <span className="font-semibold text-[#637E40]"> PHP</span>,
            <span className="font-semibold text-[#637E40]"> Next JS</span>,
            <span className="font-semibold text-[#637E40]"> Ruby on Rails</span>,
            and
            <span className="font-semibold text-[#637E40]"> Framer Motion</span>
            .
          </p>
        </div>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#ffbd7a"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#ffbd7a]">Explore</Button>
      </BoxReveal> */}
    </div>
  );
}
