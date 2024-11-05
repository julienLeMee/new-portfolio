const projects = [
  // YUM LIST
  {
    imageSrc: "/projects/yum-list.jpeg",
    title: "Yum list",
    description: [
      {
        title: "Progressive Web App (PWA)",
        text: "The application is a PWA, enabling offline use, the ability to add it to the home screen, and providing a fast, responsive experience.",
      },
      {
        title: "Display Restaurants by Category",
        text: "Restaurants are organized by category, making it easy to browse by type of cuisine or restaurant.",
      },
      {
        title: "Restaurant Details",
        text: "Each restaurant includes a detailed description and relevant information.",
      },
      {
        title: "Friends' Restaurant Lists",
        text: "View and explore the favorite restaurant lists of your friends, categorized and organized.",
      },
      {
        title: "Responsive Design",
        text: "The application is optimized for both desktop and mobile devices.",
      },
      {
        title: "Search and Filtering",
        text: "Users can search for and filter restaurants according to their preferences.",
      },
      {
        title: "Community",
        text: "Users can add friends to see their restaurant lists.",
      },
      {
        title: "Map Integration",
        text: "Restaurants are also displayed on an interactive map for easy location viewing.",
      },
    ],
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
        icon: "/icons/pin-icon.svg",
      },
      {
        text: "Social sharing features for favorite spots",
        icon: "/icons/share-icon.svg",
      },
    ],
    link: "https://yum-list-aged-water-5075.fly.dev/",
    github: "https://github.com/julienLeMee/yum-list",
  },
  // QUICK REPO
  {
    imageSrc: "/projects/quick-repo.png",
    title: "Quick Repo",
    description: [
      {
        title: "Manage Your Repositories Effortlessly",
        text: "Quick Repo is a lightweight desktop application designed to simplify the management and access of your Git repositories. Built with Electron, this tool lets you view, open, and organize repositories directly from your system tray with just a few clicks.",
      },
    ],
    technologies: [
      { name: "Electron", logo: "/logos/electron.svg" },
      { name: "Javascript", logo: "/logos/javascript.svg" },
      { name: "NPM", logo: "/logos/npm.svg" },
    ],
    keyFeatures: [
      {
        text: "Quick access to repositories via system tray",
        icon: "/icons/imac-icon.svg",
      },
      {
        text: "Open repositories directly in VS Code",
        icon: "/icons/open-icon.svg",
      },
      {
        text: "Add and remove repositories easily",
        icon: "/icons/add-icon.svg",
      },
    ],
    link: "",
    github: "",
  },
  // TESLA CLONE
  {
    imageSrc: "/projects/tesla.jpeg",
    title: "Tesla Clone",
    description: [{ title: "", text: "A clone of Tesla's beautiful website." }],
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
    github: "https://github.com/julienLeMee/teslo",
  },
  // NIKE CLONE
  {
    imageSrc: "/projects/nike.jpg",
    title: "Nike Clone",
    description: [
      {
        title: "",
        text: "A responsive clone of Nike's e-commerce platform.",
      },
    ],
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
      {
        text: "Responsive and interactive UI design",
        icon: "/icons/mobile-icon.svg",
      },
    ],
    link: "https://nyke.vercel.app/",
    github: "https://github.com/julienLeMee/nyke",
  },
  // DISNEY CLONE
  {
    imageSrc: "/projects/disney.jpeg",
    title: "Disney Clone",
    description: [
      {
        title: "",
        text: "A clone of Disney's streaming service interface.",
      },
      {
        title: "API Integration",
        text: "Integration with The Movie DB API for streaming content simulation.",
      },
    ],
    technologies: [
      { name: "Next JS", logo: "/logos/nextjs.svg" },
      { name: "The Movie DB API", logo: "/logos/the-movie-db.svg" },
      { name: "Javascript", logo: "/logos/javascript.svg" },
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
    github: "https://github.com/julienLeMee/disney-clone",
  },
  // STAR WARS EMPIRE BASE
  {
    imageSrc: "/projects/star-wars-empire-base.png",
    title: "Star wars Imperial Base",
    description: [
      {
        title: "Three JS project",
        text: "A 3D interactive experience inspired by Star Wars.",
      },
    ],
    technologies: [
      { name: "Three JS", logo: "/logos/threejs.svg" },
      { name: "Javascript", logo: "/logos/javascript.svg" },
      { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
    ],
    keyFeatures: [
      {
        text: "Immersive 3D models and animations",
        icon: "/icons/cube-icon.svg",
      },
      {
        text: "WebGL-based real-time interactions",
        icon: "/icons/imac-icon.svg",
      },
      {
        text: "Dynamic environments and real-time updates",
        icon: "/icons/speed-icon.svg",
      },
    ],
    link: "https://star-wars-imperial-base.vercel.app/",
    github: "https://github.com/julienLeMee/star-wars-imperial-base",
  },
  // LA FERME DE NOVELLE
  {
    imageSrc: "/projects/la-ferme-de-novelle.jpeg",
    title: "La ferme de Novelle",
    description: [
      {
        title: "",
        text: "A website for a local farm featuring a map and store.",
      },
      { title: "OpenWeather API Integration", text: "Add live weather data" },
      {
        title: "Map Integration",
        text: "Interactive map integration using MapBox for easy navigation.",
      },
    ],
    technologies: [
      { name: "Next JS", logo: "/logos/nextjs.svg" },
      { name: "MapBox API", logo: "/logos/mapbox.svg" },
      { name: "OpenWeather API", logo: "/logos/openweathermap.png" },
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
    github: "https://github.com/julienLeMee/novelle-farm",
  },
  // LA BERJOTINE
  {
    imageSrc: "/projects/la-berjotine.jpg",
    title: "La Berjotine",
    description: [{ title: "", text: "A website for a French guesthouse." }],
    technologies: [
      { name: "Next JS", logo: "/logos/nextjs.svg" },
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
    ],
    link: "https://www.laberjotine.fr/",
    github: "https://github.com/julienLeMee/la-berjotine",
  },
];

export default projects;
