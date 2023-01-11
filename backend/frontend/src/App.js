import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
      <Router>
        <AuthProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
            <Route path='/login/' element={<Login/>}/>
            <Route path='/register/' element={<Register/>}/>
          </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;
