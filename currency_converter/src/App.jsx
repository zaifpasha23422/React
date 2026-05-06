import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col rounded-2xl justify-center bg-blue-300 h-80">
        <div className="p-3">
          <div className=" px-4 py-2 flex rounded-t-2xl justify-between text-[7px] bg-white ">
            <h1>From</h1>
            <h1>currency type</h1>
          </div>
          <div className= "bg-white px-4 pb-2 rounded-b-2xl">
            <input className="w-120 outline-none" type="text" />
            <button className="">usd</button>
          </div>
        </div>
        <div className="p-3">
          <div className="flex justify-between text-[7px] rounded-t-2xl bg-white px-4 py-2">
            <h1>From</h1>
            <h1>currency type</h1>
          </div>
          <div className="bg-white px-4 pb-2 rounded-b-2xl">
            <input className="w-120 outline-none" type="text" />
            <button className="">usd</button>
          </div>
        </div>
        <div className="p-3">
          <button className="w-144  bg-blue-700 ">Convert USD TO INR</button>
        </div>
      </div> 
    </>
  );
}

export default App;
