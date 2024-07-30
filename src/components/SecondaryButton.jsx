import styles from "./Button.module.css";

function SecondaryButton({ text, color }) {
  return (
    <button
      className={styles.buttonStyling}
      style={{
        backgroundColor: "transparent",
      }}
    >
      {text}
    </button>
  );
}

export default SecondaryButton;
