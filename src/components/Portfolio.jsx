function Portfolio() {
  return (
    <div className="container mx-auto border">
      <h1 className="text-bold text-center font-mono text-white underline">
        Projects:
      </h1>
      <div className="flex">
        <div className="flex-wrap">
          <h1 className="ml-3 font-serif text-lg text-white">
            Fast React Pizza Co.
          </h1>
          <a href="https://fast-react-pizza-blond.vercel.app/" target="_blank">
            <img
              className="mb-3 ml-3 h-64 w-80"
              src="/Fast-React-Pizza-Co.jpeg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
