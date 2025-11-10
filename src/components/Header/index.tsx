import Button from "../Button";
import Icon from "../Icon";
import Logo from "../Logo";
import Picture from "../Picture";
import TotalTestimonial from "../TotalTestimonial";

export default function Header() {
  return (
    <header id="header" data-x-padding>
      <div data-container="lg">
        <nav>
          <Logo />
        </nav>

        <div>
          <div>
            <h1 data-text-preset="1">Join the ultimate tech book club</h1>

            <p>
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
          </div>

          <div>
            <Button href="#section-membership-options">
              Review Membership Options <Icon icon="arrow-down" />
            </Button>

            <TotalTestimonial />
          </div>
        </div>

        <figure>
          <Picture name="hero" />
        </figure>
      </div>
    </header>
  );
}
