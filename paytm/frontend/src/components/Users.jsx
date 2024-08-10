import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/app/v1/user/bulk?filter=" + filter)
            .then(response => {
                console.log(response.data);
                if (Array.isArray(response.data.user)) {
                    setUsers(response.data.user);
                } else {
                    console.error("Invalid data format", response.data);
                    setUsers([]);
                }
            }).catch(error => {
                console.error("Error fetching users:", error);
                setUsers([]);
            });
    }, [filter])

    return <div className="bg-blue-100 rounded-t-3xl">
        <div className="font-bold mt-7 text-lg ml-6 pt-2">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
        {users.length > 0 ? (
                    users.map(user => <User key={user._id} user={user} />)
                ) : (
                    <p>No users found.</p>
                )}
        </div>
    </div>
}

function User({user}) {
    console.log(user);

    const navigate = useNavigate();
    
    const userName = user.firstName ? user.firstName : "Unknown";

    return <div className="flex justify-between bg-blue-100 rounded-b-3xl">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    img
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                {userName} {user.lastName || ""}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstname);
            }} label={"Send Money"} />
        </div>
    </div>
}