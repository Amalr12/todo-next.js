import Link from "next/link";

export default function Hero() {
    return (
     
            <div className="flex min-h-[60vh] md:min-h-screen pt-30  justify-center  rounded-t-none " style={{
                backgroundImage: "url('/pexels-photo-1226398.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>


                <div className="flex flex-col items-center justify-center h-full bg-transparent bg-opacity-70 rounded-lg p-10 mt-10">
                    <h1 className=" text-black text-6xl font-bold">TODO's</h1>
                  <Link href="/dashboard">  <button className="focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-500 text-white px-4 py-2 rounded mt-4">Go to Dashboard</button></Link>
                </div>

            </div>
    )
};