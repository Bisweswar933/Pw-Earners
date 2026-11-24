import { Route, Routes } from "react-router";
import { AuthDashboard } from "./components/Dashboard";
import Navbar from "./components/Navbar";
import withAuth from "./utils/withAuth";
import { AuthProfile } from "./components/Profile";

function App() {

  let user = {
    name : "banty",
    role : "developer"
  }
  return (
    <div>
      {/* <Dashboard/> */}
      <Navbar />
      {/* <AuthDashboard/> */}
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/dashboard" element={<AuthDashboard />} />
        <Route
          path="/profile"
          element={<AuthProfile {...user} />}
        />
      </Routes>
    </div>
  );
}

export default App;