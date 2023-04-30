import Footer from "./components/Footer";
import Header from "./components/Header";
import Starship from "./components/Starship";
import MainPage from "./components/MainPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StarshipDetails from "./components/StarshipDetails";
import Test from "./components/Test";
import NotFound from "./components/NotFound";


function App() {

  
  return (
    
    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/starships" element={<Starship />} />
    <Route path="/test" element={<Test />} />
    <Route path="/starships/:id/*" element={<StarshipDetails />} />
    <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;