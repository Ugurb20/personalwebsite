import "./App.css";
import Navbar from "./components/nav";
import HeaderRow from "./rows/headerrow/headerrow.js";
import ProjectRow from "./rows/projectrow/projects";
import Footer from "./components/footer";
import NavModal from "./components/modal";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-body">
        <NavModal />
        <HeaderRow />
        <ProjectRow />
        <Footer />
      </div>
    </div>
  );
}

export default App;
