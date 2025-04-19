import "./App.css";
import { About, Footer, Header, Home, CountryDetails} from "./components";
import { Routes, Route } from "react-router-dom";
import AboutApi from "./components/About/AboutApi";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = "https://countries-api-abhishek.vercel.app/countries";
    axios.get(api).then((res) => {
      const all = res.data.data;
      setCountries(all);
      setLoading(false);
    })
  }, [])

  return (
    <>
      <div className="flex flex-col min-h-screen bg-grBody">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home countries={countries} loading={loading}/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/about-api" element={<AboutApi />}/>
          <Route path="/country/:name" element={<CountryDetails countries={countries}/>}/>
        </Routes>
      </main>
      <Footer />
      </div>
    </>
  );
}
