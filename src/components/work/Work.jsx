import { useState } from "react";
import Heading from "../heading/Heading";
import "./work.css";
import image1 from "../../assets/work-1.jpg";
import image2 from "../../assets/work-2.jpg";
import image3 from "../../assets/work-3.jpg";
import image4 from "../../assets/work-4.jpg";
import image5 from "../../assets/work-5.jpg";
import image6 from "../../assets/work-6.jpg";

const categories = ["Graphic Design", "Apps", "Software"];
const works = [image1, image2, image3, image4, image5, image6];

function Work() {
  // State active category
  const [activeCategory, setActiveCategory] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleToggle = (category) => {
    setActiveCategory(category);
  };
  const handleShow = () => {
    setVisibleCount((val) => val + 2);
  };

  return (
    <div className="work position-relative min-vh-100 w-100 overflow-hidden col">
      <Heading headName="My Work" headTitle="Recent Work" />
      <ul className="cats list-unstyled d-flex justify-content-start grid gap-3 mb-3">
        {categories.map((category) => (
          <li className="g-col-6" key={category}>
            <a
              onClick={() => handleToggle(category)}
              className={`text-decoration-none fw-light ${
                activeCategory === category ? "active" : ""
              }`}
              href="#">
              {category}
            </a>
          </li>
        ))}
      </ul>
      <div className="row justify-content-center">
        {works.slice(0, visibleCount).map((work, index) => (
          <div key={index} className="col-lg-5 col-sm-10 grid gap-3 my-3">
            <div className="image-box g-col-6 position-relative">
              <div className="overlay position-absolute top start h-100 w-100 py-5 px-4 d-flex">
                <div className="overlay-head text-white">
                  <h3>Work 02</h3>
                  <span className="text-white-50">Animation</span>
                </div>
                <ul className="d-flex list-unstyled">
                  <li className="mx-1 px-2 py-1  text-white">
                    <i className="fa-solid fa-share-nodes"></i>
                  </li>
                  <li className="mx-1 p-1  text-white">
                    <i className="fa-regular fa-eye"></i> 100
                  </li>
                  <li className="mx-1 p-1  text-white">
                    <i className="fa-regular fa-heart"></i> 49
                  </li>
                </ul>
              </div>
              <img
                className="img-fluid position-absolute"
                src={work}
                alt="jack work"
              />
            </div>
          </div>
        ))}
        {visibleCount < works.length && (
          <div className="show d-flex w-100">
            <button
              type="button"
              className="show-more btn-info"
              onClick={handleShow}>
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
