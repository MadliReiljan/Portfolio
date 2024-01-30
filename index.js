document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typed-text');
    const textToType = "I am Madli Reiljan,\nJunior Software Developer.";
  
    function typeWriterEffect(text, index) {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(function () {
          typeWriterEffect(text, index);
        }, 90);
      }
    }
  
    typeWriterEffect(textToType, 0);
  });