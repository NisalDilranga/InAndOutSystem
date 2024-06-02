
import Login from "./Components/Login/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDashBord from "./pages/MainDashBord";
function App() {


  return (

<>
<Router>
  <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/DashBoard" element={<MainDashBord />} />
  </Routes>
</Router>
</>

  )
}

export default App
