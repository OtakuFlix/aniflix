// Your existing functions
function toggleMenu() {
  // Add your menu toggle logic here
  alert('Menu icon clicked!');
}

function openSearch() {
  // Add your search functionality here
  alert('Search icon clicked!');
}

function openProfile() {
  alert('Profile icon clicked!');
  // Add your profile-related functionality here
}

// Additional functions you might need
function closeModal() {
  // Add logic to close the modal
}

function playAnime(videoUrl) {
  // Add logic to play the selected anime
  alert('Playing anime: ' + videoUrl);
}

function viewDetails(detailsUrl) {
  // Add logic to view detailed information about the selected anime
  alert('Viewing details for: ' + detailsUrl);
}

function toggleProfileInfo() {
  // Add logic to toggle the profile info box
  alert('Profile info toggled!');
}

// Add these functions for language selection
function selectLanguage(language) {
  // Remove 'selected' class from all buttons
  document.getElementById('japButton').classList.remove('selected');
  document.getElementById('hinButton').classList.remove('selected');
  document.getElementById('engButton').classList.remove('selected');

  // Add 'selected' class to the clicked button
  document.getElementById(language + 'Button').classList.add('selected');

  // Add logic to handle language selection
  alert('Selected language: ' + language);
}

document.addEventListener('DOMContentLoaded', function () {
  const languageButtons = document.querySelectorAll('.language-buttons button');

  languageButtons.forEach(button => {
    button.addEventListener('mouseenter', function () {
      const fullName = this.getAttribute('data-full-name').toUpperCase();
      this.textContent = fullName;
    });

    button.addEventListener('mouseleave', function () {
      const shortName = this.getAttribute('id').replace('Button', '');
      this.textContent = shortName;
    });

    button.addEventListener('click', function () {
      const language = this.getAttribute('id').replace('Button', '');
      selectLanguage(language);
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // spotlightAnimation(); // Commented out as the spotlightAnimation function is removed
});

function spotlightAnimation() {
  const spotlightContainer = document.querySelector('.spotlight-inner');
  const spotlights = spotlightContainer.querySelectorAll('img');
  const spotlightWidth = spotlights[0].clientWidth;
  let currentSpotlight = 0;

  setInterval(() => {
    spotlights[currentSpotlight].style.transition = 'opacity 2s';
    spotlights[currentSpotlight].style.opacity = 0;

    currentSpotlight = (currentSpotlight + 1) % spotlights.length;

    setTimeout(() => {
      spotlights[currentSpotlight].style.transition = 'none';
      spotlights[currentSpotlight].style.opacity = 1;
    }, 2000);
  }, 5000);
}
