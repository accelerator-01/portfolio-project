import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Portfolio() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="container mx-auto">
      <h1 className="text-bold mb-5 text-center font-mono text-white underline">
        Projects:
      </h1>
      <Accordion className="mb-2 border px-4" open={open === 1}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="ml-3 justify-between font-serif text-lg text-white"
        >
          <a
            className="hover:text-blue-500 hover:underline"
            href="https://fast-react-pizza-blond.vercel.app/"
            target="_blank"
          >
            Fast React Pizza Co.
          </a>
          <span className="">Click here to see the preview</span>
        </AccordionHeader>
        <AccordionBody>
          <img
            className="mb-3 h-full w-full object-contain"
            src="/Fast-React-Pizza-Co.jpeg"
          />
        </AccordionBody>
      </Accordion>

      <Accordion className="mb-2 border px-4" open={open === 2}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="ml-3 justify-between font-serif text-lg text-white"
        >
          <a
            className="hover:text-blue-500 hover:underline"
            href="https://world-wise-project.vercel.app/"
            target="_blank"
          >
            World Wise Project
          </a>
          <span className="">Click here to see the preview</span>
        </AccordionHeader>
        <AccordionBody>
          <img
            className="mb-3 h-full w-full object-contain"
            src="/world-wise-project.jpeg"
          />
        </AccordionBody>
      </Accordion>

      <Accordion className="mb-2 border px-4" open={open === 3}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="ml-3 justify-between font-serif text-lg text-white"
        >
          <a
            className="hover:text-blue-500 hover:underline"
            href="https://real-estate-project-omega.vercel.app/"
            target="_blank"
          >
            Real Estate Project (on going)
          </a>
          <span className="">Click here to see the preview</span>
        </AccordionHeader>
        <AccordionBody>
          <img
            className="mb-3 h-full w-full object-contain"
            src="/real-estate-project.jpeg"
          />
        </AccordionBody>
      </Accordion>
      {/*
      <div className="mb-3 flex">
        <div className="flex-wrap">
          <h1 className="ml-3 font-serif text-lg text-white">
            Real Estate Project (on going)
          </h1>
          <a
            href="https://real-estate-project-omega.vercel.app/"
            target="_blank"
          >
            <img
              className="mb-3 h-full w-full object-contain"
              src="/real-estate-project.jpeg"
            />
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Portfolio;
