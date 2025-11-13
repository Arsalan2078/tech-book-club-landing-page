import styles from "./index.module.scss";
import FiveStars from "../../FiveStars";

export default function SectionTestimonial() {
  return (
    <section id="section-testimonial" data-x-padding>
      <div className={styles.wrapper} data-container="md">
        <FiveStars />

        <figure>
          <blockquote data-text-preset="3">
            This book club transformed my technical reading from a solitary
            activity into an enriching community experience. The discussions are
            gold!
          </blockquote>

          <figcaption>Sarah Chen, Software Architect</figcaption>
        </figure>
      </div>
    </section>
  );
}
