import { useEffect, useReducer } from "react";
import styles from "./Particle.module.css";

const minVelocity = 0.5;
const maxVelocity = 2;

function randomValue(max, min) {
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "setX":
      return { ...state, x: action.payload };

    case "setY":
      return { ...state, y: action.payload };

    case "reset":
      return {
        ...state,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        yVelocity: randomValue(maxVelocity, minVelocity),
      };
  }
}

function Particle({ radius }) {
  const initialState = {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    yVelocity: randomValue(maxVelocity, minVelocity),
    xVelocity: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { x, y, xVelocity, yVelocity } = state;

  useEffect(() => {
    const eventListener = window.addEventListener("resize", () => {
      dispatch({ type: "reset" });
    });

    return () => {
      removeEventListener("resize", eventListener);
    };
  }, [x, y]);

  useEffect(() => {
    const updateClock = setTimeout(() => {
      if (y > window.innerHeight) {
        dispatch({ type: "setX", payload: Math.random() * window.innerWidth });
        dispatch({ type: "setY", payload: -(radius * 2) });
      } else {
        dispatch({
          type: "setY",
          payload: y + yVelocity,
        });
      }
    }, 1000 / 60);

    return () => {
      clearTimeout(updateClock);
    };
  }, [x, y]);

  return (
    <img
      className={styles.particle}
      src="particle.svg"
      width={radius * 2}
      height={radius * 2}
      style={{ left: `${x}px`, top: `${y}px` }}
    />
  );
}

export default Particle;
