import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div className="lg:flex">
            <div className="lg:w-64 min-h-screen bg-blue-400">
                <div className="my-20">
                    <img className="w-20 rounded-full mx-auto" src={user.photoURL} alt="" />
                    <div className="font-semibold text-center text-gray-800 my-5">
                        <p>{user.displayName}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
                <ul className="menu lg:text-lg font-bold">
                    <li>
                        <NavLink to="/dashboard/addtask">Task Input</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/viewtask">Task List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            </div>


            <div className="flex-1 p-5">
                <h1 className="text-4xl text-center font-bold">Dashboard</h1>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;