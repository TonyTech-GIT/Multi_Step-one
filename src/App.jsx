import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Personal from "./components/Personal"
import Plans from "./components/Plans"
import AddOn from "./components/AddOn"
import Summary from './components/Summary'
import { useEffect, useState } from "react"


const App = () => {
  const [summaryDetails, setSummaryDetails] = useState({})
  const [testToggle, setTestToggle] = useState(null)

  const handleTestFunc = (newData) => {
    setSummaryDetails(newData)
  }

  const handleToggleFunc = (toggleData) => {
    setTestToggle(toggleData)

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
          <Route path="/add-ons" element={<AddOn />} />
          <Route path="/summary" element={<Summary resData={summaryDetails} toggleInfo={testToggle} />} />


        </Routes>
      </Router>

    </div>
  )
}

export default App
