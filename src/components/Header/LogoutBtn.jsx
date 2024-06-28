import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import {logout} from "../../store/authSlice"

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await authService.logout();
            dispatch(logout());
        } catch (error) {
            console.log("LogoutBtn :: handleLogout :: error",error);
        }
    }
    return (
        <div>
            <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Logout
            </button>
        </div>
    );
}

export default LogoutBtn;
