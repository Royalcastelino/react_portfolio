import Layout from './components/Layout/layout';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Experience from './components/Experience/experience';
import Education from './components/Education/education';
import Certifications from './components/Certifications/certifications';
import Projects from './components/Projects/projects';
import Contacts from './components/Contacts/contacts';

function App() {
  return (
    <Layout>
      <Intro />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contacts />
    </Layout>
  );
}

export default App;
