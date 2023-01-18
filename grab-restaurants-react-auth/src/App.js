import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Restaurants from "./pages/Restaurants";
import Register from "./pages/Register";
import Navbar from "./components/NavBar";
import Login from "./pages/Login";
import Profile from "./pages/Profile"
import AuthService from "./services/auth.service";
function App() {
  const currentUser = AuthService.getCurrentUser();
  const logOut = ()=>{
    AuthService.logOut();
  }
  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} logOut={logOut} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Register" element={<Register />} />
          <Route path="Update/:restaurantId" element={<Update />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
