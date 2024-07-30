import Particle from "./Particle";
import styles from "./ParticleFrame.module.css";

function ParticleFrame({ numParticles, radius }) {
  return (
    <div className={styles.particleframe}>
      {Array(numParticles)
        .fill(1)
        .map((item, index) => (
          <Particle radius={radius} key={`particle-${index}`} />
        ))}
    </div>
  );
}

export default ParticleFrame;
