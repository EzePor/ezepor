



const Footer = () => {
  return (
    <div className=" mt-auto ">
  <footer className="bg-colorOscuro mt-auto">
    <div className="max-w-7xl mt-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center h-16">
        <div className="mr-auto">
          <div className="flex-shrink-0">
            <a href="/" className="text-white">
              <img src="./iconos/EP_logo.png" alt="" className="w-6 md:w-10 h-auto bg-white rounded-md" />
            </a>
          </div>
        </div>
        <div className="flex items-center md:flex md:items-start justify-center md:p-1 space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-8">
            <a href="https://www.facebook.com/eze.porche?locale=es_LA" target="Blank" className="p-1 transition-transform transform-gpu hover:shadow-inner hover:bg-colorVerde focus:outline-none focus:ring focus:border-colorVerde rounded-lg">
              <img src="./iconos/facebookB.png" alt="" className="w-4 md:w-8 h-auto text-white" />
            </a>

            <a href="https://www.instagram.com/ezeporche/" target="Blank"  className="p-1 transition-transform transform-gpu hover:shadow-inner hover:bg-colorVerde focus:outline-none focus:ring focus:border-colorVerde rounded-lg">
              <img src="./iconos/instagramB.png" alt="" className="w-4 md:w-8 h-auto text-white" />
            </a>

            <a href="https://github.com/EzePor" target="Blank"  className="p-1 transition-transform transform-gpu hover:shadow-inner hover:bg-colorVerde focus:outline-none focus:ring focus:border-colorVerde rounded-lg">
              <img src="./iconos/githubB.png" alt="" className="w-4 md:w-8 h-auto text-white" />
            </a>
            
            <a href="https://www.linkedin.com/in/ezequiel-porchietto/" target="Blank"  className="p-1 transition-transform transform-gpu hover:shadow-inner hover:bg-colorVerde focus:outline-none focus:ring focus:border-colorVerde rounded-lg">
              <img src="./iconos/linkedinB.png" alt="" className="w-4 md:w-8 h-auto text-white" />
            </a>

            <div className="flex items-center space-x-2">
              <img src="./iconos/emailB.png" alt="" className="w-4 md:w-8 h-auto text-white p-1 transition-transform transform-gpu hover:shadow-inner hover:bg-colorVerde focus:outline-none focus:ring focus:border-colorVerde rounded-lg" />
              <h3 className="text-white">ezeporche@gmail.com.ar</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    )
}

export default Footer
  

