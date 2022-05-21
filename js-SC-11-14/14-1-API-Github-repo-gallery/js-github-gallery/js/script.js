const overview = document.querySelector("div.overview");
const username = "GillianTrethewey";
const url = `https://api.github.com/users/${username}`;
//const ul = document.querySelector("ul.repo-list");

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
};

//userInfo(data);
//     const repos = await data.repos_url;
// for (let item of repos) {
//     console.log(item.name);
//     const li = document.createElement("li");
//     li.innerHTML = `<a href=${item.html_url}>${item.name}</a>`;
//     ul.append(li);
// }