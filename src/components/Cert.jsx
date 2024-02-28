import Marquee from "react-fast-marquee";

function Cert() {
  return (
    <div className="border">
      <h1 className="text-bold text-center font-mono text-white underline">
        Certificate:
      </h1>
      <Marquee className="my-2 p-5">
        <img
          className="h-48 w-56"
          src="/Certificate-of-Beginner-Web-Develoeper.jpg"
        />

        <img
          src="/Certificate-of-Beginner-Ethical-Hacker.jpg"
          className="h-48 w-56"
        />

        <img className="h-48 w-56" src="/Certificate-of-Learning-React.jpg" />

        <img
          className="h-48 w-56"
          src="/Certificate-of-Learn-Penetration-Testing.jpg"
        />
        <img className="h-48 w-56" src="/Certificate-of-learn-Wireshark.jpg" />

        <img className="h-48 w-56" src="/Certificate-of-Red-Teaming.jpg" />

        <img className="h-48 w-56" src="/Certificate-of-Learn-Scanning.jpg" />
      </Marquee>
    </div>
  );
}

export default Cert;
