import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios";
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import {firstNameatom} from '../atom/atoms'
import { useSetRecoilState } from "recoil"            



export const Signin = ({setFirstname}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setbtnFirstname = useSetRecoilState(firstNameatom);
  const navigate = useNavigate();

    return <div className=" w-[100%] h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-softTeal w-80 text-center p-2 h-max px-4 shadow-3x-2xl">
        <Heading label={"Sign in"}/>
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={e => {
          setUsername(e.target.value);
        }}
         placeholder="xyz@gmail.com" label={"Email"} />
        <InputBox onChange={e => {
          setPassword(e.target.value);
        }} 
         placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/app/v1/user/signin", {
              username,
              password
            });
            
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }}
           label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}