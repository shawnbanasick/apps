import ImageCards from "./Cards/Cards";
import "./App.css";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar>
          <div className="displayRow">
            <div className="margin-Right">S. Banasick </div>
            <div className="smallHeaderText">Q Methodology Software</div>
          </div>
          <div className="displayRow">
            <div className="margin-Right smallHeaderText">
              Teaching Software
            </div>
            <div className="smallHeaderText">Contact Me</div>
          </div>
        </HeaderBar>
        <Routes>
          <Route path="/" element={<ImageCards />} />
          <Route path="about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

const HeaderBar = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  color: #384047;
  font-size: calc(10px + 3vmin);
  width: 96%;
  padding: 0 1vw 0 1vw;
`;

/*
     

      */
