import  globePic  from "../../assets/globe.gif";

export default function DefaultResults(){
    return(
        <>
            <div className="mt-12 px-12 py-8 text-vistBlue font-bold font-mono text-3xl">
            <img src={globePic} alt="Globe" className="mx-auto my-2 w-60"/>
                <h1>Fetching...</h1>
            </div>
        </>
    )
}