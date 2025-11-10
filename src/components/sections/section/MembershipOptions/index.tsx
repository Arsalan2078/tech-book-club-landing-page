import MembershipOption from "../../../MembershipOption";

export default function SectionMembershipOptions() {
  return (
    <section data-x-padding>
      <div data-container="md">
        <h2 data-text-preset="2">Membership options</h2>

        <ul>
          <li>
            <MembershipOption
              name="Starter"
              price={19}
              perks={["1 book/month", "Online forums"]}
              cta={{ link: "#", text: "Subscribe now" }}
            />
          </li>
          <li>
            <MembershipOption
              name="Pro"
              price={29}
              perks={["2 books/month", "Virtual meetups"]}
              cta={{ link: "#", text: "Subscribe now" }}
            />
          </li>
          <li>
            <MembershipOption
              name="Enterprise"
              price={"custom"}
              perks={["Team access", "Private sessions"]}
              cta={{ link: "#", text: "Talk to us" }}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
