import React from "react";
import PropTypes from "prop-types";

const UserForm = ({ handleSubmitForm, profileName, setProfileName }) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="github-name">Github Username:</label>
      <br />
      <input
        type="text"
        name="github-name"
        id="github-name"
        placeholder="Enter Github username here"
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
      />
      <br />
      <button>DOHVATI</button>
    </form>
  );
};

UserForm.propTypes = {
  handleSubmitForm: PropTypes.func,
  profileName: PropTypes.string,
  setProfileName: PropTypes.func,
};

export default UserForm;
