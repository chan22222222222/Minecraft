// Get references to the three screens
const splash = document.getElementById('splash');
const loading = document.getElementById('loading');
const home = document.getElementById('home');
const progress = document.getElementById('progress');

// Reference to the background music (if you want to play it)
const bgMusic = document.getElementById('bgMusic');

// Show splash screen for 2 seconds
setTimeout(() => {
  // Hide splash, show loading
  splash.style.display = 'none';
  loading.style.display = 'flex';

  // Animate the loading bar over ~3 seconds
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      progress.style.width = width + '%';
    }
  }, 30); // ~3 seconds total to reach 100%

  // After 3 seconds on loading screen, switch to home
  setTimeout(() => {
    loading.style.display = 'none';
    home.style.display = 'flex';

    // Attempt to autoplay music (if desired)
    // Most browsers will block audio unless user interacts with the page
    bgMusic.play().catch((err) => {
      console.log("Autoplay was prevented. User interaction is required.", err);
      // Optionally show a "Play Music" button to let the user start audio manually
    });

  }, 3000);

}, 2000);
