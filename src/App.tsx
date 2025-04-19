import "./App.css";
import { About, Footer, Header, Home } from "./components";
import { Routes, Route } from "react-router-dom";
import AboutApi from "./components/About/AboutApi";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-grBody">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/about-api" element={<AboutApi />}/>
        </Routes>
      </main>
      <Footer />
      </div>
    </>
  );
}
