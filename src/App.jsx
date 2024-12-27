
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import NavBar from "./components/NavBar"
import { MovieProvider } from "./contexts/MovieContexts"





function App() {
  
  return (
    <div className="min-h-screen py-4 px-3 sm:py-6">
      <MovieProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
      </MovieProvider>
    
      
    </div>
  )
}

export default App
