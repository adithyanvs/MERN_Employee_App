
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import {Routes,Route} from "react-router-dom"
import Editform from './components/Editform';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element ={<Home/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/edit/:id" element={<Editform/>} />
      </Routes>
     
    </>
    
  )
}

export default App;
