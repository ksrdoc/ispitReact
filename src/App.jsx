import { useState } from "react";
import { getGithubProfile, getGithubProfileRepos } from "./services";
import { UserInfo, UserForm } from "./components";

function App() {
  const [profileName, setProfileName] = useState("");
  const [fetchedData, setFetchedData] = useState(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const profileNameTrimmed = profileName.trim();
    if (profileNameTrimmed.length < 1) return;
    Promise.all([
      getGithubProfile(profileName),
      getGithubProfileRepos(profileName),
    ]).then(([githubUser, githubUserRepos]) => {
      setFetchedData({ githubUser, githubUserRepos });
      setProfileName("");
      //fetchedData.githubUserRepos.map((repo) => {
      //  const id = repo.id;
      //  const name = repo.name;
      // });
      //Mozda mapiram tu listu reposa u nekom drugom zivotu
    });
  };

  return (
    <div className="container">
      <UserForm
        handleSubmitForm={handleSubmitForm}
        profileName={profileName}
        setProfileName={setProfileName}
      />
      {fetchedData && (
        <>
          <UserInfo githubUser={fetchedData.githubUser} />
          <div>
            <h2>User Repos</h2>
            <ul id="reposList"></ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
