import { Layout } from "./components/layout/layout";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about'
import Menu from "./pages/menu";
import Contact from './pages/contact'
import PageNotFound from './pages/pagenotfound'

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
