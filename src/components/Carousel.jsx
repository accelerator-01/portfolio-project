import { useState } from "react";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      id: 0,
      image: "/Images/Certificate-of-Beginner-Ethical-Hacker.jpg",
    },
    {
      id: 1,
      image: "/Images/Certificate-of-Beginner-Web-Develoeper.pdf",
    },
    {
      id: 2,
      image: "/Images/Certificate-of-Learning-React.pdf",
    },
  ];

  const showSlide = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = slides.length - 1;
    const shouldResetIndex = activeIndex === lastIndex;
    const index = shouldResetIndex ? 0 : activeIndex + 1;
    showSlide(index);
  };

  const prevSlide = () => {
    const lastIndex = slides.length - 1;
    const shouldResetIndex = activeIndex === 0;
    const index = shouldResetIndex ? lastIndex : activeIndex - 1;
    showSlide(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`carousel-slide ${
              slide.id === activeIndex ? "active" : ""
            }`}
          >
            <img src={slide.image} alt={slide.caption} />
            <div className="carousel-caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <button className="carousel-prev" onClick={prevSlide}>
        Prev
      </button>
      <button className="carousel-next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

export default Carousel;
