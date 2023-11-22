import LinkButton from "../ui/LinkButton";
import NavBar from "../ui/NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <LinkButton to="-1">&larr;Go Back</LinkButton>
      <p>About me</p>
    </div>
  );
}

export default About;
