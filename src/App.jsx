
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Listarticle from "./components/articles/Listarticle"
import Listcategorie from "./components/categories/Listcategorie"
import Listscategorie from "./components/scategories/Listscategorie"
import Menu from "./components/Menu"
function App() {

  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/articles" element={<Listarticle />} />
          <Route path="/categories" element={<Listcategorie />} />
          <Route path="/scategories" element={<Listscategorie />} />


        </Routes>
      </Router>
    </>
  )
}

export default App
