document.addEventListener('DOMContentLoaded', function () {
    const heartButton = document.getElementById('heartButton');
    let isHeartFilled = false;
  
    heartButton.addEventListener('click', function () {
      const heartPath = heartButton.querySelector('svg path');
      isHeartFilled = !isHeartFilled;
  
      if (isHeartFilled) {
        heartPath.setAttribute('fill', 'pink');
      } else {
        heartPath.setAttribute('fill', 'currentColor');
      }
    });
  });
  
  