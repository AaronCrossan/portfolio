import styles from "./Label.module.css";

function Label({ text }) {
  return <div className={styles.label}>{text}</div>;
}

export default Label;
