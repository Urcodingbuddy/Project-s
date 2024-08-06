import { AppBar } from "@/components/Appbar";
import {VideoGrid} from "../components/VideoGrid";
import { SideBar } from "@/components/Sidebar";
export const Main = () =>{
    return <div className="flex">
        <SideBar/>
        <VideoGrid/>
    </div>
}