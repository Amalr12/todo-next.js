export default function Dashboard() {
  return (
   <div className=" min-h-[60vh] md:min-h-screen pt-30  justify-center  rounded-t-none " style={{
                backgroundImage: "url('/dashbg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
  
    <h1 className="text-3xl font-bold p-10">Welcome to the Dashboard</h1>
    <div className="flex  items-center justify-center h-full bg-transparent bg-opacity-70 rounded-lg p-10 gap-3" >
        <input className="bg-white p-3 rounded" type="text" placeholder="Enter your task..." />
        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Add Task</button>
    </div>

    <div>
        <h2 className="text-2xl font-bold p-10">Your Tasks</h2>
        <ul className="list-disc list-inside">
            <li className="p-2">Task 1 - Time</li>
             
        </ul>
    </div>
   </div>
  );
}