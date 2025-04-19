import  logo  from "../../assets/logoCount.png";

export default function About(){
    return(
        <>
        <div className=" text-vistBlue">
            <img src={logo} alt="Globe" className="mx-auto my-2 w-60 mt-7"/>
            <h1 className="font-mono font-bold text-lg pt-2 text-center">About Country Explorer</h1>
                <div className="grid grid-cols-2 mt-1 text-center">
                    <div className="m-5 p-10 text-left">
                        <h5 className="font-bold mb-2">Country Explorer</h5>
                        <p>A ReactJS web application that fetches country data from a provided API endpoint, maps the data, and dynamically displays detailed information about a selected country. The application will leverage React components, hooks, and state management.</p>
                        <p className="font-bold mt-2">https://countries-api-abhishek.vercel.app/</p>
                    </div>
                    <div  className="mt-5 p-10 text-left">
                        <h5 className="font-bold mb-2">Project Description</h5>
                        <ul>
                            <li>-Data is fetched from an API.</li>
                            <li>-A specific country’s information is mapped and displayed dynamically (e.g., Afghanistan)</li>
                            <li>-Users can view details like name, capital, region, subregion, population, area, coordinates, borders, timezones, currency, languages, and flag.</li>
                            <li>-The app incorporates responsiveness and reusable components.</li>
                        </ul>
                    </div>
                </div>
        </div>
        </>
    )
}