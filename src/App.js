import ImageCards from "./Cards/Cards";
import "./App.css";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import KadeDownloads from "./KADE/KadeDownloads";
import KadeDescription from "./KADE/KadeDescription";
import KadeUserManual from "./KADE/KadeUserManual";
import EqWebSortDescription from "./EqWebSort/EqWebSortDescription";
import EqWebSortDownloads from "./EqWebSort/EqWebSortDownloads";
import EqWebSortUserManual from "./EqWebSort/EqWebSortUserManual";
import EqWebConfigDescription from "./EqWebConfig/EqWebConfigDescription";
import EqWebConfigDownloads from "./EqWebConfig/EqWebConfigDownloads";
import EqWebConfigUserManual from "./EqWebSort/EqWebConfigUserManual";

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
            <div className="margin-Right smallHeaderText">Other Software</div>
            <div className="smallHeaderText">Contact Me</div>
          </div>
        </HeaderBar>
        <Content>
          <Routes>
            <Route path="/" element={<ImageCards />} />
            <Route path="Kade_Downloads" element={<KadeDownloads />} />
            <Route path="Kade_Description" element={<KadeDescription />} />
            <Route path="Kade_UserManual" element={<KadeUserManual />} />
            <Route
              path="EqWebSort_Downloads"
              element={<EqWebSortDownloads />}
            />
            <Route
              path="EqWebSort_Description"
              element={<EqWebSortDescription />}
            />
            <Route
              path="EqWebSort_UserManual"
              element={<EqWebSortUserManual />}
            />
            <Route
              path="EqWebConfig_Downloads"
              element={<EqWebConfigDownloads />}
            />
            <Route
              path="EqWebConfig_Description"
              element={<EqWebConfigDescription />}
            />
            <Route
              path="EqWebConfig_UserManual"
              element={<EqWebConfigUserManual />}
            />
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
