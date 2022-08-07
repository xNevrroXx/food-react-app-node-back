import { BrowserRouter, NavLink } from "react-router-dom";

import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";

//svg-icon
import {GiKnifeFork} from "react-icons/gi";
//styled components
import {Logo, Nav} from "./components/styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={"/"}>deliciousss</Logo>
        </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
