import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="Main-Box ">
      <div className="container-fluid My-container-fluid p-0">
        <div className="Main-container d-flex">
 <Sidebar />
        <div className="Right-main flex-grow-1 p-4 overflow-auto">
          <Dashboard />
        </div>
        </div>
       
      </div>

    </div>
  );
}

export default App;
