function Portfolio() {
  return (
    <div className="container mx-auto border text-center">
      <h1 className="text-bold text-center font-mono text-white underline">
        Projects:
      </h1>
      <div className="mb-3 flex">
        <div className="flex-wrap">
          <h1 className="ml-3 font-serif text-lg text-white">
            Fast React Pizza Co.
          </h1>
          <a href="https://fast-react-pizza-blond.vercel.app/" target="_blank">
            <img
              className="mb-3 h-full w-full object-contain"
              src="/Fast-React-Pizza-Co.jpeg"
            />
          </a>
        </div>
      </div>

      <div className="mb-3 flex">
        <div className="flex-wrap">
          <h1 className="ml-3 font-serif text-lg text-white">
            World Wise Project
          </h1>
          <a href="https://world-wise-project.vercel.app/" target="_blank">
            <img
              className="mb-3 h-full w-full object-contain"
              src="/world-wise-project.jpeg"
            />
          </a>
        </div>
      </div>
      <div className="mb-3 flex">
        <div className="flex-wrap">
          <h1 className="ml-3 font-serif text-lg text-white">
            Real Estate Project (on going)
          </h1>
          <a
            href="https://real-estate-project-omega.vercel.app/"
            target="_blank"
          >
            <img
              className="mb-3 h-full w-full object-contain"
              src="/real-estate-project.jpeg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
