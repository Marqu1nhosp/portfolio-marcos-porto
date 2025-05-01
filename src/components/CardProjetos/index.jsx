/* eslint-disable prettier/prettier */
import { projects } from "../../database/projects";

export function CardProjetos() {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-md mt-10 px-0 md:rounded-lg md:shadow-lg bg-[#0c2344] transition duration-300 hover:scale-105"
        >
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <img
              className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out md:w-96 md:h-56"
              src={project.image}
              alt={project.title}
            />
          </a>
          <div className="p-6">
            <h5 className="text-[#64ffda] text-xl font-bold mb-2">
              {project.title}
            </h5>
            <p className="text-[#ccd6f6] text-base font-roboto mb-4">
              {project.descriptionTechnologies}
            </p>
            <h5 className="mt-4 text-[#64ffda] text-xl font-bold mb-2">
              Idéia do projeto:
            </h5>
            <p className="text-[#ccd6f6] text-base font-roboto mb-4">
              {project.projectIdeia}
            </p>
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-[#007bff] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#0056b3] hover:shadow-lg focus:bg-[#007bff] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#004085] active:shadow-lg transition duration-150 ease-in-out"
              >
                Ver projeto
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
