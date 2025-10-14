import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="Right-main flex-grow-1 p-4 vh-100 overflow-auto">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
