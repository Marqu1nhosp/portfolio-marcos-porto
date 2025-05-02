/* eslint-disable prettier/prettier */
import { projects } from "../../database/projects";
import { Button } from "../Button";

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
              <Button name="Ver projeto" />:
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
