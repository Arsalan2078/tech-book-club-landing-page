import Button from "../Button";
import TotalTestimonial from "../TotalTestimonial";

export default function Header() {
  return (
    <header data-x-padding>
      <div data-container="lg">
        <h1 data-text-preset="1">Join the ultimate tech book club</h1>

        <p>
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </p>

        <Button href="#">Review Membership Options</Button>

        <TotalTestimonial />
      </div>
    </header>
  );
}
