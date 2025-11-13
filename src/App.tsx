import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import SkipLinks from "./components/SkipLinks";

export default function App() {
  return (
    <div data-text-preset="5" data-container="xl" data-flow>
      <SkipLinks />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
