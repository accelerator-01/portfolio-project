function Contact() {
  return (
    <div className="container mx-auto border p-5">
      <h1 className="text-bold font-mono text-white">Contact me on:</h1>
      <div className="flex gap-3 py-2">
        <img
          width="40px"
          src="https://simpleicons.vercel.app/whatsapp/ffff"
          href="https://wa.me/+6282232040664"
        />
        <img
          width="40px"
          src="https://simpleicons.vercel.app/linkedin/ffff"
          href="https://www.linkedin.com/in/ahmad-firdaus-652509194/"
        />
        <img
          width="40px"
          src="https://simpleicons.vercel.app/github/ffff"
          href="https://github.com/accelerator-01"
        />
        <br />
      </div>
      <h1 className="text-bold font-mono text-white underline">
        ahmd.firdaus99@gmail.com
      </h1>
    </div>
  );
}

export default Contact;
