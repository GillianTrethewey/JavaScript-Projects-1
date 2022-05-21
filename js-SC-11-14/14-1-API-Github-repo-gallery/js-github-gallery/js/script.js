const overview = document.querySelector("div.overview");
const username = "GillianTrethewey";
const url = `https://api.github.com/users/${username}`;
const repoList = document.querySelector(".repo-list");
const url2 = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;

const gitUserInfo = async function() {
    const userInfo = await fetch(url);
    const data = await userInfo.json();
    displayUserInfo(data);
};

gitUserInfo();

const displayUserInfo = function(data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
    <figure>
     <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div> 
    `;
    overview.append(div);
    gitRepos();
};

const gitRepos = async function () {
    const fetchRepos = await fetch(url2);
    const repoData = await fetchRepos.json();
    displayRepos(repoData);
}

const displayRepos = function(repos) {
    for (const repo of repos) {
        const repoItem = document.createElement("li");
        repoItem.classList.add("repo");
        repoItem.innerHTML = `<h3>${repo.name}</h3>`;
        repoList.append(repoItem);
    }
};

