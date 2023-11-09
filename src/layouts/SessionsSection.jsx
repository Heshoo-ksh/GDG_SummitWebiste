import React, {useState} from "react";
import './session.css';


function SessionsSection() {
  //track active tab
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['AI/ML', 'Mobile', 'Fullstack', 'Miscellaneous'];
  return (
    <section
      id="sessions"
      className="flex h-screen flex-col items-center bg-blue-400 p-10" 
    >
      <h1 className="font-sans text-4xl font-bold italic text-white">Sessions</h1>
      <div className="mt-4 inline-flex space-x-2 rounded-md bg-black">
      {tabs.map((tab, index) =>(
        <React.Fragment key={tab}>
        {/*blue dividers */}
        {index !== 0 && <div className="mt-3 h-5 w-1 bg-blue-500"/>}


        <button key = {tab}
        className={`rounded-md px-3 py-2 text-lg font-medium transition-colors duration-300 focus:outline-none ${
          activeTab === index ? 'bg-blue-600 text-white' : 'bg-black text-white'
        }`}
        onClick={() => setActiveTab(index)} >
          {tab}
          {activeTab === index && (
            <div className="triangle"></div>
          )}
          </button>
          </React.Fragment>
      ))}        
      </div>

     {/* panels */}
     <div className="mt-5">
        {activeTab === 0 && <div>{/*AI/ML CONTENT PANELS */} </div>}
        {activeTab === 1 && <div>{/*CONTENT FOR MOBILE PANEL */} </div>}
        {activeTab === 2 && <div>{/*FULLSTACK PANEL */} </div>}
        {activeTab === 3 && <div>{/*Miscellaneous Panel */} </div>}
    </div>
    </section>
  );
}

export default SessionsSection
