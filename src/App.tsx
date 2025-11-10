import Button from "./components/Button";
import MembershipOption from "./components/MembershipOption";
import TotalTestimonial from "./components/TotalTestimonial";

export default function App() {
  return (
    <div data-text-preset="5">
      <header>
        <h1 data-text-preset="1">Join the ultimate tech book club</h1>

        <p>
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </p>

        <Button href="#">Review Membership Options</Button>

        <TotalTestimonial />
      </header>

      <main>
        <section>
          <h2 data-text-preset="2">Read together, grow together</h2>

          <ul>
            <li>Monthly curated tech reads selected by industry experts</li>
            <li>Virtual and in-person meetups for deep-dive discussions</li>
            <li>Early access to new tech book releases</li>
            <li>Author Q&A sessions with tech thought leaders</li>
          </ul>
        </section>

        <section>
          <h2 data-text-preset="2">Not your average book club</h2>

          <p>
            Connect with a community that speaks your language - from{" "}
            <span data-semibold>Python</span> to{" "}
            <span data-semibold>TypeScript</span> and everything in between. Our
            discussions blend technical depth with practical applications.
          </p>
        </section>

        <section>
          <h2 data-text-preset="2">Your tech reading journey</h2>

          <ol>
            <li>Choose your membership tier</li>
            <li>Get your monthly book selection</li>
            <li>Join our discussion forums</li>
            <li>Attend exclusive meetups</li>
          </ol>
        </section>

        <section>
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
        </section>

        <section>
          <figure>
            <blockquote data-text-preset="3">
              This book club transformed my technical reading from a solitary
              activity into an enriching community experience. The discussions
              are gold!
            </blockquote>

            <figcaption>Sarah Chen, Software Architect</figcaption>
          </figure>
        </section>
      </main>

      <footer>
        <h2 data-text-preset="2">Ready to debug your reading list?</h2>

        <Button href="#">Review membership options</Button>

        <TotalTestimonial />

        <div data-text-preset="7">© 2024 - Tech Book Club</div>
      </footer>
    </div>
  );
}
