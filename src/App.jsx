import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import Home from "./pages/home/Home"
import { useState } from "react"
function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Dashboard sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />} >
            {/* Index Page  */}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
