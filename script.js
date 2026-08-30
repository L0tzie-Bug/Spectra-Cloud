async function LatestCommit(owner, repo, filePath) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const commitSha = data[0].sha;
    const cdnUrl = `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${commitSha}/${filePath}`;
    const fileResponse = await fetch(cdnUrl);
    const fileContent = await fileResponse.text();
    const script = document.createElement('script');
    script.textContent = fileContent;
    document.body.appendChild(script);
    return fileContent;
  } catch (error) {
  }
}
LatestCommit('l0tzie-bug', 'Spectra-Cloud', 'main.js');
