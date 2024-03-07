import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Gallery from "./pages/Gallery/Gallery"
import Plans from "./pages/plans/Plans"
import Trainers from "./pages/trainers/trainers"
import NotFound from "./pages/notFound/NotFound"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route index element={<Home />}></Route>
        <Route path='About' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='Plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='*' element={<NotFound/>}/>

       </Routes>
        <Footer />
       </BrowserRouter>

    </div>
  )
}

export default App
