import LinkButton from "../ui/LinkButton";
import NavBar from "../ui/NavBar";

function Portfolio() {
  return (
    <div>
      <NavBar />
      <LinkButton to="-1">&larr;Go Back</LinkButton>
      <p>Portfolio Project</p>
    </div>
  );
}

export default Portfolio;
