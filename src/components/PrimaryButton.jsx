import styles from "./Button.module.css";

function PrimaryButton({ text, color }) {
  return (
    <button className={styles.buttonStyling} style={color === "" ? {} : color}>
      {text}
    </button>
  );
}

export default PrimaryButton;
