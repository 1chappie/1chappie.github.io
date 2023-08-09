const GITHUB_USERNAME = '1chappie';

async function fetchAllRepos() {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    return response.json();
}

async function fetchRepoTopics(repoName) {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/topics`, {
        headers: {
            Accept: 'application/vnd.github.mercy-preview+json'
        }
    });
    return response.json();
}

async function getValidRepos() {
    const allRepos = await fetchAllRepos();
    const showcaseRepos = [];
    const featuredRepos = [];

    for (const repo of allRepos) {
        const topics = await fetchRepoTopics(repo.name);
        if (topics.names.includes('showcase')) {
            let topics_clear = topics.names.filter((topic) => topic !== "showcase");
            showcaseRepos.push(
                {
                    name: repo.name,
                    link: repo.html_url,
                    description: repo.description,
                    topics: topics_clear,
                    lastCommitDate: repo.pushed_at
                }
            );
        }
        if (topics.names.includes('featured')) {
            let topics_clear = topics.names.filter((topic) => topic !== "featured");
            featuredRepos.push(
                {
                    name: repo.name,
                    link: repo.html_url,
                    description: repo.description,
                    topics: topics_clear,
                    lastCommitDate: repo.pushed_at
                }
            );
        }
    }

    return [showcaseRepos, featuredRepos];
}

function storeInLocalStorage(data) {
    const currentTime = new Date().getTime();
    const expiryTime = currentTime + (60 * 60 * 1000); // 1 hour in milliseconds

    localStorage.setItem("showcaseRepos", JSON.stringify({
        data: data[0],
        expiry: expiryTime
    }));
    localStorage.setItem("featuredRepos", JSON.stringify({
        data: data[1],
        expiry: expiryTime
    }));
}

function getFromLocalStorage() {
    const showcaseRepos = localStorage.getItem("showcaseRepos");
    const featuredRepos = localStorage.getItem("featuredRepos");
    if (!showcaseRepos) return null;

    const currentTime = new Date().getTime();

    if (currentTime > JSON.parse(showcaseRepos)["expiry"]) {
        localStorage.removeItem(showcaseRepos);
        localStorage.removeItem(featuredRepos);
        return null;
    }

    return [JSON.parse(showcaseRepos)["data"], JSON.parse(featuredRepos)["data"]];
}

export async function fetchCombinedRepos() {
    let data = getFromLocalStorage();
    if (!data) {
        data = await getValidRepos();
        storeInLocalStorage(data);
    }
    return [...data[0], ...data[1]].sort((a, b) => new Date(b.lastCommitDate) - new Date(a.lastCommitDate));
}

export async function fetchFeaturedRepos() {
    let data = getFromLocalStorage();
    if (!data) {
        data = await getValidRepos();
        storeInLocalStorage(data);
    }
    return data[1];
}

