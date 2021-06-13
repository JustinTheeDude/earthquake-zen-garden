import React from 'react';
import data from '../earthquake_data/earthquakedata.json';

const Profile = () => {
    const { profile } = data;

    return (
        <>
            <h2 className="heading">Profile</h2>
            <div className="profile-data">
                <img src={profile.avatarImage} className="profile-image" alt="Profile Avatar" />
                <table className="profile-table">
                    <tbody>
                        <tr>
                            <th>First name</th>
                            <td>{profile.firstName}</td>
                        </tr>
                        <tr>
                            <th>Last name</th>
                            <td>{profile.lastName}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{profile.phone}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{profile.email}</td>
                        </tr>
                        <tr>
                            <th>Bio</th>
                            <td>{profile.bio}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Profile;
