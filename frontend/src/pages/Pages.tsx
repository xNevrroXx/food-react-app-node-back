import { Route, Routes } from "react-router-dom";

//pages
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route path={"/recipes/:id"} element={<Recipe/>} />
      <Route path={"/cuisine/:type"} element={<Cuisine/>} />
      <Route path={"/searched/:search"} element={<Searched/>} />
      <Route path={"/"} element={<Home/>} />
    </Routes>
  )
}

export default Pages