import styles from "./index.module.scss";
import Icon from "../Icon";

export default function FiveStars() {
  return (
    <div className={styles.row}>
      <Icon icon="star" />
      <Icon icon="star" />
      <Icon icon="star" />
      <Icon icon="star" />
      <Icon icon="star" />
    </div>
  );
}
