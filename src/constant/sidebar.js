import { IoIosHome, IoIosAnalytics } from "react-icons/io";
import { IoPerson, IoLogOutOutline } from "react-icons/io5";

export const List_SideBar = [
    {
        text: "Overview", 
        icon: IoIosHome,
        link: "/overview"
    }, 
    {
        text: "Product", 
        icon: IoIosAnalytics, 
        link: "/product"
    }, 
    {
        text: "Customer", 
        icon: IoPerson, 
        link: "/customer"
    }, 
    {
        text: "Logout", 
        icon: IoLogOutOutline, 
        link: "/logout"
    }
]