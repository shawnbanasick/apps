import image1 from "./assets/KADE-card-group.png";
import image2 from "./assets/Configurator card group.png";
import image3 from "./assets/EQ Web Sort card group.png";
import image4 from "./assets/Ken-Q card group.png";
import image5 from "./assets/Ken-Q Data card group.png";

import "./App.css";
import styled from "styled-components";

// overlay effect - https://www.youtube.com/watch?v=exb2ab72Xhs
// overlay effect - https://codepen.io/dcode-software/pen/XWXVYgR

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
        <ImageContainer>
          <div className="image">
            <img className="image__img" src={image1} alt="Kade" />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">KADE</div>
              <p class="image__description">Desktop Q-Sort Analysis Software</p>
              <p class="image__description">
                Description -- Download -- User Manual
              </p>
            </div>
          </div>
          <div className="image">
            <img className="image__img" src={image4} alt="Ken-Q Analysis" />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Ken-Q Analysis</div>
              <p class="image__description">Online Q-Sort Analysis Software</p>
              <div class="image__description">
                {" "}
                <a
                  className="App-link"
                  href="https://shawnbanasick.github.io/ken-q-analysis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
          <div className="image">
            <img className="image__img" src={image3} alt="EQ Web Sort" />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">EQ Web Sort</div>
              <p class="image__description">Online Q-sorting</p>
              <p class="image__description">
                Description -- Download -- User Manual
              </p>
            </div>
          </div>
          <div className="image">
            <img
              className="image__img"
              src={image2}
              alt="EQ Web Configurator"
            />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">EQ Web Configurator</div>
              <p class="image__description">
                Desktop Application for Setting Up an <br />
                EQ Web Sort Project
              </p>
              <p class="image__description">
                Description -- Download -- User Manual
              </p>
            </div>
          </div>
          <div className="image">
            <img
              className="image__img"
              src={image5}
              alt="EQ Web Configurator"
            />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Ken-Q Data</div>
              <p class="image__description">Online Data Conversion</p>
              <div class="image__description">
                {" "}
                <a
                  className="App-link"
                  href="https://shawnbanasick.github.io/ken-q-data/index.html#section1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </ImageContainer>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

const ImageContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.5rem;

  img {
    width: 45vw;
  }
`;
