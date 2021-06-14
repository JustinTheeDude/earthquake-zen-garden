import React from 'react';

const Profile = (props) => {
    const { avatarImage, firstName, lastName, phone, email, bio } = props.profiledata;

    return (
        <>
            <h2 className="heading">Profile</h2>
            <div className="profile-data">
                <img src={avatarImage} className="profile-image" alt="Profile Avatar" />
                <table className="profile-table">
                    <tbody>
                        <tr>
                            <th>First name</th>
                            <td>{firstName}</td>
                        </tr>
                        <tr>
                            <th>Last name</th>
                            <td>{lastName}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{phone}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <th>Bio</th>
                            <td>{bio}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Profile;
