

export default function CountryDetails(){
    
    return(
        <>
            <div className="mt-4  px-12 py-8">
                <div className="mt-10 space-y-10 md:space-y-0 gap-6 md:grid grid-cols-2 items-center">
                    <div className="flex items-center justify-center">flag</div>
                    <div className="dark:text-vistBlue">
                        <h1 className="font-bold  text-2xl text-left">Country Name</h1>
                        <div className="flex flex-col sm:flex-row mt-4 space-y-8 sm:space-y-0 sm:space-x-16 text-left font-bold ">
                            <div>
                                <p>Capital:</p>
                                <p>Region/Subregion:</p>
                                <p>Population:</p>
                                <p>Area:</p>
                                <p>Coordinates:</p>
                            </div>
                            <div>
                                <p>Timezones:</p>
                                <p>Currency:</p>
                                <p>Languages:</p>
                            </div>
                        </div>
                        <div className="mt-8 flex items-center flex-wrap font-bold">
                            Borders:
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}