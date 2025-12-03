// Terms of Service Modal
const tosModal = document.getElementById("tosModal");
const tosBtn = document.getElementById("tosBtn");
const closeTosBtn = document.getElementById("closeTosBtn");
const tosContent = document.getElementById("tosContent");

// TOS content
const tosText = `TERMS OF SERVICE

Effective Date: 12/10/2025
Last Updated: 12/2/2025

Welcome to STUDYHIVE, a web-based educational platform designed as part of an academic project at NJIT. These Terms of Service govern your access to and use of our website, services, and content. By accessing or using our website, you agree to be bound by these Terms.

1. PURPOSE OF THE PLATFORM

STUDYHIVE is a prototype learning and resource-sharing website designed for academic demonstration purposes. The platform allows users to upload, organize, and access study materials enhanced through AI-based summarization and collaboration tools. This is an educational demonstration and does not facilitate real financial transactions.

2. ACCEPTANCE OF TERMS

By accessing or using STUDYHIVE, you confirm that you are at least 18 years old or have obtained consent from a parent or guardian if you are under 18. You agree to comply with all applicable local, state, and federal laws when using the platform.

3. USER ACCOUNTS

You are responsible for maintaining the confidentiality of your login information and for all activity under your account. You agree to provide accurate, current, and complete information during registration.

4. EDUCATIONAL AND DEMONSTRATIVE NATURE

This website and its contents are intended solely for academic and instructional purposes. Any simulated e-commerce components are non-functional demonstrations and do not involve actual payments.

5. INTELLECTUAL PROPERTY RIGHTS

All text, code, graphics, and design created for STUDYHIVE are the intellectual property of the project's creators: Andrew Gardner, Jovan Fernandez, Umar Farooq, and Elliot Cecere. You may not copy, reproduce, modify, or distribute any materials without written consent.

6. USER CONTENT

By uploading content, you grant the Developers a limited, non-exclusive, royalty-free license to use, display, and test your content solely for demonstration purposes. You must ensure that any uploaded content does not infringe upon copyright or intellectual property rights.

7. PROHIBITED CONDUCT

Users agree not to: upload unlawful or harmful content, use the platform for commercial activity, attempt unauthorized access, upload malicious software, or impersonate others.

8. PRIVACY AND DATA USAGE

The website may collect limited user information for demonstration purposes only. This information will not be shared with third parties, sold, or used for marketing.

9. THIRD-PARTY LINKS

The website may include references to third-party resources for educational illustration only. We are not responsible for the content of these external sites.

10. DISCLAIMER OF WARRANTIES

This platform is provided "as is" and "as available" for educational purposes only. We disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.

11. LIMITATION OF LIABILITY

Under no circumstances shall the Developers be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website.

12. SUSPENSION AND TERMINATION

We reserve the right to suspend or terminate user access at any time for violation of these Terms or academic misuse.

13. MODIFICATIONS TO THE SERVICE

Because this website is a continuously evolving academic project, features and content may change frequently. Continued use constitutes acceptance of revised Terms.

14. GOVERNING LAW

These Terms shall be governed by the laws of the State of New Jersey.

15. CONTACT INFORMATION

For questions about these Terms, contact: StudyHCEO@gmail.com
Institution: New Jersey Institute of Technology
Course: IT310 Capstone Project

16. ENTIRE AGREEMENT

These Terms constitute the entire agreement between the user and the Developers regarding the use of STUDYHIVE.

17. ACKNOWLEDGMENT

By accessing and using STUDYHIVE, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.`;

// Format TOS as HTML with better structure
const tosHTML = tosText
  .split("\n\n")
  .map((paragraph) => {
    if (/^\d+\./.test(paragraph)) {
      return `<div class="tos-section">${paragraph.replace(
        /\n/g,
        "<br>"
      )}</div>`;
    }
    if (paragraph.includes("Welcome to STUDYHIVE")) {
      return `<p class="tos-intro">${paragraph}</p>`;
    }
    return `<p class="tos-para">${paragraph}</p>`;
  })
  .join("");

tosContent.innerHTML = tosHTML;

tosBtn.addEventListener("click", () => {
  tosModal.style.display = "block";
});

closeTosBtn.addEventListener("click", () => {
  tosModal.style.display = "none";
});

tosModal.addEventListener("click", (e) => {
  if (e.target === tosModal) {
    tosModal.style.display = "none";
  }
});
