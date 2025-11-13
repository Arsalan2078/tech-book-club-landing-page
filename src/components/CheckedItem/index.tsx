import type { ReactNode } from "react";
import styles from "./index.module.scss";

interface CheckedItemProps {
  children: ReactNode;
  isSmall?: boolean;
  isDark?: boolean;
}

const CheckedItem = ({
  children,
  isSmall = false,
  isDark = false,
}: CheckedItemProps) => {
  return (
    <li
      className={styles.item}
      data-marker-small={isSmall || undefined}
      data-marker-dark={isDark || undefined}
    >
      {children}
    </li>
  );
};

export default CheckedItem;
