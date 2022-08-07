import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

//pages
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={"/recipes/:id"} element={<Recipe/>} />
        <Route path={"/cuisine/:type"} element={<Cuisine/>} />
        <Route path={"/searched/:search"} element={<Searched/>} />
        <Route path={"/"} element={<Home/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages