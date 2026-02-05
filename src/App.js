import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Projects from "./components/Projects/projects";
import Contacts from "./components/Contacts/contacts";
import Skills from "./components/Skills/skills";
import Experience from "./components/Experience/experience";
import Education from "./components/Education/education";
import Certifications from "./components/Certifications/certifications";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
