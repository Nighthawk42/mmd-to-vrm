// Function to toggle the display of the video container
function toggleVideo(containerId, btnId) {
    var container = document.getElementById(containerId);
    var btn = document.getElementById(btnId);
    if (container.style.display === "none" || container.style.display === "") {
      container.style.display = "block";
      btn.textContent = "Hide Video";
    } else {
      container.style.display = "none";
      btn.textContent = "Show Video";
    }
  }
  
  // Set dynamic copyright date
  document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    var copyrightText =
      "© " + currentYear + " Your Name or Company. All rights reserved.";
    document.getElementById("copyright").textContent = copyrightText;
  });
  