import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Order from "./pages/Order/Order";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import RequireAuth from './components/RequireAuth/RequireAuth'


function App() {
  return (
    <>
      <Header />
      <main className="main-height pt-16  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/:serviceSlug" element={<ServiceDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/order"
            element={
              <RequireAuth>
                <Order />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}

export default App;
