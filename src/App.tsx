import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
const App = () => {
  return <Router>
    {/*header*/}
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Cart' element={<Cart/>}/>

    </Routes>
  </Router>
}

export default App
