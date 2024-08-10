import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"



export const Dashboard = () => {
    
    return <div >
        <Appbar/>
        <div className="m-8 ">
            <Balance value={"100"} />
            <Users className="bg-blue-100 rounded-3xl"></Users>
        </div>
    </div>
}