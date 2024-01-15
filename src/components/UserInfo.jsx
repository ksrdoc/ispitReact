import React from "react";
import PropTypes from "prop-types";

const UserForm = ({ githubUser: { avatar_url, name, location, bio } }) => {
  return (
    <div>
      <h3>User information</h3>
      <img src={avatar_url} alt="" />
      <p>Avatar-url - {avatar_url}</p>
      <h2>Name - {name}</h2>
      <p>Location - {location}</p>
      <p>Bio - {bio}</p>
    </div>
  );
};

UserForm.propTypes = {
  githubUser: PropTypes.object,
};

export default UserForm;
