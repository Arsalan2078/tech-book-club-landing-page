import styles from "./index.module.scss";

export default function SkipLinks() {
  return (
    <ul className={styles.skip}>
      <li>
        <a href="#main">Skip to main</a>
      </li>
      <li>
        <a href="#footer">Skip to footer</a>
      </li>
    </ul>
  );
}
