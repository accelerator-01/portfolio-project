import LinkButton from "../ui/LinkButton";
import NavBar from "../ui/NavBar";

function Contact() {
  return (
    <div>
      <NavBar />
      <LinkButton to="-1">&larr;Go Back</LinkButton>
      <p>Contact me</p>
    </div>
  );
}

export default Contact;
