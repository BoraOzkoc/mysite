
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Hero from "./Hero";
import Contacts from "./Contacts";
import "./Header.css";
export default function Home() {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <Hero />
      <AboutMe />
      <Contacts />
    </div>
  );
}
