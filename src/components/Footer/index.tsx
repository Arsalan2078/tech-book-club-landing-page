import Button from "../Button";
import TotalTestimonial from "../TotalTestimonial";

export default function Footer() {
  return (
    <footer data-x-padding>
      <div data-container="lg">
        <div data-container="sm">
          <h2 data-text-preset="2">Ready to debug your reading list?</h2>

          <Button href="#">Review membership options</Button>
        </div>

        <TotalTestimonial />

        <div data-text-preset="7">© 2024 - Tech Book Club</div>
      </div>
    </footer>
  );
}
