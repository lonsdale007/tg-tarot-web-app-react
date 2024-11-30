import React from "react";
import '../styles/ProfilePage.css';
import { useTelegram } from "../hooks/useTelegram";

const ProfilePage = () => {

    const {user} = useTelegram();

    return (
        <div className="profile_page">
            <span className="user_name">{user?.first_name} {user?.last_name}</span>
        </div>
    );
};

export default ProfilePage;