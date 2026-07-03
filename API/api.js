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



// ===================================== //
//            RACCOONCLOUD API           //
// ===================================== //
