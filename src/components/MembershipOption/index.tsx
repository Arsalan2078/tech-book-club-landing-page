import Button from "../Button";

type MembershipOptionProps = {
  name: string;
  price: number | "custom";
  perks: string[];
  cta: {
    link: string;
    text: string;
  };
};

export default function MembershipOption({
  name,
  price,
  perks,
  cta,
}: MembershipOptionProps) {
  return (
    <div>
      <div>
        <div data-text-preset="4">{name}</div>
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
            <li key={index}>{perk}</li>
          ))}
        </ul>
      </div>

      <Button href={cta.link}>{cta.text}</Button>
    </div>
  );
}
