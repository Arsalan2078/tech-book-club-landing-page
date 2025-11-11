import styles from "./index.module.scss";

export default function SectionReadingJourney() {
  return (
    <section className={styles.section} id="section-reading-journey">
      <div className={styles.wrapper} data-container="lg">
        <h2 data-text-preset="2">Your tech reading journey</h2>

        <ol className={styles.list}>
          <li data-text-preset="6">Choose your membership tier</li>
          <li data-text-preset="6">Get your monthly book selection</li>
          <li data-text-preset="6">Join our discussion forums</li>
          <li data-text-preset="6">Attend exclusive meetups</li>
        </ol>
      </div>
    </section>
  );
}
