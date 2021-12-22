import ImageCards from "./Cards/Cards";
import "./App.css";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import KadeDownloads from "./KADE/KadeDownloads";
import KadeDescription from "./KADE/KadeDescription";
import KadeUserManual from "./KADE/KadeUserManual";

function App() {
  return (
    <div className="App">
      <Container className="App-header">
        <HeaderBar>
          <div className="displayRow">
            <div className="margin-Right">S. Banasick </div>
            <Link className="smallHeaderText" to="/">
              Q Methodology Software
            </Link>
          </div>
          <div className="displayRow">
            <div className="margin-Right smallHeaderText">
              Teaching Software
            </div>
            <div className="smallHeaderText">Contact Me</div>
          </div>
        </HeaderBar>
        <Content>
          <Routes>
            <Route path="/" element={<ImageCards />} />
            <Route path="Kade_Downloads" element={<KadeDownloads />} />
            <Route path="Kade_Description" element={<KadeDescription />} />
            <Route path="Kade_UserManual" element={<KadeUserManual />} />
          </Routes>
        </Content>
      </Container>
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
  height: 40px;
`;

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 96%%;
`;
