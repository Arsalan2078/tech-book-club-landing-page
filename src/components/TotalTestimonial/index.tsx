import styles from "./index.module.scss";
import FiveStars from "../FiveStars";
import image from "/images/image-avatars.webp";

export default function TotalTestimonial() {
  return (
    <div className={styles.flex}>
      <img src={image} alt="Avatars of satisfied clients." width={110} />

      <div>
        <FiveStars />
        <div data-text-preset="7">200+ developers joined already</div>
      </div>
    </div>
  );
}
