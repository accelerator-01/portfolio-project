function Contact() {
  return (
    <div className="container mx-auto border p-5">
      <h1 className="text-bold font-mono text-white">Contact me on:</h1>
      <a
        href="https://ahmd.firdaus99@gmail.com"
        className="text-bold font-mono text-white underline"
      >
        ahmd.firdaus99@gmail.com
      </a>
      <div className="flex gap-3 py-2">
        <a href="https://wa.me/+6282232040664">
          <img
            width="40px"
            src="https://simpleicons.vercel.app/whatsapp/ffff"
          />
        </a>
        <a href="https://www.linkedin.com/in/ahmad-firdaus-652509194/">
          <img
            width="40px"
            src="https://simpleicons.vercel.app/linkedin/ffff"
          />
        </a>
        <a href="https://github.com/accelerator-01">
          <img width="40px" src="https://simpleicons.vercel.app/github/ffff" />
        </a>
        <br />
      </div>
    </div>
  );
}

export default Contact;
