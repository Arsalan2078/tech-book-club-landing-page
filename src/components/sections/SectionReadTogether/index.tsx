import styles from "./index.module.scss";
import Picture from "../../Picture";
import CheckedItem from "../../CheckedItem";

export default function SectionReadTogether() {
  return (
    <section id="section-read-together" data-x-padding>
      <div className={styles.wrapper} data-container="lg">
        <div className={styles.content}>
          <h2 data-text-preset="2">Read together, grow together</h2>

          <ul>
            <CheckedItem>Monthly curated tech reads selected by industry experts</CheckedItem>
            <CheckedItem>Virtual and in-person meetups for deep-dive discussions</CheckedItem>
            <CheckedItem>Early access to new tech book releases</CheckedItem>
            <CheckedItem>Author Q&A sessions with tech thought leaders</CheckedItem>
          </ul>
        </div>

        <figure>
          <Picture name="read-together" />
        </figure>
      </div>
    </section>
  );
}
