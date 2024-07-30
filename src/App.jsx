import ParticleFrame from "./components/ParticleFrame";
import Label from "./components/Label";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import "./styles.css";

function App() {
  const skills = ["React.JS", "Next.JS", "Redux", "Python", "C++"];

  return (
    <>
      <ParticleFrame numParticles={10} radius={2} />
      <h1>Welcome, User.</h1>
      <div className="skillsInfo">
        <p>Thank you for visiting my webpage,</p>
        <p>I have listed some of my skills below.</p>
        <ul className="skills-labels">
          {skills.map((skill, index) => (
            <Label text={skill} key={index} />
          ))}
        </ul>
        <div className="action-buttons">
          <PrimaryButton text="FIND OUT MORE" color="" />
          <SecondaryButton text="CONTACT ME" color="#0088dd" />
        </div>
      </div>
    </>
  );
}

export default App;
