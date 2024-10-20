import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const loaderRef = useRef();

  useEffect(() => {
    // Animation GSAP
    gsap.to(loaderRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="loader-container flex items-center justify-center h-screen w-full">
      <div ref={loaderRef} className="loader w-16 h-16 border-4 border-t-[--color-pink] border-gray-300 rounded-full"></div>
    </div>
  );
};

export default Loader;
