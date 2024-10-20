import { GradienBadge } from "./GradientBadge";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    // YUM LIST
    {
      imageSrc: "/projects/yum-list.jpeg",
      title: "Yum list",
      description:
        "Progressive Web App. Organize your favorite restaurants, whether they are tested or to discover. Connect with your friends and share your favorite addresses.",
      technologies: [
        { name: "Ruby on rails", logo: "/logos/rails.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
        { name: "Google Map API", logo: "/logos/google-map.svg" },
      ],
      keyFeatures: [
        {
          text: "PWA for seamless mobile experience",
          icon: "/icons/mobile-icon.svg",
        },
        {
          text: "Integration with Google Maps for restaurant locations",
          icon: "/icons/mobile-icon.svg",
        },
        {
          text: "Social sharing features for favorite spots",
          icon: "/icons/mobile-icon.svg",
        },
      ],
      link: "https://yum-list-aged-water-5075.fly.dev/",
      github: "https://github.com/julienLeMee/yum-list",
    },
    // LA FERME DE NOVELLE
    {
      imageSrc: "/projects/la-ferme-de-novelle.jpeg",
      title: "La ferme de Novelle",
      description: "A website for a local farm featuring a map and store.",
      technologies: [
        { name: "Next JS", logo: "/logos/nextjs.svg" },
        { name: "MapBox API", logo: "/logos/mapbox.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      keyFeatures: [
        {
          text: "Responsive and interactive UI design",
          icon: "/icons/mobile-icon.svg",
        },
        {
          text: "Dynamic content loading and routing with Next.js",
          icon: "/icons/speed-icon.svg",
        },
        {
          text: "Interactive map integration using MapBox",
          icon: "/icons/pin-icon.svg",
        },
      ],
      link: "https://novelle-farm-rm32n1yoj-julienlemee.vercel.app/",
      github: "https://github.com/julienLeMee/yum-list",
    },
    // TESLA CLONE
    {
      imageSrc: "/projects/tesla.jpeg",
      title: "Tesla Clone",
      description: "A responsive clone of Tesla's beautiful website.",
      technologies: [
        { name: "Next JS", logo: "/logos/nextjs.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      keyFeatures: [
        {
          text: "Dynamic content loading and routing with Next.js",
          icon: "/icons/speed-icon.svg",
        },
        {
          text: "Optimized for cross-device responsive design",
          icon: "/icons/imac-icon.svg",
        },
      ],
      link: "https://teslo-julienlemee-julienlemees-projects.vercel.app/",
      github: "https://github.com/julienLeMee/yum-list",
    },
    // DISNEY CLONE
    {
      imageSrc: "/projects/disney.jpeg",
      title: "Disney Clone",
      description: "A clone of Disney's streaming service interface.",
      technologies: [
        { name: "Next JS", logo: "/logos/nextjs.svg" },
        { name: "The Movie DB API", logo: "/logos/the-movie-db.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      keyFeatures: [
        {
          text: "Responsive and interactive UI design",
          icon: "/icons/mobile-icon.svg",
        },
        {
          text: "API integration for streaming content simulation",
          icon: "/icons/video-icon.svg",
        },
        {
          text: "Dynamic content loading and routing with Next.js",
          icon: "/icons/speed-icon.svg",
        },
      ],
      link: "https://disney-clone-julienlemee.vercel.app/",
      github: "https://github.com/julienLeMee/yum-list",
    },
  ];

  return (
    <div id="selected-projects" className="my-32 flex flex-col">
      <div className="w-full px-3 md:px-6 lg:px-10 pb-16">
        <p className="max-w-[1920px] min-w-full pb-1 font-mono text-[13px] uppercase">
          [002. Selected Works]
        </p>
        <h2 className="w-full text-[40px] font-bold uppercase leading-[0.8] py-6 md:pb-10 md:text-[80px]">
          Tailored Experiences
        </h2>
        <p className="max-w-[550px] text-2xl font-normal leading-[1.1] text-pink md:text-[32px] md:leading-[1] w-full">
          Bringing custom web solutions to life, designed to meet your unique
          needs.
        </p>
      </div>

      <div className="">
        <div className="flex md:flex-row flex-col py-5 min-h-[500px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <GradienBadge />
    </div>
  );
}
