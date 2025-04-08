import React from 'react';

function UserInfo({ userData }) {
    return (
        <div>
            <h1>Dear {userData.firstName},</h1>
            <p>Unfortunately, you are not online. Kindly react to this message on your mobile phone.</p>
        </div>
    );
}

export default UserInfo;
