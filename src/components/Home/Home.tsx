import CountryDetails from "../CountryDetails/CountryDetails";
import DefaultResults from "./DefaultResults";
import Search from "./Search";

export default function Home() {
  let con = false;
    return (
      <>
        <div className="text-center mt-12">
            <div className="px-12 py-6 scroll-smooth">
              <Search  />
              {
                con ? <CountryDetails /> : <DefaultResults />
              }
            </div>
      </div>
      </>
    );
  }