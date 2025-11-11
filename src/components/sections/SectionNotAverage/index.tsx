import styles from "./index.module.scss";
import Picture from "../../Picture";
import TechBrands from "../../TechBrands";

export default function SectionNotAverage() {
  return (
    <section id="section-not-average" data-x-padding>
      <div className={styles.wrapper} data-container="lg">
        <div className={styles.content}>
          <h2 data-text-preset="2">Not your average book club</h2>

          <p>
            Connect with a community that speaks your language - from{" "}
            <span data-semibold>Python</span> to{" "}
            <span data-semibold>TypeScript</span> and everything in between. Our
            discussions blend technical depth with practical applications.
          </p>
        </div>

        <figure>
          <Picture name="not-average" />
        </figure>

        <div className={styles.brands}>
          <TechBrands />
        </div>
      </div>
    </section>
  );
}
