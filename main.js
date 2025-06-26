function playVideo(device) {
  // Hide the choice screen
  const choiceScreen = document.getElementById("choice-screen");
  if (choiceScreen) choiceScreen.style.display = "none";

  // Show the video screen
  const videoScreen = document.getElementById("video-screen");
  if (videoScreen) videoScreen.style.display = "block";

  // Load and play the video
  const video = document.getElementById("intro-video");
  const source = document.getElementById("video-source");

  if (video && source) {
    source.src = "rock.mp4";
    video.load();
    video.play().catch(err => console.error("Playback failed:", err));

    // Redirect based on device type after video ends
    video.onended = function () {
      if (device === "mobile") {
        window.location.href = "mobile.html";
      } else if (device === "desktop") {
        window.location.href = "desktop.html"; // optional fallback
      } else {
        console.warn("Unknown device type. No redirect.");
      }
    };
  } else {
    console.error("Video or source element not found.");
  }
}