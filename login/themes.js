const defaultSettings = {
  backgroundColor: '#1e1f22',
  fontFamily: 'gg sans',
  backgroundImage: 'url("https://github.com/hatsunevencord/vencord-experimental/assets/login/vencordbg.jpg")'
};

function toggleThemes() {
  const themesPanel = document.querySelector('.themes-panel');
  themesPanel.style.display = themesPanel.style.display === 'none' ? 'block' : 'none';
}

// Theme customization functions
const bgColor = document.getElementById('bgColor');
const fontSelect = document.getElementById('fontSelect');
const bgImage = document.getElementById('bgImage');

bgColor.addEventListener('change', (e) => {
  document.body.style.backgroundColor = e.target.value;
});

fontSelect.addEventListener('change', (e) => {
  document.body.style.fontFamily = e.target.value;
});

bgImage.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.body.style.backgroundImage = `url(${e.target.result})`;
    };
    reader.readAsDataURL(file);
  }
});

function restoreDefaults() {
  document.body.style.backgroundColor = defaultSettings.backgroundColor;
  document.body.style.fontFamily = defaultSettings.fontFamily;
  document.body.style.backgroundImage = defaultSettings.backgroundImage;
  
  // Reset the input values
  bgColor.value = defaultSettings.backgroundColor;
  fontSelect.value = defaultSettings.fontFamily;
  bgImage.value = ''; // Clear file input
}
