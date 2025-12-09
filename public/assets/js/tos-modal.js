// Get elements
var tosModal = document.getElementById("tosModal");
var tosBtn = document.getElementById("tosBtn");
var closeTosBtn = document.getElementById("closeTosBtn");
var tosContent = document.getElementById("tosContent");

// TOS text
var tosText =
  'TERMS OF SERVICE\n\nEffective Date: 12/10/2025\nLast Updated: 12/2/2025\n\nWelcome to STUDYHIVE, a web-based educational platform designed as part of an academic project at NJIT. These Terms of Service govern your access to and use of our website, services, and content. By accessing or using our website, you agree to be bound by these Terms.\n\n1. PURPOSE OF THE PLATFORM\n\nSTUDYHIVE is a prototype learning and resource-sharing website designed for academic demonstration purposes. The platform allows users to upload, organize, and access study materials enhanced through AI-based summarization and collaboration tools. This is an educational demonstration and does not facilitate real financial transactions.\n\n2. ACCEPTANCE OF TERMS\n\nBy accessing or using STUDYHIVE, you confirm that you are at least 18 years old or have obtained consent from a parent or guardian if you are under 18. You agree to comply with all applicable local, state, and federal laws when using the platform.\n\n3. USER ACCOUNTS\n\nYou are responsible for maintaining the confidentiality of your login information and for all activity under your account. You agree to provide accurate, current, and complete information during registration.\n\n4. EDUCATIONAL AND DEMONSTRATIVE NATURE\n\nThis website and its contents are intended solely for academic and instructional purposes. Any simulated e-commerce components are non-functional demonstrations and do not involve actual payments.\n\n5. INTELLECTUAL PROPERTY RIGHTS\n\nAll text, code, graphics, and design created for STUDYHIVE are the intellectual property of the project\'s creators: Andrew Gardner, Jovan Fernandez, Umar Farooq, and Elliot Cecere. You may not copy, reproduce, modify, or distribute any materials without written consent.\n\n6. USER CONTENT\n\nBy uploading content, you grant the Developers a limited, non-exclusive, royalty-free license to use, display, and test your content solely for demonstration purposes. You must ensure that any uploaded content does not infringe upon copyright or intellectual property rights.\n\n7. PROHIBITED CONDUCT\n\nUsers agree not to: upload unlawful or harmful content, use the platform for commercial activity, attempt unauthorized access, upload malicious software, or impersonate others.\n\n8. PRIVACY AND DATA USAGE\n\nThe website may collect limited user information for demonstration purposes only. This information will not be shared with third parties, sold, or used for marketing.\n\n9. THIRD-PARTY LINKS\n\nThe website may include references to third-party resources for educational illustration only. We are not responsible for the content of these external sites.\n\n10. DISCLAIMER OF WARRANTIES\n\nThis platform is provided "as is" and "as available" for educational purposes only. We disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.\n\n11. LIMITATION OF LIABILITY\n\nUnder no circumstances shall the Developers be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website.\n\n12. SUSPENSION AND TERMINATION\n\nWe reserve the right to suspend or terminate user access at any time for violation of these Terms or academic misuse.\n\n13. MODIFICATIONS TO THE SERVICE\n\nBecause this website is a continuously evolving academic project, features and content may change frequently. Continued use constitutes acceptance of revised Terms.\n\n14. GOVERNING LAW\n\nThese Terms shall be governed by the laws of the State of New Jersey.\n\n15. CONTACT INFORMATION\n\nFor questions about these Terms, contact: StudyHCEO@gmail.com\nInstitution: New Jersey Institute of Technology\nCourse: IT310 Capstone Project\n\n16. ENTIRE AGREEMENT\n\nThese Terms constitute the entire agreement between the user and the Developers regarding the use of STUDYHIVE.\n\n17. ACKNOWLEDGMENT\n\nBy accessing and using STUDYHIVE, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.';

// Format TOS text into HTML
var paragraphs = tosText.split("\n\n");
var htmlOutput = "";

for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs[i];

  // Check if it's a numbered section
  if (paragraph.match(/^\d+\./)) {
    htmlOutput +=
      '<div class="tos-section">' + paragraph.replace(/\n/g, "<br>") + "</div>";
  }
  // Check if it's the intro paragraph
  else if (paragraph.indexOf("Welcome to STUDYHIVE") !== -1) {
    htmlOutput += '<p class="tos-intro">' + paragraph + "</p>";
  }
  // Regular paragraph
  else {
    htmlOutput += '<p class="tos-para">' + paragraph + "</p>";
  }
}

tosContent.innerHTML = htmlOutput;

// Open modal
tosBtn.addEventListener("click", function () {
  tosModal.style.display = "block";
});

// Close modal
closeTosBtn.addEventListener("click", function () {
  tosModal.style.display = "none";
});

// Close when clicking outside
tosModal.addEventListener("click", function (event) {
  if (event.target === tosModal) {
    tosModal.style.display = "none";
  }
});
