// ===================================== //
//             CLOUDMOON API             //
// ===================================== //
(async function CloudMoonAPIURL() {
  try {
    const response = await fetch('/Spectra-Cloud/API/CloudMoon.json');
    if (!response.ok) return null;
    const data = await response.json();
    const urls = data.CloudMoonAPIURLS || [];
    for (const url of urls) {
      try {
        const pingResponse = await fetch(`${url}/_ping`);
        if (!pingResponse.ok) continue;
        const pingData = await pingResponse.json();
        if (pingData?.code === "0" && pingData?.message === "pong") {
          window.workingCloudMoonUrl = url;
          return url;
        }
      } catch {}
    }
    return null;
  } catch {
    return null;
  }
})();

async function SetupCloudMoonToken(selectedServer) {
  try {
    const email = localStorage.getItem("cloudmoonemail");
    const password = localStorage.getItem("cloudmoonpassword");
    if (!email || !password) return;
    const baseUrl = window.workingCloudMoonUrl || "";
    const workingUrl = baseUrl.endsWith("/") ? `${baseUrl}login/pwd` : `${baseUrl}/login/pwd`;
    const response = await fetch(workingUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const result = await response.json();
    if (result.code === 0 && result.data?.token) {
      localStorage.setItem("cloudmoontoken", result.data.token);
      if (selectedServer) {
        localStorage.setItem("selectedServer", selectedServer);
      }
    }
  } catch (error) {
    console.error("error:", error);
  }
}



// ===================================== //
//            RACCOONCLOUD API           //
// ===================================== //
