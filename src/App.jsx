import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Personal from "./components/Personal"
import Plans from "./components/Plans"
import AddOn from "./components/AddOn"
import Summary from './components/Summary'
import { useEffect, useState } from "react"
import Appreciation from "./components/Appreciation"


const App = () => {
  const [summaryDetails, setSummaryDetails] = useState({})
  const [testToggle, setTestToggle] = useState(null)
  const [testAddon, setTestAddon] = useState([])

  const handleTestFunc = (newData) => {
    setSummaryDetails(newData)
  }

  const handleToggleFunc = (toggleData) => {
    setTestToggle(toggleData)

  }

  const handleAddonItems = (newAddon) => {
    setTestAddon(newAddon)
  }


  useEffect(() => {
    console.log('hello', summaryDetails);
  }, [summaryDetails])


  return (
    <div className="home">
      {/* <h1>Hello World</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/plans" element={<Plans setSummaryDetails={handleTestFunc} setCalToggle={handleToggleFunc} />} />
          <Route path="/add-ons" element={<AddOn addonToggle={testToggle} setAddonItems={handleAddonItems} />} />
          <Route path="/summary" element={<Summary resData={summaryDetails} toggleInfo={testToggle} resAddon={testAddon} />} />
          <Route path="/appreciation" element={<Appreciation />} />



        </Routes>
      </Router>

    </div>
  )
}

export default App
