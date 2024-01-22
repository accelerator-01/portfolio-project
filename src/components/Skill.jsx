function Skill() {
  return (
    <div className="container mx-auto border p-5">
      <h1 className="font-mono text-xl text-white underline">Skills</h1>
      <div className="my-5 flex gap-4">
        <h2 className="text-bold font-mono text-white">
          Programming Language:
        </h2>
        <img
          src="https://simpleicons.vercel.app/javascript/F7DF1E"
          alt="Javascript img"
          width="40px"
        />
        <img
          src="https://simpleicons.vercel.app/python/3776AB"
          alt="Python img"
          width="40px"
        />
        <img
          src="https://simpleicons.vercel.app/go/00ADD8"
          alt="Go img"
          width="40px"
        />
      </div>
      <div className="my-5 flex gap-4">
        <h2 className="text-bold font-mono text-white">Framework:</h2>
        <img
          src="https://simpleicons.vercel.app/react/61DAFB"
          alt="React img"
          width="40px"
        />
        <img
          src="https://simpleicons.vercel.app/redux/764ABC"
          alt="redux"
          width="40px"
        />
        <img
          src="https://simpleicons.vercel.app/tailwindcss/06B6D4"
          alt="tailwind css"
          width="40px"
        />
        <img
          src="https://simpleicons.vercel.app/nodedotjs/339933"
          alt="NodeJs img"
          width="40px"
        />
        {/* <img
          src="https://simpleicons.vercel.app/mongodb/47A248"
          alt="MongooDB img"
          width="40px"
        /> */}
      </div>
      <div className="my-5 flex gap-4">
        <h2 className="text-bold font-mono text-white">Operating System:</h2>
        <img
          src="https://simpleicons.vercel.app/linux/FCC624"
          alt="Linux img"
          width="40px"
        />
        <img
          src="https://simpleicons.vercel.app/windows10/0078D6"
          alt="Windows img"
          width="40px"
        />
      </div>
    </div>
  );
}

export default Skill;
