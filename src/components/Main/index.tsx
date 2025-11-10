import SectionMembershipOptions from "../sections/SectionMembershipOptions";
import SectionNotAverage from "../sections/SectionNotAverage";
import SectionReadingJourney from "../sections/SectionReadingJourney";
import SectionReadTogether from "../sections/SectionReadTogether";
import SectionTestimonial from "../sections/SectionTestimonial";

export default function Main() {
  return (
    <main data-flow>
      <SectionReadTogether />
      <SectionNotAverage />
      <SectionReadingJourney />
      <SectionMembershipOptions />
      <SectionTestimonial />
    </main>
  );
}
