import "./experience.css";
import "../heading/Heading";
import Heading from "../heading/Heading";

const experiences = [
  {
    post: "Full Stack Developer",
    timePeriod: "2017-2018",
    postDesc:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
  },
  {
    post: "Front End Developer at Google Company",
    timePeriod: "2018-2020",
    postDesc:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  },
  {
    post: "System Analyst",
    timePeriod: "2021-2023",
    postDesc:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  },
];

function Experience() {
  return (
    <div className="experience position-relative min-vh-100 w-100 overflow-hidden col">
      <Heading headName="Experience" headTitle="Work Experience" />
      <ul className="jobs">
        {experiences.map((experience, i) => (
          <li key={i}>
            <div className="ex-title">
            <div className="post">{experience.post}</div>
            <span className="date text-black-50">{experience.timePeriod}</span>
            </div>
            <p className="post-desc text-black-50">{experience.postDesc}</p>
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default Experience;
