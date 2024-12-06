import { useState, useEffect } from "react";
import "./home.css";
import backgroundImage1 from "../../assets/img_bg_1-PzvG2r05.jpg";
import backgroundImage2 from "../../assets/img_bg_2-DzCs5o-0.jpg";

const slides = [
  {
    id: 1,
    title: "Hi!",
    user: "Im Jackson",
    buttonLabel: "Download CV",
    icon: "fa-solid fa-download",
    imageUrl: backgroundImage1,
  },
  {
    id: 2,
    title: "I am",
    user: "a Designer",
    buttonLabel: "View Profile",
    icon: "fa-solid fa-briefcase",
    imageUrl: backgroundImage2,
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home position-relative vh-100 w-100 overflow-hidden col">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}>
          <h1>{slide.title}<br /> {slide.user}</h1>
          <p className="mb-4">100% html5 bootstrap templates Made By <span className="company-name">Colorlib.com</span></p>
          <button className="bg-transparent">{slide.buttonLabel} <i className={`mx-1 ${slide.icon}`}></i></button>
        </div>
      ))}
    </div>
  );
};

export default Home;
