import Heading from "../heading/Heading";
import "./about.css";
const services = [
  {
    icon: "fa-regular fa-lightbulb",
    iconColor: "#2c98f0",
    serviceTitle: "Graphic Design",
  },
  {
    icon: "fa-solid fa-earth-africa",
    iconColor: "#ec5453",
    serviceTitle: "Web Design",
  },
  {
    icon: "fa-solid fa-database",
    iconColor: "#f9bf3f",
    serviceTitle: "Software",
  },
  {
    icon: "fa-solid fa-mobile-screen",
    iconColor: "#a84cb8",
    serviceTitle: "Application",
  },
];
function About() {
  return (
    <div className="about position-relative min-vh-100 w-100 overflow-hidden col">
      <Heading headName="About Us" headTitle="Who am I?" />
      <p>
        <span className="fw-bold">Hi Im Jackson Ford </span>On her way she met a copy. The copy
        warned the Little Blind Text, that where it came from it would have been
        rewritten a thousand times and everything that was left from its origin
        would be the word and the Little Blind Text should turn around and
        return to its own, safe country.
      </p>
      <p>
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </p>
      <div className="row justify-content-center">
        {services.map((service, i) => (
          <div className="col-md-5 col-lg-3 col-sm-10" key={i}>
            <div className="serv-box bg-white mb-5" style={{borderBottomColor: service.iconColor}}>
              <i className={`${service.icon} fs-3`} style={{color: service.iconColor}}></i>
              <h3 className="fw-normal w-100">{service.serviceTitle}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
