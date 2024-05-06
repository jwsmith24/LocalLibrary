export const initReel = () => {
  const reel = document.querySelector('.reel');
  const nextButton = document.getElementById('next-btn');
  const prevButton = document.getElementById('prev-btn');
  let reelIndex = 0;
  const interval = 5000; // interval in milliseconds
  let timer;

  function showImage(index) {
    for (let img of reel.children) {
      img.style.display = 'none';
    }
    reel.children[index].style.display = 'block';
  }

  function updateCircles() {
    console.log('updating circles');
    // reset circles
    const circles = document.querySelector('.circles');
    circles.innerHTML = '';

    for (let i = 0; i < reel.children.length; i++) {
      console.log(i);
      let circle = document.createElement('span');
      circle.classList.add('circle');
      if (i === reelIndex) {
        circle.classList.add('active');
      }

      // update reel index to selected circle, then update
      circle.addEventListener('click', () => {
        reelIndex = i;
        updateCircles();
        showImage(i);
        resetTimer();
      });
      circles.appendChild(circle);
    }
  }

  function startTimer() {
    timer = setInterval(() => {
      nextImage();
    }, interval);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  function resetTimer() {
    stopTimer();
    startTimer();
  }

  function nextImage() {
    reelIndex = reelIndex === reel.children.length - 1 ? 0 : reelIndex + 1;

    updateCircles();
    showImage(reelIndex);
  }

  function prevImage() {
    reelIndex = reelIndex === 0 ? reel.children.length - 1 : reelIndex - 1;

    updateCircles();
    showImage(reelIndex);
  }

  // advance to next image or loop to beginning, then update
  nextButton.addEventListener('click', () => {
    nextImage();
  });

  // Go back to prev image or loop to end, then update
  prevButton.addEventListener('click', () => {
    prevImage();
  });

  updateCircles();
  showImage(reelIndex);
  startTimer();
};
