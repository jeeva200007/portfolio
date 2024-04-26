import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
