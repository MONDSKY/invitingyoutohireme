function playVideo(device) {
  // Hide the choice screen
  document.getElementById("choice-screen").style.display = "none";

  // Show video screen
  const videoScreen = document.getElementById("video-screen");
  videoScreen.style.display = "block";

  // Load and play video
  const video = document.getElementById("intro-video");
  const source = document.getElementById("video-source");

  source.src = "rock.mp4";
  video.load();
  video.play();

  // When video ends, redirect to corresponding version
  video.onended = function () {
    window.location.href = device === "mobile" ? "mobile.html" : "deskstop.html";
  };
}