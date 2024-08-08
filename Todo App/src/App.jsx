import { RecoilRoot} from "recoil";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Dashboard} from "./components/Dashboard.jsx"
import {Landing} from "./components/Landing.jsx"
import '../src/index.css'



import './App.css'
function App() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
        <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Landing />} />
        </Routes>
        </BrowserRouter>
      </RecoilRoot>
      
    </div>
  )
  
}

export default App


