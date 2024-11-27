import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
