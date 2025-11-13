import styles from "./index.module.scss";
import Button from "../Button";
import Icon from "../Icon";
import TotalTestimonial from "../TotalTestimonial";

export default function Footer() {
  return (
    <footer className={`${styles.footer} pattern--dark`} id="footer" data-x-padding>
      <div className={styles.wrapper} data-container="lg">
        <div data-container="sm">
          <h2 data-text-preset="2">Ready to debug your reading list?</h2>

          <div>
            <Button href="#section-membership-options">
              Review membership options <Icon icon="arrow-up" />
            </Button>

            <TotalTestimonial />
          </div>
        </div>

        <div data-text-preset="7">
          <div>© 2024 - Tech Book Club</div>

          <ul className={styles.socmeds}>
            <li>
              <a href="#">
                <Icon icon="bluesky" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon icon="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
