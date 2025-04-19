import { useNavigate } from "react-router-dom";
import { useState } from "react";

export interface CountryDataData{
  latitude: string;
  longitude: string;
}

export interface CountryData {
  name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  currency: string;
  flag: string;
  timezones: string;
  area: number;
  coordinates: CountryDataData[];
  languages: string[];
  borders: string[];
}

export interface CountryProps {
  countries: CountryData[];
  loading?: boolean;
}

export default function Home({ countries, loading }: CountryProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const country = countries.filter((cntry) => 
    cntry.name.toLowerCase().startsWith(query.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="px-12 py-6 scroll-smooth">
        <div className="flex items-center flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between">
          <div className="flex items-center w-80 2xl:w-[28rem] sm:w-96 text-gray-900 shadow-md space-x-2 dark:text-lightelem bg-white rounded-sm 2xl:px-6 2xl:py-5 px-4 py-3 dark:bg-darkelem">
            <input
              className="bg-transparent outline-none  "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search countries"
            />
          </div>
        </div>

        <div className="grid scroll-smooth sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 mt-5 gap-10 xl:gap-16">
          {query && (
              country.map((cntry) => (
                <div
                  key={cntry.name}
                  onClick={() => navigate(`/country/${cntry.name}`)}
                  className="bg-white rounded-md overflow-hidden cursor-pointer transition text-gray-900 shadow-md"
                
                >
                  <div>
                  <img src={cntry.flag} alt={cntry.name} />
                  </div>
                  <div className="font-semibold text-sm px-4 py-5 font-mono">
                  <p className="text-xl font-bold">{cntry.name}</p>
                    <p>
                      Population: 
                      <span>{cntry.population}</span>
                    </p>
                    <p>
                      Region:
                      <span>{cntry.region}</span> 
                    </p>
                    <p>
                      Capital:
                      <span>{cntry.capital}</span>
                    </p>
                  </div>
                </div>
              ))
          )}

          {!query && (
              countries.map((cntry) => (
                <div
                  key={cntry.name}
                  onClick={() => navigate(`/country/${cntry.name}`)}
                  className="bg-white rounded-md overflow-hidden cursor-pointer transition text-gray-900 shadow-md"
                >
                  <div>
                  <img src={cntry.flag} alt={cntry.name} />
                  </div>
                  <div className="font-semibold text-sm px-4 py-5 font-mono">
                  <p className="text-xl font-bold">{cntry.name}</p>
                    <p>
                      Population: 
                      <span>{cntry.population}</span>
                    </p>
                    <p>
                      Region:
                      <span>{cntry.region}</span> 
                    </p>
                    <p>
                      Capital:
                      <span>{cntry.capital}</span>
                    </p>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
}

//hover:scale-x-[1.02] hover:scale-y-[1.02]