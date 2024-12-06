import "./skills.css";
import Heading from "../heading/Heading";

const skills = [
  {
    skillName: "Photoshop",
    progColor: "#2b97ef",
    skillPercent: "75%",
  },
  {
    skillName: "HTML5",
    progColor: "#f9bf3f",
    skillPercent: "85%",
  },
  {
    skillName: "WordPress",
    progColor: "#2fa499",
    skillPercent: "70%",
  },
  {
    skillName: "jQuery",
    progColor: "#ec5453",
    skillPercent: "60%",
  },
  {
    skillName: "CSS3",
    progColor: "#a84cb8",
    skillPercent: "90%",
  },
  {
    skillName: "SEO",
    progColor: "#4054b2",
    skillPercent: "80%",
  },
];

function Skills() {
  return (
    <div className="skills position-relative vh-100 w-100 overflow-hidden col">
      <Heading headName="My Specialty" headTitle="My Skills" />
      <p>
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text did not listen. She packed her seven versalia, put her
        initial into the belt and made herself on the way.
      </p>
      <div className="row my-5 justify-content-center">
        {skills.map((skill, i) => (
          <div className="prog-box col-md-5 col-lg-5 col-sm-10 position-relative" key={i} data-prog={skill.skillPercent} style={{color: skill.progColor}}>
            <h3>{skill.skillName}</h3>
            <div className="progress mt-2 mb-4"><span className="percent" style={{backgroundColor: skill.progColor, width: skill.skillPercent}}></span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
