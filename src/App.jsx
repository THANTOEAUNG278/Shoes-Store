import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./component/Layout";
import HomePage from "./pages/Home";
import CategoryPage from "./pages/Category";
import PopularPage from "./pages/Popular";
import AboutPage from "./pages/About";


const App =()=> {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Layout/>} >
        <Route index element = {<HomePage/>} />
        <Route path="category" element = {<CategoryPage/>} />
        <Route path="popular" element = {<PopularPage/>} />
        <Route path="popular" element = {<PopularPage/>} />
        <Route path="about" element = {<AboutPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App;