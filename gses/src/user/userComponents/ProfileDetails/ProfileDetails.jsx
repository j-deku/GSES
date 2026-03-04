import React from "react";
import "./ProfileDetails.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const ProfileDetails = () => {
  const { user } = useContext(StoreContext);

  return (
    <div className="profile-details">
      <table cellPadding={5} cellSpacing={10} border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tr>
        <td>{user?.name}</td>
          <td>{user?.email}</td>
          {user?.avatar ? (
          <td>
            <img src={user?.avatar} alt="avatar" style={{width:50, borderRadius:"50%"}} />
          </td>
        ) : (
          <td>No Avatar</td>
        )}
        </tr>
      </table>
    </div>
  );
};

export default ProfileDetails;
