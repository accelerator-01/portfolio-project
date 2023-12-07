import LinkButton from "../ui/LinkButton";
import NavBar from "../ui/NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <LinkButton to="-1">&larr;Go Back</LinkButton>
      <div>
        <p>About me</p>
      </div>
    </div>
  );
}

export default About;
