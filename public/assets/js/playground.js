// Variables
var currentCardIndex = 0;
var currentFlashcards = [];
var hasVoted = false;
var helpfulVotes = 0;
var notHelpfulVotes = 0;

// Get elements
var notesTextarea = document.getElementById("notes");
var generateBtn = document.getElementById("generateBtn");
var loading = document.getElementById("loading");
var summaryOutput = document.getElementById("summaryOutput");
var summaryText = document.getElementById("summaryText");
var thumbsUp = document.getElementById("thumbsUp");
var thumbsDown = document.getElementById("thumbsDown");
var helpfulCount = document.getElementById("helpfulCount");
var notHelpfulCount = document.getElementById("notHelpfulCount");
var shareBtn = document.getElementById("shareBtn");
var exportBtn = document.getElementById("exportBtn");
var makeCardsBtn = document.getElementById("makeCardsBtn");
var flashcard = document.getElementById("flashcard");
var cardQuestion = document.getElementById("cardQuestion");
var cardAnswer = document.getElementById("cardAnswer");
var cardCounter = document.getElementById("cardCounter");
var prevCard = document.getElementById("prevCard");
var nextCard = document.getElementById("nextCard");
var toast = document.getElementById("toast");
var generatePodcastBtn = document.getElementById("generatePodcastBtn");
var podcastPlayer = document.getElementById("podcastPlayer");
var audioPlayer = document.getElementById("audioPlayer");
var audioSource = document.getElementById("audioSource");
var downloadPodcast = document.getElementById("downloadPodcast");
var tabBtns = document.querySelectorAll(".tab-btn");
var tabContents = document.querySelectorAll(".tab-content");

// Tab switching
for (var i = 0; i < tabBtns.length; i++) {
  tabBtns[i].addEventListener("click", function() {
    var tabName = this.dataset.tab;
    
    // Remove active from all
    for (var j = 0; j < tabBtns.length; j++) {
      tabBtns[j].classList.remove("active");
    }
    for (var k = 0; k < tabContents.length; k++) {
      tabContents[k].classList.remove("active");
    }
    
    // Add active to clicked tab
    this.classList.add("active");
    document.getElementById(tabName).classList.add("active");
  });
}

// Load CS101 notes
notesTextarea.value = sampleData.cs101.notes;

// Generate summary button
generateBtn.addEventListener("click", function() {
  generateBtn.disabled = true;
  loading.classList.add("active");
  summaryOutput.classList.remove("active");
  
  setTimeout(function() {
    loading.classList.remove("active");
    summaryOutput.classList.add("active");
    
    // Get summary and format it
    var summary = sampleData.cs101.summary;
    var formatted = summary.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    formatted = formatted.replace(/\n/g, "<br>");
    summaryText.innerHTML = formatted;
    
    // Reset votes
    hasVoted = false;
    helpfulVotes = 0;
    notHelpfulVotes = 0;
    updateVoteCounts();
    thumbsUp.classList.remove("voted");
    thumbsDown.classList.remove("voted");
    
    showToast("Summary generated successfully!");
    generateBtn.disabled = false;
  }, 1000);
});

// Thumbs up button
thumbsUp.addEventListener("click", function() {
  if (hasVoted) return;
  helpfulVotes++;
  hasVoted = true;
  thumbsUp.classList.add("voted");
  updateVoteCounts();
  showToast("Thanks for your feedback!");
});

// Thumbs down button
thumbsDown.addEventListener("click", function() {
  if (hasVoted) return;
  notHelpfulVotes++;
  hasVoted = true;
  thumbsDown.classList.add("voted");
  updateVoteCounts();
  showToast("Thanks for your feedback!");
});

// Update vote counts
function updateVoteCounts() {
  helpfulCount.textContent = helpfulVotes;
  notHelpfulCount.textContent = notHelpfulVotes;
}

