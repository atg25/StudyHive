// Get all tab buttons and tab content areas
var tabBtns = document.querySelectorAll(".tab-btn");
var tabContents = document.querySelectorAll(".tab-content");

// Add click listeners to all tab buttons
for (var i = 0; i < tabBtns.length; i++) {
  tabBtns[i].addEventListener("click", function () {
    var tabName = this.dataset.tab;

    // Remove active class from all buttons
    for (var j = 0; j < tabBtns.length; j++) {
      tabBtns[j].classList.remove("active");
    }

    // Remove active class from all tab contents
    for (var k = 0; k < tabContents.length; k++) {
      tabContents[k].classList.remove("active");
    }

    // Add active class to clicked button
    this.classList.add("active");

    // Add active class to matching tab content
    document.getElementById(tabName).classList.add("active");
  });
}

// Load sample notes into textarea
var notesTextarea = document.getElementById("notes");
notesTextarea.value = sampleData.cs101.notes;

// Get elements
var generateBtn = document.getElementById("generateBtn");
var loading = document.getElementById("loading");
var summaryOutput = document.getElementById("summaryOutput");
var summaryText = document.getElementById("summaryText");
var toast = document.getElementById("toast");
var generatePodcastBtn = document.getElementById("generatePodcastBtn");
var podcastPlayer = document.getElementById("podcastPlayer");
var audioPlayer = document.getElementById("audioPlayer");
var audioSource = document.getElementById("audioSource");
var downloadPodcast = document.getElementById("downloadPodcast");

// Generate summary button
generateBtn.addEventListener("click", function () {
  generateBtn.disabled = true;
  loading.classList.add("active");
  summaryOutput.classList.remove("active");

  setTimeout(function () {
    loading.classList.remove("active");
    summaryOutput.classList.add("active");

    // Get summary text from sample data
    var summary = sampleData.cs101.summary;

    // Format bold text: **text** becomes <strong>text</strong>
    var formatted = summary.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    // Replace newlines with line breaks
    formatted = formatted.replace(/\n/g, "<br>");

    // Display formatted summary
    summaryText.innerHTML = formatted;

    showToast("Summary generated successfully!");
    generateBtn.disabled = false;
  }, 1000);
});

// Generate podcast button
if (generatePodcastBtn) {
  generatePodcastBtn.addEventListener("click", function () {
    generatePodcastBtn.disabled = true;
    generatePodcastBtn.textContent = "Generating Podcast...";

    setTimeout(function () {
      // Load audio file
      audioSource.src = "assets/audio/cs101-podcast.mp3";
      audioPlayer.load();

      // Set download link
      downloadPodcast.href = "assets/audio/cs101-podcast.mp3";
      downloadPodcast.download = "cs101-binary-search-podcast.mp3";

      // Show podcast player
      podcastPlayer.style.display = "block";

      generatePodcastBtn.disabled = false;
      generatePodcastBtn.textContent = "Generate Podcast";
      showToast("Podcast generated successfully!");
    }, 1500);
  });
}

// Show toast notification
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
}
