import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4 bg-light vh-100 overflow-auto">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