// Generate podcast button
if (generatePodcastBtn) {
  generatePodcastBtn.addEventListener("click", function() {
    generatePodcastBtn.disabled = true;
    generatePodcastBtn.textContent = "Generating Podcast...";
    
    setTimeout(function() {
      audioSource.src = "assets/audio/cs101-podcast.mp3";
      audioPlayer.load();
      downloadPodcast.href = "assets/audio/cs101-podcast.mp3";
      downloadPodcast.download = "cs101-binary-search-podcast.mp3";
      podcastPlayer.style.display = "block";
      
      generatePodcastBtn.disabled = false;
      generatePodcastBtn.textContent = "Generate Podcast";
      showToast("Podcast generated successfully!");
    }, 1500);
  });
}

// Share button
if (shareBtn) {
  shareBtn.addEventListener("click", function() {
    var url = window.location.origin + "/playground.html";
    navigator.clipboard.writeText(url).then(function() {
      showToast("Link copied to clipboard!");
    }).catch(function() {
      showToast("Failed to copy link");
    });
  });
}

// Export button
if (exportBtn) {
  exportBtn.addEventListener("click", function() {
    showToast("Export to PDF - Available in Plus tier ($10/mo)");
  });
}

// Make flashcards button
if (makeCardsBtn) {
  makeCardsBtn.addEventListener("click", function() {
    var flashcardLoading = document.getElementById("flashcardLoading");
    var flashcardOutput = document.getElementById("flashcardOutput");
    
    // Switch to flashcards tab
    for (var i = 0; i < tabBtns.length; i++) {
      tabBtns[i].classList.remove("active");
    }
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active");
    }
    tabBtns[1].classList.add("active");
    document.getElementById("flashcards").classList.add("active");
    
    makeCardsBtn.disabled = true;
    makeCardsBtn.textContent = "Generating...";
    if (flashcardLoading) flashcardLoading.style.display = "flex";
    if (flashcardOutput) flashcardOutput.style.display = "none";
    
    setTimeout(function() {
      currentFlashcards = sampleData.cs101.flashcards;
      currentCardIndex = 0;
      
      if (currentFlashcards.length > 0) {
        loadFlashcard();
        if (flashcardOutput) flashcardOutput.style.display = "block";
        showToast("Generated " + currentFlashcards.length + " flashcards!");
      }
      
      makeCardsBtn.disabled = false;
      makeCardsBtn.textContent = "Generate Flashcards from Notes";
      if (flashcardLoading) flashcardLoading.style.display = "none";
    }, 1000);
  });
}

// Load current flashcard
function loadFlashcard() {
  if (currentFlashcards.length === 0) return;
  
  var card = currentFlashcards[currentCardIndex];
  cardQuestion.textContent = card.q;
  cardAnswer.textContent = card.a;
  cardCounter.textContent = "Card " + (currentCardIndex + 1) + " of " + currentFlashcards.length;
  
  flashcard.classList.remove("flipped");
  prevCard.disabled = (currentCardIndex === 0);
  nextCard.disabled = (currentCardIndex === currentFlashcards.length - 1);
}

// Flip flashcard
flashcard.addEventListener("click", function() {
  flashcard.classList.toggle("flipped");
});

// Previous card button
prevCard.addEventListener("click", function() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    loadFlashcard();
  }
});

// Next card button
nextCard.addEventListener("click", function() {
  if (currentCardIndex < currentFlashcards.length - 1) {
    currentCardIndex++;
    loadFlashcard();
  }
});

// Keyboard controls for flashcards
document.addEventListener("keydown", function(event) {
  var flashcardsTab = document.getElementById("flashcards");
  if (!flashcardsTab.classList.contains("active")) return;
  
  if (event.key === "ArrowLeft" && !prevCard.disabled) {
    currentCardIndex--;
    loadFlashcard();
  } else if (event.key === "ArrowRight" && !nextCard.disabled) {
    currentCardIndex++;
    loadFlashcard();
  } else if (event.key === " ") {
    event.preventDefault();
    flashcard.classList.toggle("flipped");
  }
});

// Show toast message
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(function() {
    toast.classList.remove("show");
  }, 3000);
}

// Initialize vote counts
updateVoteCounts();
