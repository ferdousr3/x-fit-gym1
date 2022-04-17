import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <>
      <Header />
      <main className="main-height pt-16 container mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
