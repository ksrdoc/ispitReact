export const getGithubProfile = (profileName) => {
  const url = `https://api.github.com/users/${profileName}`;
  return fetch(url).then((response) => resolveResponse(response));
};

export const getGithubProfileRepos = (profileName) => {
  const url = `https://api.github.com/users/${profileName}/repos`;
  return fetch(url).then((response) => resolveResponse(response));
};

function resolveResponse(response) {
  if (response.status === 200) return response.json();
  if (response.status === 403) throw new Error("Forbidden");
  throw new Error("Something went wrong!!!");
}
