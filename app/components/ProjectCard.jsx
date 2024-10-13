export default function ProjectCard({ imageSrc, title, description, technologies, link }) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center rounded-lg shadow-lg p-5 w-80 transition-transform transform hover:scale-105"
      >
        <img src={imageSrc} alt={title} className="h-48 w-full object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* <span className="text-blue-500 hover:underline">View Project</span> */}
      </a>
    );
  }
