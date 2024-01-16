import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";

function Homepage() {
  return (
    <>
      <NavBar />
      <div className="pt-5">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-xl font-semibold text-yellow-400 md:text-xl">
                Halo there!👋, My name{" "}
                <span className="mx-0 block text-4xl font-bold text-slate-800 lg:text-xl">
                  Ahmad Firdaus
                </span>
              </h1>
              <h2 className="mb-5 text-lg font-medium text-slate-800 lg:text-2xl">
                Full-stack Web Developer
              </h2>
              <p className="mb-10 font-medium leading-relaxed text-slate-800">
                Having an experiece as Developer for one year.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos aliquam perspiciatis culpa suscipit possimus, ipsam
                porro cumque exercitationem quisquam officia, amet saepe soluta
                modi mollitia.
              </p>

              <a className="rounded-xl bg-indigo-500 px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-indigo-700 hover:shadow-lg">
                Contact Me!
              </a>
            </div>
          </div>
        </div>
        <div className="w-full self-end px-4 lg:w-1/2">
          <div className="mt-10">
            <img
              src="/Images/no-bg.png"
              alt="ahmd-frds"
              className="mx-auto max-w-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
