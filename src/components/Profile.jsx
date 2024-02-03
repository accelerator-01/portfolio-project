import TypeIt from "typeit-react";

function Profile() {
  return (
    <div className="container mx-auto mb-5">
      <TypeIt className="font-sherif text-4xl font-bold text-white">
        Hello there! I&apos;m Ahmad Firdaus{" "}
      </TypeIt>
      <h2 className="mb-5 text-xl font-semibold text-white">
        Web Developer & Penetration Tester.
      </h2>
      <p className="font-mono text-lg text-white">
        Full-stack Developer and Cyber Security Enthusiast.
        <br />
        Experienced for building a website and vulnerability assessment.
      </p>
    </div>
  );
}

export default Profile;
