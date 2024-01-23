import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Personal from "./components/Personal"
import Plans from "./components/Plans"


const App = () => {


  return (
    <div className="home">
      {/* <h1>Hello World</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/add-ons" element={<Personal />} />
          <Route path="/summary" element={<Personal />} />


        </Routes>
      </Router>

    </div>
  )
}

export default App
