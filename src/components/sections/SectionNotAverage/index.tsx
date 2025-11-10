import Picture from "../../Picture";

export default function SectionNotAverage() {
  return (
    <section id="section-not-average" data-x-padding>
      <div data-container="lg">
        <div>
          <h2 data-text-preset="2">Not your average book club</h2>

          <p>
            Connect with a community that speaks your language - from{" "}
            <span data-semibold>Python</span> to{" "}
            <span data-semibold>TypeScript</span> and everything in between. Our
            discussions blend technical depth with practical applications.
          </p>
        </div>

        <figure>
          <Picture name="not-average" />
        </figure>
      </div>
    </section>
  );
}
