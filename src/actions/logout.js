//rrd imports
import { redirect } from "react-router-dom";

//library
import { toast } from "react-toastify";

//helpers
import { deleteItem } from "../helpers";


export async function logoutAction() {
    //delete the user
    deleteItem( {key: "userName" })
    //alert("logged out");
    toast.success("You've deleted your Account!") //just a nicer alert :D
    
    //return redirect
    return redirect("/");
}