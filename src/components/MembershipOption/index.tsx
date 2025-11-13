import styles from "./index.module.scss";
import Button from "../Button";
import CheckedItem from "../CheckedItem";

type MembershipOptionProps = {
  name: string;
  price: number | "custom";
  perks: string[];
  cta: {
    link: string;
    text: string;
  };
  isTop?: boolean;
};

export default function MembershipOption({
  name,
  price,
  perks,
  cta,
  isTop = false,
}: MembershipOptionProps) {
  return (
    <div className={styles.option} data-top-option={isTop || undefined}>
      <div>
        <h3 data-text-preset="4">{name}</h3>
        <div data-text-preset="3">
          {price === "custom" ? (
            <>Custom</>
          ) : (
            <>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(price)}
              <span data-text-preset="5"> /month</span>
            </>
          )}
        </div>

        <hr />

        <ul>
          {perks.map((perk, index) => (
            <CheckedItem isSmall isDark={isTop} key={index}>
              {perk}
            </CheckedItem>
          ))}
        </ul>
      </div>

      <Button href={cta.link}>{cta.text}</Button>
    </div>
  );
}
