import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { useState } from "react";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { Landing } from "./pages/Landing";
import {RecoilRoot} from 'recoil'


function App() {
  return (
    <><RecoilRoot>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup  />} />
          <Route path="/signin" element={<Signin  />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App