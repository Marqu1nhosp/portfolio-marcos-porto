import { projects } from '../../../arrayProject.json'

export function CardProjetos() {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="mt-10 md:rounded-lg md:shadow-lg bg-[#64ffda] md:w-96"
        >
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <img
              className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
              src={project.image}
              alt={project.title}
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-bold mb-2">
              {project.title}
            </h5>
            <p className="text-gray-700 text-base font-roboto mb-4">
              {project.descriptionTechnologies}
            </p>
            <h5 className="mt-4 text-gray-900 text-xl font-bold mb-2">
              Idéia do projeto:
            </h5>
            <p className="text-gray-700 text-base font-roboto mb-4">
              {project.projectIdeia}
            </p>
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Ver projeto
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  )
}
