export function HomeEu() {
  return (
    <>
      <div className="md:ml-56" id="home">
        <h1 className="text-[#64ffda] mt-1 font-roboto-bold hover object-center text-left md:text-5xl">
          {' '}
          Olá, meu nome é Marcos Porto!
        </h1>
        <p className="text-[#ccd6f6] md:text-2xl uppercase text-left font-medium italic">
          Web Developer Full Stack
        </p>
        <p className="md:text-lg text-[#64ffda] mt-10 font-roboto ">
          Este é meu Website e Portfólio.
        </p>
        <p className="md:text-lg mt-2 text-white font-roboto md:mr-[20rem] text-justify mr-4">
          Atualmente estou em busca de uma oportunidade de crescer e agregar na
          área de desenvolvimento Full-Stack, unindo qualidade, eficácia e muito
          amor pelo que faço para que assim eu possa entregar os melhores
          resultados sem deixar de lado minha evolução como profissional. Estou
          estudando ReactJS, TypeScript, NextJS, Tailwind CSS, Fastify e NodeJS.
        </p>
        <hr className="mt-5 max-w-xs opacity-70"></hr>
        <div className="mt-5">
          <box-icon
            size="lg"
            color="#007acc"
            type="logo"
            name="typescript"
          ></box-icon>
          <box-icon
            size="lg"
            color="#61DBFB"
            type="logo"
            name="react"
          ></box-icon>
          <box-icon
            size="lg"
            color="green"
            name="nodejs"
            type="logo"
          ></box-icon>
          <box-icon
            size="lg"
            color="#FFA500"
            type="logo"
            name="css3"
          ></box-icon>
          <box-icon
            size="lg"
            color="#61DBFB"
            type="logo"
            name="tailwind-css"
          ></box-icon>
          <box-icon
            size="lg"
            color="#FFA500"
            name="html5"
            type="logo"
          ></box-icon>
        </div>
      </div>
    </>
  )
}
