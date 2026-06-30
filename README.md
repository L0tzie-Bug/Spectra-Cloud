<p align="center">
  <img src="https://kstuff.neocities.org/data_archive/spectra.png" width="150" height="150" style="background-color: black; border-radius: 50%; padding: 15px;" alt="Project Logo">
</p>

# Spectra
Cloud gaming service based on multiple combined services.

- *https://spectra.my-board.org (V1)*
- *https://l0tzie-bug.github.io/Spectra (V2 Unfinished)*

## Services in Use
- CloudMoon
- Raccoon Game
- Etc. (Any service featuring instant access)

## Devices We'll Offer
- Mobile
- PC (Windows, Linux)
*All in the cloud on other services' Cloud Gaming API.*

## Project Status

- [ ] **Environment & API Foundation**
  - [ ] Initialize each official API client or write custom HTTP fetch wrappers.
  - [ ] Implement an automated token refresh mechanism to handle session expiration for each service simultaneously.
  - [ ] Map all API endpoints required for virtual instance provisioning.
- [ ] **Authentication & Account Linking**
  - [x] Implement secure encryption for storing user-specific session tokens.
  - [x] Add account disconnection flows to wipe user data safely upon request.
- [ ] **Core Game Library Aggregation**
  - [x] Fetch the complete list of available game titles directly from the API catalog.
  - [ ] Build a mechanism that can list all games from multiple services, behaving similarly.
- [ ] **Session Management & Stream Launching**
  - [ ] Create the API controller to request and initialize a new gameplay instance.
  - [ ] Build a loading state handler to track instance spin-up times.
  - [ ] Extract the target WebRTC stream URLs or custom stream indicators from API payload response.
  - [ ] Design the frontend video canvas to capture and render the incoming API stream.
- [ ] **Controller & Input Mapping**
  - [ ] Map the standard Gamepad API inputs to match virtual control requirements.
  - [ ] mouse and keyboard event propagation inside the active stream container.
  - [ ] Implement touch screen overlay controls specifically optimized for CloudMoon mobile titles.
  - [ ] Build an input latency monitoring widget to track button-to-screen response times.
- [ ] **Session Termination & Cleanup**
  - [ ] Handle unexpected disconnections or network drops.
- [ ] **Multi-Service Expansion Prep**
  - [ ] methods like `launchGame()` and `endSession()` 

## Why?
- It helps to consolidate these services and reduce the search for such highly accessible cloud services.
- It's solely based on JavaScript and HTML, off of any public API URL these sites offer without CORS Protection.
