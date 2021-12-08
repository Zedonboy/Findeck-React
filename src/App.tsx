import { Routes, Route, Link } from "react-router-dom";
import FindEth from "./pages/FindEth";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      {/* <Route path="/docs" element={<FindEth/>}></Route> */}
    </Routes>
  );
}

export default App;
