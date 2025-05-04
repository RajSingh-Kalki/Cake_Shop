const videos = ["video1.mp4", "video2.mp4", "video3.mp4"];
const videoElement = document.getElementById("cakeVideo");

function changeVideo() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    videoElement.src = videos[randomIndex];
}

setInterval(changeVideo, 5000); // Change video every 5 seconds