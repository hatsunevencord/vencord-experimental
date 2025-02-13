document.getElementById('secretInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const inputValue = this.value;
    if (inputValue === 'MTAxNzE3Njg0Nzg2NTM1MjMzMg==') {
      window.location.href = 'https://hatsunevencord.github.io/vencord-experimental/login';
    }
  }
});
