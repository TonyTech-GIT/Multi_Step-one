import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Personal from "./components/Personal"
import Plans from "./components/Plans"
import AddOn from "./components/AddOn"
import Summary from './components/Summary'


const App = () => {


  return (
    <div className="home">
      {/* <h1>Hello World</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/add-ons" element={<AddOn />} />
          <Route path="/summary" element={<Summary />} />


        </Routes>
      </Router>

    </div>
  )
}

export default App
