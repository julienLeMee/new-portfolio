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
      link: "https://link-to-project-one.com",
      github: "https://github.com/julienLeMee/yum-list",
    },
    // NIKE CLONE
    {
      imageSrc: "/projects/nike.jpg",
      title: "Nike Clone",
      description: "A responsive clone of Nike's e-commerce platform.",
      technologies: [
        { name: "Next JS", logo: "/logos/nextjs.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      keyFeatures: [
        {
          text: "Product filtering and dynamic cart functionality",
          icon: "/icons/filtering.svg",
        },
        {
          text: "Fully responsive across all devices",
          icon: "/icons/responsive.svg",
        },
        { text: "Optimized for fast load times", icon: "/icons/fast-load.svg" },
      ],
      link: "https://link-to-project-one.com",
      github: "https://github.com/julienLeMee/yum-list",
    },
    // DISNEY CLONE
    {
      imageSrc: "/projects/disney.jpeg",
      title: "Disney Clone",
      description: "A clone of Disney's streaming service interface.",
      technologies: [
        { name: "Next JS", logo: "/logos/nextjs.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      keyFeatures: [
        {
          text: "Interactive UI with smooth transitions",
          icon: "/icons/ui.svg",
        },
        {
          text: "Streaming content simulation with API integration",
          icon: "/icons/api.svg",
        },
        {
          text: "User authentication and secure session handling",
          icon: "/icons/authentication.svg",
        },
      ],
      link: "https://link-to-project-one.com",
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
          text: "Interactive map powered by MapBox",
          icon: "/icons/mapbox.svg",
        },
        {
          text: "E-commerce integration for online store",
          icon: "/icons/ecommerce.svg",
        },
        {
          text: "Fast, server-side rendering with Next.js",
          icon: "/icons/server-side-rendering.svg",
        },
      ],
      link: "https://novelle-farm-rm32n1yoj-julienlemee.vercel.app/",
      github: "https://github.com/julienLeMee/yum-list",
    },
  ];

  return (
    <div
      id="selected-projects"
      className="my-32 flex flex-col"
    >
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
        <div className="flex py-5">
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
    </div>
  );
}
