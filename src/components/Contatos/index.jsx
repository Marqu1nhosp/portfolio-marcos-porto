export function Contatos() {
  return (
    <div className="flex justify-center items-center">
      <footer className="mt-32 text-center text-white">
        <div id="contatos" className="container pt-9">
          <div className="ml-10 flex justify-center mb-9">
            <a
              href="https://github.com/Marqu1nhosp"
              target="_blank"
              className="mr-9 text-gray-800 hover:scale-150 transition duration-300 ease-in-out"
              rel="noreferrer"
            >
              <box-icon
                type="logo"
                size="lg"
                color="#FFFFFF"
                name="github"
              ></box-icon>
            </a>

            <a
              href="https://www.instagram.com/marqu1nhosp/"
              target="_blank"
              className="mr-9 text-gray-800 hover:scale-150 transition duration-300 ease-in-out"
              rel="noreferrer"
            >
              <box-icon
                name="instagram"
                size="lg"
                color="#FFFFFF"
                type="logo"
              ></box-icon>
            </a>

            <a
              href="https://www.linkedin.com/in/marcos-porto-7135521b7/"
              target="_blank"
              className="mr-9 text-gray-800 hover:[] hover:scale-150 transition duration-300 ease-in-out"
              rel="noreferrer"
            >
              <box-icon
                className=""
                type="logo"
                size="lg"
                color="#FFFFFF"
                name="linkedin-square"
              ></box-icon>
            </a>
          </div>
        </div>

        <div className="text-center font-roboto text-white p-4">
          © 2023 Copyright Marcos Porto.
          <a className="text-white font-roboto" href="">
            {' '}
            All rights reserved{' '}
          </a>
        </div>
        <div className="text-center text-white p-4">
          Desenvolvido por{' '}
          <a className="text-[#64ffda] font-roboto">Marcos Porto</a>
        </div>
      </footer>
    </div>
  )
}
