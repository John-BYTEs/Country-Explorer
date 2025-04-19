import { useState } from "react";

export default function Search(){
      const [search, setSearch] = useState('');

    return(
        <>
            <div className="flex items-center flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between">
                <div className="flex items-center w-80 2xl:w-[28rem] sm:w-96 text-gray-900 shadow-md space-x-2 dark:text-lightelem bg-white rounded-sm 2xl:px-6 2xl:py-5 px-4 py-3 dark:bg-darkelem">
                    <svg className="h-6 w-6 " fill="none" viewBox="0 0  24 24 " stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <input type="text" className="bg-transparent outline-none font-bold font-mono" placeholder="Search for a country..." value={search}
        onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <div>
                    <div className="relative text-left z-50">
                        <div>
                            <button className="flex w-60 2xl:w-60 transition text-gray-800 items-center justify-center hover:opacity-90 dark:bg-darkelem bg-white shadow-md rounded-sm text-m font-bold font-mono 2xl:px-5 2xl:py-3 px-3 py-2 dark:text-vistBlue  ">
                                Filter By Region
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}